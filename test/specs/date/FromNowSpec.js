(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'date/fromNow'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/date/fromNow' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('From Now Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.fromNow ).to.exist;
        });

        it("should show new date as a few seconds ago", function () {
            var date = new Date();
            expect( helpers.fromNow( date, {} ) ).to.equal( 'a few seconds ago' );
        });

        it("should show new date as a few seconds ago when complied as a template", function () {
            var date = new Date(),
                template = Handlebars.compile( '{{fromNow date}}' );

            expect( template( { date: date } ) ).to.equal( 'a few seconds ago' );
        });

        it("should show new date as a few seconds if suffix of true is passed", function () {
            var date = new Date();
            expect( helpers.fromNow( date, true, {} ) ).to.equal( 'a few seconds' );
        });

        it("should show new date as a few seconds if suffix of true is passed", function () {
            var date = new Date(),
                template = Handlebars.compile( '{{fromNow date true}}' );

            expect( template( { date: date } ) ).to.equal( 'a few seconds' );
        });

        it("should return the given value if the value is an invalid date", function () {
            expect( helpers.fromNow( "gibberish", {} ) ).to.equal( 'gibberish' );
        });

        it("should return the given value if the value is an invalid date when complied as a template", function () {
            var template = Handlebars.compile( '{{fromNow "gibberish"}}' );
            expect( template() ).to.equal( 'gibberish' );
        });
    });
}));
