(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'comparison/endsWith'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/comparison/endsWith' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Ends With Handlebars Helper', function () {
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
            expect( helpers.endsWith ).to.exist;
        });

        it("should return main branch for values matching end of string", function () {
            expect( helpers.endsWith( "testing", "ing", options ) ).to.be.true;
        });

        it("should return main branch for values matching end of string when complied as a template", function () {
            var template = Handlebars.compile( '{{#endsWith "testing" "ing"}}main branch{{else}}inverse branch{{/endsWith}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for values not matching end of string", function () {
            expect( helpers.endsWith( "testing", "tin", options ) ).to.be.false;
        });

        it("should return inverse branch for values not matching end of string when complied as a template", function () {
            var template = Handlebars.compile( '{{#endsWith "testing" "tin"}}main branch{{else}}inverse branch{{/endsWith}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return inverse branch for no end compare value", function () {
            expect( helpers.endsWith( "testing", options ) ).to.be.false;
        });

        it("should return inverse branch for no end compare value when complied as a template", function () {
            var template = Handlebars.compile( '{{#endsWith "testing"}}main branch{{else}}inverse branch{{/endsWith}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return inverse branch for end compare values that have longer length than the value length", function () {
            expect( helpers.endsWith( "testing", "123testing", options ) ).to.be.false;
        });

        it("should return inverse branch for end compare values that have longer length than the value length when complied as a template", function () {
            var template = Handlebars.compile( '{{#endsWith "testing" "123testing"}}main branch{{else}}inverse branch{{/endsWith}}' );
            expect( template() ).to.equal( "inverse branch" );
        });
    });
}));
