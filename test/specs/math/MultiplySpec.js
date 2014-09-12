(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'math/multiply'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/math/multiply' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Multiply Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.multiply ).to.exist;
        });

        it("should multiply integers", function () {
            expect( helpers.multiply( 10, 2 ) ).to.equal( 20 );
            expect( helpers.multiply( 100, 10 ) ).to.equal( 1000 );
            expect( helpers.multiply( 1000000, 2 ) ).to.equal( 2000000 );
        });

        it("should multiply integers when complied as a template", function () {
            var template = Handlebars.compile( '{{multiply 10 2}}' );
            expect( template() ).to.equal( '20' );
            template = Handlebars.compile( '{{multiply 100 10}}' );
            expect( template() ).to.equal( '1000' );
            template = Handlebars.compile( '{{multiply 1000000 2}}' );
            expect( template() ).to.equal( '2000000' );
        });

        it("should multiply an integer and a float", function () {
            expect( helpers.multiply( 10, 2.5 ) ).to.equal( 25 );
        });

        it("should multiply an integer and a float when complied as a template", function () {
            var template = Handlebars.compile( '{{multiply 10 2.5}}' );
            expect( template() ).to.equal( '25' );
        });

        it("should multiply floats", function () {
            expect( helpers.multiply( 12.5, 2.5 ) ).to.equal( 31.25 );
        });

        it("should multiply floats when complied as a template", function () {
            var template = Handlebars.compile( '{{multiply 12.5 2.5}}' );
            expect( template() ).to.equal( '31.25' );
        });
    });
}));
