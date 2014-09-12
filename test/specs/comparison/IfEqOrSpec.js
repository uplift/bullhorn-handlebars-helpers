(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'comparison/if-eqor'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/comparison/if-eqor' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('If EqualOr Handlebars Helper', function () {
        var helpers = Handlebars.helpers, options;

        beforeEach(function() {
            options = {
                fn: function() {
                    return true;
                },
                inverse: function() {
                    return false;
                }
            };
        });

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers[ "if-eqor" ] ).to.exist;
        });

        it("should return main branch for a matching value in the arguments list", function () {
            expect( helpers[ "if-eqor" ]( "testing", 1, "hello", [], "testing", options ) ).to.be.true;
        });

        it("should return main branch for a matching value in the arguments list when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eqor "testing" 1 "hello" array "testing"}}main branch{{else}}inverse branch{{/if-eqor}}' ),
                array = [];

            expect( template( { array: array } ) ).to.equal( "main branch" );
        });

        it("should return inverse branch for non matching values in the arguments list", function () {
            expect( helpers[ "if-eqor" ]( "testing", "test", 0, {}, true, options ) ).to.be.false;
        });

        it("should return inverse branch for non matching values in the arguments list when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eqor "testing" "test" 0 obj true}}main branch{{else}}inverse branch{{/if-eqor}}' ),
                obj = {};

            expect( template( { obj: obj } ) ).to.equal( "inverse branch" );
        });

        it("should return undefined if values don't equal  any in the argument list and no inverse function is specified", function () {
            expect( helpers[ "if-eqor" ]( 5, 10, 15, 3, 0, 1, {
                fn: function() {
                    return true;
                }
            })).to.be.undefined;
        });

        it("should return empty string if values don't equal  any in the argument list and no inverse function is specified when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eqor 5 10 15 3 0 1}}main branch{{/if-eqor}}' );
            expect( template() ).to.equal( "" );
        });
    });
}));
