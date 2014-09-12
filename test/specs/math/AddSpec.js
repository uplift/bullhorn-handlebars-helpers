(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'math/add'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/math/add' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Add Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.add ).to.exist;
        });

        it("should add integers", function () {
            expect( helpers.add( 10, 2 ) ).to.equal( 12 );
            expect( helpers.add( 8, 100 ) ).to.equal( 108 );
            expect( helpers.add( 1000000, 200000 ) ).to.equal( 1200000 );
        });

        it("should add integers when complied as a template", function () {
            var template = Handlebars.compile( '{{add 10 2}}' );
            expect( template() ).to.equal( '12' );
            template = Handlebars.compile( '{{add 8 100}}' );
            expect( template() ).to.equal( '108' );
            template = Handlebars.compile( '{{add 1000000 200000}}' );
            expect( template() ).to.equal( '1200000' );
        });

        it("should add an integer and a float", function () {
            expect( helpers.add( 10, 2.5 ) ).to.equal( 12.5 );
        });

        it("should add an integer and a float when complied as a template", function () {
            var template = Handlebars.compile( '{{add 10 2.5}}' );
            expect( template() ).to.equal( '12.5' );
        });

        it("should add floats", function () {
            expect( helpers.add( 10.75, 2.2 ) ).to.equal( 12.95 );
        });

        it("should add floats when complied as a template", function () {
            var template = Handlebars.compile( '{{add 10.75 2.2}}' );
            expect( template() ).to.equal( '12.95' );
        });
    });
}));
