(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'string/lowercase'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/string/lowercase' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Lowercase Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.lowercase ).to.exist;
        });

        it("should lowercase all letter in the string", function () {
            expect( helpers.lowercase( "HELLO" ) ).to.equal( "hello" );
            expect( helpers.lowercase( "HeLlO WoRlD" ) ).to.equal( "hello world" );
            expect( helpers.lowercase( "hello WORLD this IS my SENTENCE" ) ).to.equal( "hello world this is my sentence" );
        });

        it("should lowercase all letter in the string when complied as a template", function () {
            var template = Handlebars.compile( '{{lowercase "HELLO"}}' );
            expect( template() ).to.equal( "hello" );
            template = Handlebars.compile( '{{lowercase "HeLlO WoRlD"}}' );
            expect( template() ).to.equal( "hello world" );
            template = Handlebars.compile( '{{lowercase "hello WORLD this IS my SENTENCE"}}' );
            expect( template() ).to.equal( "hello world this is my sentence" );
        });
    });
}));
