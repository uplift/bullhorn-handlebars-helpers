(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'string/encodeURIComponent'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/string/encodeURIComponent' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Encode URI Component Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.encodeURIComponent ).to.exist;
        });

        it("should encode string into valid URI components", function () {
            expect( helpers.encodeURIComponent( "hello world" ) ).to.equal( "hello%20world" );
            expect( helpers.encodeURIComponent( "hello+world" ) ).to.equal( "hello%2Bworld" );
        });

        it("should encode string into valid URI components when complied as a template", function () {
            var template = Handlebars.compile( '{{encodeURIComponent "hello world"}}' );
            expect( template() ).to.equal( "hello%20world" );
            template = Handlebars.compile( '{{encodeURIComponent "hello+world"}}' );
            expect( template() ).to.equal( "hello%2Bworld" );
        });
    });
}));
