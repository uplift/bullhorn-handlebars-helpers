(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'comparison/if-eq'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/comparison/if-eq' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('If Equal Handlebars Helper', function () {
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
            expect( helpers[ "if-eq" ] ).to.exist;
        });

        it("should return main branch for matching strings", function () {
            expect( helpers[ "if-eq" ]( "testing", "testing", options ) ).to.be.true;
        });

        it("should return main branch for matching strings when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq "testing" "testing"}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for non matching strings", function () {
            expect( helpers[ "if-eq" ]( "testing", "test", options ) ).to.be.false;
        });

        it("should return inverse branch for non matching strings when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq "testing" "test"}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return main branch for matching numbers", function () {
            expect( helpers[ "if-eq" ]( 8, 8, options ) ).to.be.true;
        });

        it("should return main branch for matching numbers when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq 8 8}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for string number and digit number of same value", function () {
            expect( helpers[ "if-eq" ]( "8", 8, options ) ).to.be.false;
        });

        it("should return inverse branch for string number and digit number of same value when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq "8" 8}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return main branch for matching booleans", function () {
            expect( helpers[ "if-eq" ]( true, true, options ) ).to.be.true;
            expect( helpers[ "if-eq" ]( false, false, options ) ).to.be.true;
        });

        it("should return main branch for matching booleans when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq true true}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-eq false false}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for non matching booleans", function () {
            expect( helpers[ "if-eq" ]( true, false, options ) ).to.be.false;
        });

        it("should return inverse branch for non matching booleans when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq true false}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });


        it("should return main branch for exact falsy values", function () {
            expect( helpers[ "if-eq" ]( null, null, options ) ).to.be.true;
            expect( helpers[ "if-eq" ]( undefined, undefined, options ) ).to.be.true;
            expect( helpers[ "if-eq" ]( "", "", options ) ).to.be.true;
            expect( helpers[ "if-eq" ]( 0, 0, options ) ).to.be.true;
            expect( helpers[ "if-eq" ]( false, false, options ) ).to.be.true;
        });

        it("should return main branch for exact falsy values when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq null null}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-eq undefined undefined}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-eq "" ""}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-eq 0 0}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
            template = Handlebars.compile( '{{#if-eq false false}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "main branch" );
        });

        it("should return inverse branch for non exact falsy values", function () {
            expect( helpers[ "if-eq" ]( null, false, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( "", false, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( undefined, false, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( 0, false, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( 0, "", options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( 0, null, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( 0, undefined, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( "", undefined, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( null, undefined, options ) ).to.be.false;
            expect( helpers[ "if-eq" ]( null, "", options ) ).to.be.false;
        });

        it("should return inverse branch for non exact falsy values when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq null false}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-eq "" false}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-eq undefined false}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-eq 0 false}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-eq 0 ""}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-eq 0 null}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-eq 0 undefined}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            template = Handlebars.compile( '{{#if-eq "" undefined}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
            /* Handlebars converts null to undefined so comparing null and undefined equals main branch
            template = Handlebars.compile( '{{#if-eq null undefined}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );*/
            template = Handlebars.compile( '{{#if-eq null ""}}main branch{{else}}inverse branch{{/if-eq}}' );
            expect( template() ).to.equal( "inverse branch" );
        });

        it("should return undefined if values don't equal and no inverse function is specified", function () {
            expect( helpers[ "if-eq" ]( 5, 10, {
                fn: function() {
                    return true;
                }
            })).to.be.undefined;
        });

        it("should return empty string if values don't equal and no inverse function is specified when complied as a template", function () {
            var template = Handlebars.compile( '{{#if-eq 5 10}}main branch{{/if-eq}}' );
            expect( template() ).to.equal( "" );
        });
    });
}));
