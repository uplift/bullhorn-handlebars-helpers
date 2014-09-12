(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'math/subtract'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/math/subtract' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Subtract Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.subtract ).to.exist;
        });

        it("should subtract integers", function () {
            expect( helpers.subtract( 10, 2 ) ).to.equal( 8 );
            expect( helpers.subtract( 8, 100 ) ).to.equal( -92 );
            expect( helpers.subtract( 1000000, 200000 ) ).to.equal( 800000 );
        });

        it("should subtract integers when complied as a template", function () {
            var template = Handlebars.compile( '{{subtract 10 2}}' );
            expect( template() ).to.equal( '8' );
            template = Handlebars.compile( '{{subtract 8 100}}' );
            expect( template() ).to.equal( '-92' );
            template = Handlebars.compile( '{{subtract 1000000 200000}}' );
            expect( template() ).to.equal( '800000' );
        });

        it("should subtract an integer and a float", function () {
            expect( helpers.subtract( 10, 2.5 ) ).to.equal( 7.5 );
        });

        it("should subtract an integer and a float when complied as a template", function () {
            var template = Handlebars.compile( '{{subtract 10 2.5}}' );
            expect( template() ).to.equal( '7.5' );
        });

        it("should subtract floats", function () {
            expect( helpers.subtract( 10.75, 2.2 ) ).to.equal( 8.55 );
        });

        it("should subtract floats when complied as a template", function () {
            var template = Handlebars.compile( '{{subtract 10.75 2.2}}' );
            expect( template() ).to.equal( '8.55' );
        });
    });
}));
