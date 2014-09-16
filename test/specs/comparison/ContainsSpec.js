(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'comparison/contains'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/comparison/contains' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Contains Handlebars Helper', function () {
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
            expect( helpers.contains ).to.exist;
        });

        it("should return main branch for string matching part of the string", function () {
            expect( helpers.contains( "testing", "sting", options ) ).to.be.true;
        });

        it("should return main branch for string matching part of the string when complied as a template", function () {
            var template = Handlebars.compile( '{{#contains "testing" "sting"}}main branch{{else}}inverse branch{{/contains}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for string not matching part of the string", function () {
            expect( helpers.contains( "testing", "boom", options ) ).to.be.false;
        });

        it("should return inverse branch for string not matching part of the string when complied as a template", function () {
            var template = Handlebars.compile( '{{#contains "testing" "boom"}}main branch{{else}}inverse branch{{/contains}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return main branch for array containing the compare value", function () {
            expect( helpers.contains( [ "testing", "hello", "world" ], "hello", options ) ).to.be.true;
        });

        it("should return main branch for array containing the compare value when complied as a template", function () {
            var template = Handlebars.compile( '{{#contains array "hello"}}main branch{{else}}inverse branch{{/contains}}' );
            expect( template( { array: [ "testing", "hello", "world" ] } ) ).to.equal( "main branch" );
        });

        it("should return inverse branch for array not containing the compare value", function () {
            expect( helpers.contains( [ "testing", "hello", "world" ], "boom", options ) ).to.be.false;
        });

        it("should return inverse branch for array not containing the compare value when complied as a template", function () {
            var template = Handlebars.compile( '{{#contains array "boom"}}main branch{{else}}inverse branch{{/contains}}' );
            expect( template( { array: [ "testing", "hello", "world" ] } ) ).to.equal( "inverse branch" );
        });
    });
}));
