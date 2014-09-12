(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'string/capitalize'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/string/capitalize' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Capitalize Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.capitalize ).to.exist;
        });

        it("should captialize the first letter of a sentence", function () {
            expect( helpers.capitalize( "hello" ) ).to.equal( "Hello" );
            expect( helpers.capitalize( "hello world" ) ).to.equal( "Hello world" );
            expect( helpers.capitalize( "hello world this is my sentence" ) ).to.equal( "Hello world this is my sentence" );
        });

        it("should captialize the first letter of a sentence when complied as a template", function () {
            var template = Handlebars.compile( '{{capitalize "hello"}}' );
            expect( template() ).to.equal( "Hello" );
            template = Handlebars.compile( '{{capitalize "hello world"}}' );
            expect( template() ).to.equal( "Hello world" );
            template = Handlebars.compile( '{{capitalize "hello world this is my sentence"}}' );
            expect( template() ).to.equal( "Hello world this is my sentence" );
        });
    });
}));
