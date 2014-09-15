(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'math/round'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/math/round' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Round Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.round ).to.exist;
        });

        it("should round integer to same integer", function () {
            expect( helpers.round( 10 ) ).to.equal( 10 );
            expect( helpers.round( 100 ) ).to.equal( 100 );
            expect( helpers.round( 5 ) ).to.equal( 5 );
        });

        it("should round integer to same integer when complied as a template", function () {
            var template = Handlebars.compile( '{{round 10}}' );
            expect( template() ).to.equal( '10' );
            template = Handlebars.compile( '{{round 100}}' );
            expect( template() ).to.equal( '100' );
            template = Handlebars.compile( '{{round 5}}' );
            expect( template() ).to.equal( '5' );
        });

        it("should round floats under .5 to lower integer", function () {
            expect( helpers.round( 1.01 ) ).to.equal( 1 );
            expect( helpers.round( 2.2 ) ).to.equal( 2 );
            expect( helpers.round( 3.49 ) ).to.equal( 3 );
            expect( helpers.round( 3.5 ) ).to.equal( 4 );
        });

        it("should round floats under .5 to lower integer when complied as a template", function () {
            var template = Handlebars.compile( '{{round 1.01}}' );
            expect( template() ).to.equal( '1' );
            var template = Handlebars.compile( '{{round 2.2}}' );
            expect( template() ).to.equal( '2' );
            var template = Handlebars.compile( '{{round 3.49}}' );
            expect( template() ).to.equal( '3' );
            var template = Handlebars.compile( '{{round 3.5}}' );
            expect( template() ).to.equal( '4' );
        });

        it("should round floats greater or equal .5 to higher integer", function () {
            expect( helpers.round( 3.5 ) ).to.equal( 4 );
            expect( helpers.round( 3.51 ) ).to.equal( 4 );
            expect( helpers.round( 4.75 ) ).to.equal( 5 );
        });

        it("should round floats greater or equal .5 to higher integer when complied as a template", function () {
            var template = Handlebars.compile( '{{round 3.5}}' );
            expect( template() ).to.equal( '4' );
            var template = Handlebars.compile( '{{round 3.51}}' );
            expect( template() ).to.equal( '4' );
            var template = Handlebars.compile( '{{round 4.75}}' );
            expect( template() ).to.equal( '5' );
        });
    });
}));
