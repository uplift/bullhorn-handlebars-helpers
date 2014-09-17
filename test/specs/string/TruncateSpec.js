(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'string/truncate'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/string/truncate' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Truncate Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.truncate ).to.exist;
        });

        it("should truncate text at the specified index and add default suffix", function () {
            expect( helpers.truncate( "Hello world this is my sentence!", 5, {} ) ).to.equal( "Hello..." );
        });

        it("should truncate text at the specified index and add default suffix when complied as a template", function () {
            var template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" 5}}' );
            expect( template() ).to.equal( "Hello..." );
        });

        it("should truncate text at the specified index, trim any trailing whitespace and add default suffix", function () {
            expect( helpers.truncate( "Hello world this is my sentence!", 6, {} ) ).to.equal( "Hello..." );
        });

        it("should truncate text at the specified index, trim any trailing whitespace and add default suffix when complied as a template", function () {
            var template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" 6}}' );
            expect( template() ).to.equal( "Hello..." );
        });

        it("should truncate text at nearest whole word, trim any trailing whitespace and add default suffix", function () {
            expect( helpers.truncate( "Hello world this is my sentence!", 10, {} ) ).to.equal( "Hello..." );
        });

        it("should truncate text at nearest whole word, trim any trailing whitespace and add default suffix when complied as a template", function () {
            var template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" 10}}' );
            expect( template() ).to.equal( "Hello..." );
        });

        it("should truncate text and add specified suffix", function () {
            expect( helpers.truncate( "Hello world this is my sentence!", 5, " ...Read More", {} ) ).to.equal( "Hello ...Read More" );
        });

        it("should truncate text and add specified suffix when complied as a template", function () {
            var template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" 5 " ...Read More"}}' );
            expect( template() ).to.equal( "Hello ...Read More" );
        });

        it("should truncate text at specified string index", function () {
            expect( helpers.truncate( "Hello world<!-- trunc --> this is my sentence!", "<!-- trunc -->", {} ) ).to.equal( "Hello world..." );
        });

        it("should truncate text at specified string index when complied as a template", function () {
            var template = Handlebars.compile( '{{truncate "Hello world<!-- trunc --> this is my sentence!" "<!-- trunc -->"}}' );
            expect( template() ).to.equal( "Hello world..." );
        });

        it("should return whole text if index is bigger than text length without a suffix", function () {
            expect( helpers.truncate( "Hello world this is my sentence!", 50, {} ) ).to.equal( "Hello world this is my sentence!" );
            expect( helpers.truncate( "Hello world this is my sentence!", 50, " ...My Suffix!", {} ) ).to.equal( "Hello world this is my sentence!" );
        });

        it("should return whole text if index is bigger than text length without a suffix when complied as a template", function () {
            var template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" 50}}' );
            expect( template() ).to.equal( "Hello world this is my sentence!" );
            template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" 50 " ...My Suffix!"}}' );
            expect( template() ).to.equal( "Hello world this is my sentence!" );
        });

        it("should return empty string if index is zero or smaller without a suffix", function () {
            expect( helpers.truncate( "Hello world this is my sentence!", 0, {} ) ).to.equal( "" );
            expect( helpers.truncate( "Hello world this is my sentence!", -1, " ...My Suffix!", {} ) ).to.equal( "" );
        });

        it("should return empty string if index is zero or smaller without a suffix when complied as a template", function () {
            var template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" 0}}' );
            expect( template() ).to.equal( "" );
            template = Handlebars.compile( '{{truncate "Hello world this is my sentence!" -1 " ...My Suffix!"}}' );
            expect( template() ).to.equal( "" );
        });
    });
}));
