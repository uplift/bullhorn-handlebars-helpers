(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'moment',
                'date/now'
            ],
            function( Handlebars, moment ) {
                factory( Handlebars.default, root.expect, moment );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        var moment = require( 'moment' );
        require( '../../../src/date/now' )( Handlebars );
        factory( Handlebars, expect, moment );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect, root.moment );
    }
}( this, function( Handlebars, expect, moment ) {
    describe('Now Handlebars Helper', function () {
        var helpers = Handlebars.helpers,
            options;

        beforeEach(function() {
            options = {};
        });

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.now ).to.exist;
        });

        it("should format the date now with default format if format isn't specified", function () {
            var compare = moment(),
                now = helpers.now( options ),
                nowDate = moment( now, "DD/MM/YYYY" );

            expect( nowDate.date() ).to.equal( compare.date() );
            expect( nowDate.month() ).to.equal( compare.month() );
            expect( nowDate.year() ).to.equal( compare.year() );
        });

        it("should format the date now with default format if format isn't specified when complied as a template", function () {
            var template = Handlebars.compile( '{{now}}' ),
                compare = moment(),
                now = template(),
                nowDate = moment( now, "DD/MM/YYYY" );

            expect( nowDate.date() ).to.equal( compare.date() );
            expect( nowDate.month() ).to.equal( compare.month() );
            expect( nowDate.year() ).to.equal( compare.year() );
        });

        it("should format the date now in the specified format", function () {
            var compare = moment(),
                now = helpers.now( "Do MMM YYYY", options ),
                nowDate = moment( now, "Do MMM YYYY" );

            expect( nowDate.date() ).to.equal( compare.date() );
            expect( nowDate.month() ).to.equal( compare.month() );
            expect( nowDate.year() ).to.equal( compare.year() );
        });

        it("should format the date now in the specified format when complied as a template", function () {
            var template = Handlebars.compile( '{{now "Do MMM YYYY"}}' ),
                compare = moment(),
                now = template(),
                nowDate = moment( now, "Do MMM YYYY" );

            expect( nowDate.date() ).to.equal( compare.date() );
            expect( nowDate.month() ).to.equal( compare.month() );
            expect( nowDate.year() ).to.equal( compare.year() );
        });
    });
}));
