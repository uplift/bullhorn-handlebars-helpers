(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'array/join'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/array/join' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Join Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.join ).to.exist;
        });

        it('should join the array contents with the default delimiter when no delimiter is given', function() {
            expect( helpers.join( [ "hello", "world", "look", "at", "me" ] ) ).to.equal( 'hello, world, look, at, me' );
        });

        it('should join the array contents with the default delimiter when no delimiter is given when complied as a template', function() {
            var template = Handlebars.compile( '{{join array}}' ),
                array = [ "hello", "world", "look", "at", "me" ];

            expect( template( { array: array } ) ).to.equal( 'hello, world, look, at, me' );
        });

        it('should join the array contents with the delimiter given', function() {
            expect( helpers.join( [ "hello", "world", "look", "at", "me" ], " + " ) ).to.equal( 'hello + world + look + at + me' );
        });

        it('should join the array contents with the delimiter given when complied as a template', function() {
            var template = Handlebars.compile( '{{join array " + "}}' ),
                array = [ "hello", "world", "look", "at", "me" ];

            expect( template( { array: array } ) ).to.equal( 'hello + world + look + at + me' );
        });

        it('should return empty string when non array is passed', function() {
            expect( helpers.join( "hello" ) ).to.equal( '' );
            expect( helpers.join( 5 ) ).to.equal( '' );
            expect( helpers.join( true ) ).to.equal( '' );
            expect( helpers.join( {} ) ).to.equal( '' );
            expect( helpers.join( null ) ).to.equal( '' );
            expect( helpers.join( undefined ) ).to.equal( '' );
        });

        it('should return empty string when non array is passed when complied as a template', function() {
            var template = Handlebars.compile( '{{join array}}' );

            expect( template( { array: "hello" } ) ).to.equal( '' );
            expect( template( { array: 5 } ) ).to.equal( '' );
            expect( template( { array: true } ) ).to.equal( '' );
            expect( template( { array: {} } ) ).to.equal( '' );
            expect( template( { array: null } ) ).to.equal( '' );
            expect( template( { array: undefined } ) ).to.equal( '' );
        });
    });
}));
