(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'html/list'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/html/list' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('List Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.list ).to.exist;
        });

        it("should create list html from the array of data", function () {
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            expect( helpers.list( listData, null, {} ).string ).to.equal( '<li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li>' );
        });

        it("should create list html from the array of data when complied as a template", function () {
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            var template = Handlebars.compile( '{{list data}}' );
            expect( template( { data: listData } ) ).to.equal( '<li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li>' );
        });

        it("should escape any list data that could be injected into the template", function () {
            var listData = [ '<script>alert("item 1")</script>', 'item 2', 'item 3', 'item 4', 'item 5' ];
            expect( helpers.list( listData, null, {} ).string ).to.equal( '<li>&lt;script&gt;alert(&quot;item 1&quot;)&lt;/script&gt;</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li>' );
        });

        it("should escape any list data that could be injected into the template when complied as a template", function () {
            var listData = [ '<script>alert("item 1")</script>', 'item 2', 'item 3', 'item 4', 'item 5' ];
            var template = Handlebars.compile( '{{list data}}' );
            expect( template( { data: listData } ) ).to.equal( '<li>&lt;script&gt;alert(&quot;item 1&quot;)&lt;/script&gt;</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li>' );
        });
    });
}));
