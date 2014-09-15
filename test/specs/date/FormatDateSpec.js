(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'date/formatDate'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/date/formatDate' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Format Date Handlebars Helper', function () {
        var helpers = Handlebars.helpers,
            options;

        beforeEach(function() {
            options = {};
        });

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.formatDate ).to.exist;
        });

        it("should format the given date with the default format", function () {
            expect( helpers.formatDate( "2014-09-11", options ) ).to.equal( '11/09/2014' );
        });

        it("should format the given date with the default format when complied as a template", function () {
            var template = Handlebars.compile( '{{formatDate "2014-09-11"}}' );
            expect( template() ).to.equal( '11/09/2014' );
        });

        it("should format the given date in the specified format", function () {
            expect( helpers.formatDate( "2014-09-11", "Do MMM YYYY", options ) ).to.equal( "11th Sep 2014" );
            expect( helpers.formatDate( "2014-09-11", "dddd, MMMM Do YYYY, h:mm:ss a", options ) ).to.equal( "Thursday, September 11th 2014, 12:00:00 am" );
        });

        it("should format the given date in the specified format when complied as a template", function () {
            var template = Handlebars.compile( '{{formatDate "2014-09-11" "Do MMM YYYY"}}' );
            expect( template() ).to.equal( '11th Sep 2014' );
            template = Handlebars.compile( '{{formatDate "2014-09-11" "dddd, MMMM Do YYYY, h:mm:ss a"}}' );
            expect( template() ).to.equal( 'Thursday, September 11th 2014, 12:00:00 am' );
        });

        it("should return the given value if the value is an invalid date", function () {
            expect( helpers.formatDate( "gibberish", options ) ).to.equal( 'gibberish' );
        });

        it("should return the given value if the value is an invalid date when complied as a template", function () {
            var template = Handlebars.compile( '{{formatDate "gibberish"}}' );
            expect( template() ).to.equal( 'gibberish' );
        });
    });
}));
