(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'format/toFixed'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/format/toFixed' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('To Fixed Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.toFixed ).to.exist;
        });

        it("should fix number to default 2 places if no digits is specified", function () {
            expect( helpers.toFixed( 1, {} ) ).to.equal( "1.00" );
            expect( helpers.toFixed( "1", {} ) ).to.equal( "1.00" );
            expect( helpers.toFixed( 1.3, {} ) ).to.equal( "1.30" );
            expect( helpers.toFixed( "1.3", {} ) ).to.equal( "1.30" );
            expect( helpers.toFixed( 5.5743, {} ) ).to.equal( "5.57" );
            expect( helpers.toFixed( "5.5743", {} ) ).to.equal( "5.57" );
        });

        it("should fix number to default 2 places if no digits is specified when complied as a template", function () {
            var template = Handlebars.compile( '{{toFixed 1}}' );
            expect( template() ).to.equal( "1.00" );
            template = Handlebars.compile( '{{toFixed "1"}}' );
            expect( template() ).to.equal( "1.00" );
            template = Handlebars.compile( '{{toFixed 1.3}}' );
            expect( template() ).to.equal( "1.30" );
            template = Handlebars.compile( '{{toFixed "1.3"}}' );
            expect( template() ).to.equal( "1.30" );
            template = Handlebars.compile( '{{toFixed 5.5743}}' );
            expect( template() ).to.equal( "5.57" );
            template = Handlebars.compile( '{{toFixed "5.5743"}}' );
            expect( template() ).to.equal( "5.57" );
        });

        it("should fix number to specified number of decimal digits", function () {
            expect( helpers.toFixed( 1, 0, {} ) ).to.equal( "1" );
            expect( helpers.toFixed( 1.34, 1, {} ) ).to.equal( "1.3" );
            expect( helpers.toFixed( 5.5743, 3, {} ) ).to.equal( "5.574" );
        });

        it("should fix number to specified number of decimal digits when complied as a template", function () {
            var template = Handlebars.compile( '{{toFixed 1 0}}' );
            expect( template() ).to.equal( "1" );
            template = Handlebars.compile( '{{toFixed 1.34 1}}' );
            expect( template() ).to.equal( "1.3" );
            template = Handlebars.compile( '{{toFixed 5.5743 3}}' );
            expect( template() ).to.equal( "5.574" );
        });

        it("should return value untouched if value isnt a number", function () {
            expect( helpers.toFixed( "gibberish", {} ) ).to.equal( "gibberish" );
            expect( helpers.toFixed( "gibberish", 5, {} ) ).to.equal( "gibberish" );
        });

        it("should fix number to specified number of decimal digits when complied as a template", function () {
            var template = Handlebars.compile( '{{toFixed "gibberish"}}' );
            expect( template() ).to.equal( "gibberish" );
            template = Handlebars.compile( '{{toFixed "gibberish" 5}}' );
            expect( template() ).to.equal( "gibberish" );
        });
    });
}));
