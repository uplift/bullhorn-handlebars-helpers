(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'date/ago'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/date/ago' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Ago Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.ago ).to.exist;
        });

        it("should show new date as a few seconds ago", function () {
            var date = new Date();
            expect( helpers.ago( date, {} ) ).to.equal( 'Now' );
        });

        it("should show new date as a few seconds ago when complied as a template", function () {
            var date = new Date(),
                template = Handlebars.compile( '{{ago date}}' );

            expect( template( { date: date } ) ).to.equal( 'Now' );
        });

        it("should return the given value if the value is an invalid date", function () {
            expect( helpers.ago( "gibberish", {} ) ).to.equal( 'gibberish' );
        });

        it("should return the given value if the value is an invalid date when complied as a template", function () {
            var template = Handlebars.compile( '{{ago "gibberish"}}' );
            expect( template() ).to.equal( 'gibberish' );
        });
    });
}));
