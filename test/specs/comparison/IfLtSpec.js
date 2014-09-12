(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'comparison/if-lt'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/comparison/if-lt' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('If Less Than Handlebars Helper', function () {
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
            expect( helpers[ "if-lt" ] ).to.exist;
        });

        it("should return main branch for values lower than the compare value", function () {
            expect( helpers[ "if-lt" ]( 5, 10, options ) ).to.be.true;
        });

        it("should return main branch for values greater than the compare value when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-lt 5 10}}main branch{{else}}inverse branch{{/if-lt}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for values greater than the compare value", function () {
            expect( helpers[ "if-lt" ]( 10, 5, options ) ).to.be.false;
        });

        it("should return inverse branch for values greater than the compare value when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-lt 10 5}}main branch{{else}}inverse branch{{/if-lt}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return inverse branch for values equal to the compare value", function () {
            expect( helpers[ "if-lt" ]( 5, 5, options ) ).to.be.false;
        });

        it("should return inverse branch for values equal to the compare value when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-lt 5 5}}main branch{{else}}inverse branch{{/if-lt}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return undefined if values arent lower than and no inverse function is specified", function () {
            expect( helpers[ "if-lte" ]( 1, 0, {
                fn: function() {
                    return true;
                }
            })).to.be.undefined;
        });

        it("should return undefined if values arent greater than and no inverse function is specified when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-lte 1 0}}main branch{{/if-lte}}' );
            expect( template() ).to.equal( "" );
        });
    });
}));
