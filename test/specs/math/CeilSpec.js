(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'math/ceil'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/math/ceil' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Ceil Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.ceil ).to.exist;
        });

        it("should round integer to same integer", function () {
            expect( helpers.ceil( 10 ) ).to.equal( 10 );
            expect( helpers.ceil( 100 ) ).to.equal( 100 );
            expect( helpers.ceil( 5 ) ).to.equal( 5 );
        });

        it("should round integer to same integer when complied as a template", function () {
            var template = Handlebars.compile( '{{ceil 10}}' );
            expect( template() ).to.equal( '10' );
            template = Handlebars.compile( '{{ceil 100}}' );
            expect( template() ).to.equal( '100' );
            template = Handlebars.compile( '{{ceil 5}}' );
            expect( template() ).to.equal( '5' );
        });

        it("should round float to higher integer", function () {
            expect( helpers.ceil( 1.01 ) ).to.equal( 2 );
            expect( helpers.ceil( 2.2 ) ).to.equal( 3 );
            expect( helpers.ceil( 3.49 ) ).to.equal( 4 );
            expect( helpers.ceil( 3.5 ) ).to.equal( 4 );
            expect( helpers.ceil( 3.51 ) ).to.equal( 4 );
            expect( helpers.ceil( 4.75 ) ).to.equal( 5 );
        });

        it("should round float to higher integer when complied as a template", function () {
            var template = Handlebars.compile( '{{ceil 1.01}}' );
            expect( template() ).to.equal( '2' );
            var template = Handlebars.compile( '{{ceil 2.2}}' );
            expect( template() ).to.equal( '3' );
            var template = Handlebars.compile( '{{ceil 3.49}}' );
            expect( template() ).to.equal( '4' );
            var template = Handlebars.compile( '{{ceil 3.5}}' );
            expect( template() ).to.equal( '4' );
            var template = Handlebars.compile( '{{ceil 3.51}}' );
            expect( template() ).to.equal( '4' );
            var template = Handlebars.compile( '{{ceil 4.75}}' );
            expect( template() ).to.equal( '5' );
        });
    });
}));
