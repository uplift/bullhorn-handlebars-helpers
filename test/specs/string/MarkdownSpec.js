(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'string/markdown'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/string/markdown' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Markdown Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.markdown ).to.exist;
        });

        it("should convert markdown markup to html", function () {
            expect( helpers.markdown( "**I am bold**" ).string ).to.equal( "<p><strong>I am bold</strong></p>" );
        });

        it("should convert markdown markup to html when complied as a template", function () {
            var template = Handlebars.compile( '{{markdown "**I am bold**"}}' );
            expect( template() ).to.equal( "<p><strong>I am bold</strong></p>" );
        });

        it("should sanitize markdown text before converting to html", function () {
            expect( helpers.markdown( "**I am bold<script>alert('hello');</script>**" ).string ).to.equal( "<p><strong>I am bold&lt;script&gt;alert(&#x27;hello&#x27;);&lt;/script&gt;</strong></p>" );
        });

        it("should sanitize markdown text before converting to html when complied as a template", function () {
            var template = Handlebars.compile( '{{markdown "**I am bold<script>alert(\'hello\');</script>**"}}' );
            expect( template() ).to.equal( "<p><strong>I am bold&lt;script&gt;alert(&#x27;hello&#x27;);&lt;/script&gt;</strong></p>" );
        });
    });
}));
