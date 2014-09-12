(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'comparison/if-noteq'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/comparison/if-noteq' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('If Not Equal Handlebars Helper', function () {
        var helpers = Handlebars.helpers, options;

        beforeEach(function() {
            options = {
                fn: function() {
                    return true;
                },
                inverse: function() {
                    return false;
                }
            };
        });

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers[ "if-noteq" ] ).to.exist;
        });

        it("should return inverse branch for matching strings", function () {
            expect( helpers[ "if-noteq" ]( "testing", "testing", options ) ).to.be.false;
        });

        it("should return inverse branch for matching strings when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq "testing" "testing"}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return main branch for non matching strings", function () {
            expect( helpers[ "if-noteq" ]( "testing", "test", options ) ).to.be.true;
        });

        it("should return main branch for non matching strings when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq "testing" "test"}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for matching numbers", function () {
            expect( helpers[ "if-noteq" ]( 8, 8, options ) ).to.be.false;
        });

        it("should return inverse branch for matching numbers when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq 8 8}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return main branch for string number and digit number of same value", function () {
            expect( helpers[ "if-noteq" ]( "8", 8, options ) ).to.be.true;
        });

        it("should return main branch for string number and digit number of same value when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq "8" 8}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for matching booleans", function () {
            expect( helpers[ "if-noteq" ]( true, true, options ) ).to.be.false;
            expect( helpers[ "if-noteq" ]( false, false, options ) ).to.be.false;
        });

        it("should return inverse branch for matching booleans when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq true true}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-noteq false false}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return main branch for non matching booleans", function () {
            expect( helpers[ "if-noteq" ]( true, false, options ) ).to.be.true;
        });

        it("should return main branch for non matching booleans when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq true false}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
        });


        it("should return inverse branch for exact falsy values", function () {
            expect( helpers[ "if-noteq" ]( null, null, options ) ).to.be.false;
            expect( helpers[ "if-noteq" ]( undefined, undefined, options ) ).to.be.false;
            expect( helpers[ "if-noteq" ]( "", "", options ) ).to.be.false;
            expect( helpers[ "if-noteq" ]( 0, 0, options ) ).to.be.false;
            expect( helpers[ "if-noteq" ]( false, false, options ) ).to.be.false;
        });

        it("should return inverse branch for exact falsy values when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq null null}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-noteq undefined undefined}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-noteq "" ""}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-noteq 0 0}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-noteq false false}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return main branch for non exact falsy values", function () {
            expect( helpers[ "if-noteq" ]( null, false, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( "", false, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( undefined, false, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( 0, false, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( 0, "", options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( 0, null, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( 0, undefined, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( "", undefined, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( null, undefined, options ) ).to.be.true;
            expect( helpers[ "if-noteq" ]( null, "", options ) ).to.be.true;
        });

        it("should return main branch for non exact falsy values when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq null false}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-noteq "" false}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-noteq undefined false}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-noteq 0 false}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-noteq 0 ""}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-noteq 0 null}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-noteq 0 undefined}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-noteq "" undefined}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
            /* Handlebars converts null to undefined so comparing null and undefined equals main branch
            template = Handlebars.compile( '{{#if-noteq null undefined}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );*/
            template = Handlebars.compile( '{{#if-noteq null ""}}main branch{{else}}inverse branch{{/if-noteq}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return undefined if values equal and no inverse function is specified", function () {
            expect( helpers[ "if-noteq" ]( 5, 5, {
                fn: function() {
                    return true;
                }
            })).to.be.undefined;
        });

        it("should return empty string if values equal and no inverse function is specified when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-noteq 5 5}}main branch{{/if-noteq}}' );
            expect( template() ).to.equal( "" );
        });
    });
}));
