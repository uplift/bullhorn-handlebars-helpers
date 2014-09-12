(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'string/uppercase'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/string/uppercase' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Uppercase Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.uppercase ).to.exist;
        });

        it("should uppercase all letter in the string", function () {
            expect( helpers.uppercase( "hello" ) ).to.equal( "HELLO" );
            expect( helpers.uppercase( "HeLlO WoRlD" ) ).to.equal( "HELLO WORLD" );
            expect( helpers.uppercase( "hello WORLD this IS my SENTENCE" ) ).to.equal( "HELLO WORLD THIS IS MY SENTENCE" );
        });

        it("should uppercase all letter in the string when complied as a template", function () {
            var template = Handlebars.compile( '{{uppercase "hello"}}' );
            expect( template() ).to.equal( "HELLO" );
            template = Handlebars.compile( '{{uppercase "HeLlO WoRlD"}}' );
            expect( template() ).to.equal( "HELLO WORLD" );
            template = Handlebars.compile( '{{uppercase "hello WORLD this IS my SENTENCE"}}' );
            expect( template() ).to.equal( "HELLO WORLD THIS IS MY SENTENCE" );
        });
    });
}));
