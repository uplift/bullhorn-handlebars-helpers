(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'math/floor'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/math/floor' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Floor Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.floor ).to.exist;
        });

        it("should round integer to same integer", function () {
            expect( helpers.floor( 10 ) ).to.equal( 10 );
            expect( helpers.floor( 100 ) ).to.equal( 100 );
            expect( helpers.floor( 5 ) ).to.equal( 5 );
        });

        it("should round integer to same integer when complied as a template", function () {
            var template = Handlebars.compile( '{{floor 10}}' );
            expect( template() ).to.equal( '10' );
            template = Handlebars.compile( '{{floor 100}}' );
            expect( template() ).to.equal( '100' );
            template = Handlebars.compile( '{{floor 5}}' );
            expect( template() ).to.equal( '5' );
        });

        it("should round float to lower integer", function () {
            expect( helpers.floor( 1.01 ) ).to.equal( 1 );
            expect( helpers.floor( 2.2 ) ).to.equal( 2 );
            expect( helpers.floor( 3.49 ) ).to.equal( 3 );
            expect( helpers.floor( 3.5 ) ).to.equal( 3 );
            expect( helpers.floor( 3.51 ) ).to.equal( 3 );
            expect( helpers.floor( 4.75 ) ).to.equal( 4 );
        });

        it("should round float to lower integer when complied as a template", function () {
            var template = Handlebars.compile( '{{floor 1.01}}' );
            expect( template() ).to.equal( '1' );
            var template = Handlebars.compile( '{{floor 2.2}}' );
            expect( template() ).to.equal( '2' );
            var template = Handlebars.compile( '{{floor 3.49}}' );
            expect( template() ).to.equal( '3' );
            var template = Handlebars.compile( '{{floor 3.5}}' );
            expect( template() ).to.equal( '3' );
            var template = Handlebars.compile( '{{floor 3.51}}' );
            expect( template() ).to.equal( '3' );
            var template = Handlebars.compile( '{{floor 4.75}}' );
            expect( template() ).to.equal( '4' );
        });
    });
}));
