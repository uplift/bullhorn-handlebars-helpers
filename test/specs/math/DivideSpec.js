(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'math/divide'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/math/divide' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Divide Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.divide ).to.exist;
        });

        it("should divide integers", function () {
            expect( helpers.divide( 10, 2 ) ).to.equal( 5 );
            expect( helpers.divide( 100, 10 ) ).to.equal( 10 );
            expect( helpers.divide( 1000000, 200000 ) ).to.equal( 5 );
        });

        it("should divide integers when complied as a template", function () {
            var template = Handlebars.compile( '{{divide 10 2}}' );
            expect( template() ).to.equal( '5' );
            template = Handlebars.compile( '{{divide 100 10}}' );
            expect( template() ).to.equal( '10' );
            template = Handlebars.compile( '{{divide 1000000 200000}}' );
            expect( template() ).to.equal( '5' );
        });

        it("should divide an integer and a float", function () {
            expect( helpers.divide( 10, 2.5 ) ).to.equal( 4 );
        });

        it("should divide an integer and a float when complied as a template", function () {
            var template = Handlebars.compile( '{{divide 10 2.5}}' );
            expect( template() ).to.equal( '4' );
        });

        it("should divide floats", function () {
            expect( helpers.divide( 11.25, 1.25 ) ).to.equal( 9 );
        });

        it("should divide floats when complied as a template", function () {
            var template = Handlebars.compile( '{{divide 11.25 1.25}}' );
            expect( template() ).to.equal( '9' );
        });
    });
}));
