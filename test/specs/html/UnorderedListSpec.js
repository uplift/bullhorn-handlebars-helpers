(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'html/unordered-list'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/html/unordered-list' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Unordered List Handlebars Helper', function () {
        var helpers = Handlebars.helpers,
            options;

        beforeEach(function() {
            options = {
                hash: {}
            }
        })

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.ul ).to.exist;
        });

        it("should create ordered list html from the array of data", function () {
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            expect( helpers.ul( listData, options ).string ).to.equal( '<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });

        it("should create list html from the array of data when complied as a template", function () {
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            var template = Handlebars.compile( '{{ul data}}' );
            expect( template( { data: listData } ) ).to.equal( '<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });

        it("should set id of ul if set in hash options", function () {
            options.hash.id = "my-id";
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            expect( helpers.ul( listData, options ).string ).to.equal( '<ul id="my-id"><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });

        it("should set id of ul if set in hash options when complied as a template", function () {
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            var template = Handlebars.compile( '{{ul data id="my-id"}}' );
            expect( template( { data: listData } ) ).to.equal( '<ul id="my-id"><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });

        it("should set class of ul if set in hash options", function () {
            options.hash.class = "my-class";
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            expect( helpers.ul( listData, options ).string ).to.equal( '<ul class="my-class"><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });

        it("should set class of ul if set in hash options when complied as a template", function () {
            var listData = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ];
            var template = Handlebars.compile( '{{ul data class="my-class"}}' );
            expect( template( { data: listData } ) ).to.equal( '<ul class="my-class"><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });

        it("should escape any list data that could be injected into the template", function () {
            var listData = [ '<script>alert("item 1")</script>', 'item 2', 'item 3', 'item 4', 'item 5' ];
            expect( helpers.ul( listData, options ).string ).to.equal( '<ul><li>&lt;script&gt;alert(&quot;item 1&quot;)&lt;/script&gt;</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });

        it("should escape any list data that could be injected into the template when complied as a template", function () {
            var listData = [ '<script>alert("item 1")</script>', 'item 2', 'item 3', 'item 4', 'item 5' ];
            var template = Handlebars.compile( '{{ul data}}' );
            expect( template( { data: listData } ) ).to.equal( '<ul><li>&lt;script&gt;alert(&quot;item 1&quot;)&lt;/script&gt;</li><li>item 2</li><li>item 3</li><li>item 4</li><li>item 5</li></ul>' );
        });
    });
}));
