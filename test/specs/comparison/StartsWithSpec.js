(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'comparison/startsWith'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/comparison/startsWith' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Starts With Handlebars Helper', function () {
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
            expect( helpers.startsWith ).to.exist;
        });

        it("should return main branch for values matching start of string", function () {
            expect( helpers.startsWith( "testing", "test", options ) ).to.be.true;
        });

        it("should return main branch for values matching start of string when complied as a template", function () {
            var template = Handlebars.compile( '{{#startsWith "testing" "test"}}main branch{{else}}inverse branch{{/startsWith}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for values not matching start of string", function () {
            expect( helpers.startsWith( "testing", "tin", options ) ).to.be.false;
        });

        it("should return inverse branch for values not matching start of string when complied as a template", function () {
            var template = Handlebars.compile( '{{#startsWith "testing" "est"}}main branch{{else}}inverse branch{{/startsWith}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return inverse branch for no start compare value", function () {
            expect( helpers.startsWith( "testingstart", options ) ).to.be.false;
        });

        it("should return inverse branch for no start compare value when complied as a template", function () {
            var template = Handlebars.compile( '{{#startsWith "testing"}}main branch{{else}}inverse branch{{/startsWith}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return inverse branch for start compare values that have longer length than the value length", function () {
            expect( helpers.startsWith( "testing", "123testing", options ) ).to.be.false;
        });

        it("should return inverse branch for start compare values that have longer length than the value length when complied as a template", function () {
            var template = Handlebars.compile( '{{#startsWith "testing" "123testing"}}main branch{{else}}inverse branch{{/startsWith}}' );
            expect( template() ).to.equal( "inverse branch" );
        });
    });
}));
