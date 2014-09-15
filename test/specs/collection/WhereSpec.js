(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'collection/where'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/collection/where' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Where Handlebars Helper', function () {
        var helpers = Handlebars.helpers,
            options;

        beforeEach(function() {
            options = {
                fn: function( context ) {
                    return context.text;
                }
            };
        });

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers.where ).to.exist;
        });

        it('should filter the collection by the key and value', function() {
            var collection = [
                {
                    text: "One"
                },
                {
                    text: "Two"
                },
                {
                    text: "Three"
                },
                {
                    text: "One"
                }
            ];
            expect( helpers.where( collection, "text", "One", options ) ).to.equal( 'OneOne' );
        });

        it('should filter the collection by the key and value when complied as a template', function() {
            var template = Handlebars.compile( '{{#where collection "text" "One"}}{{text}}{{/where}}' ),
                collection = [
                    {
                        text: "One"
                    },
                    {
                        text: "Two"
                    },
                    {
                        text: "Three"
                    },
                    {
                        text: "One"
                    }
                ];

            expect( template( { collection: collection } ) ).to.equal( 'OneOne' );
        });

        it('should filter the collection by the key and value within the specified limit', function() {
            var collection = [
                {
                    text: "One"
                },
                {
                    text: "Two"
                },
                {
                    text: "Three"
                },
                {
                    text: "One"
                },
                {
                    text: "Two"
                },
                {
                    text: "One"
                }
            ];
            expect( helpers.where( collection, "text", "One", 2, options ) ).to.equal( 'OneOne' );
        });

        it('should filter the collection by the key and value within the specified limit when complied as a template', function() {
            var template = Handlebars.compile( '{{#where collection "text" "One" 2}}{{text}}{{/where}}' ),
                collection = [
                    {
                        text: "One"
                    },
                    {
                        text: "Two"
                    },
                    {
                        text: "Three"
                    },
                    {
                        text: "One"
                    },
                    {
                        text: "Two"
                    },
                    {
                        text: "One"
                    }
                ];

            expect( template( { collection: collection } ) ).to.equal( 'OneOne' );
        });
    });
}));
