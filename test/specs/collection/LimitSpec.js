(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'collection/limit'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/collection/limit' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Limit Handlebars Helper', function () {
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
            expect( helpers.limit ).to.exist;
        });

        it('should limit the size of the collection', function() {
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
                    text: "Four"
                }
            ];
            expect( helpers.limit( collection, 2, options ) ).to.equal( 'OneTwo' );
        });

        it('should limit the size of the collection when complied as a template', function() {
            var template = Handlebars.compile( '{{#limit collection 2}}{{text}}{{/limit}}' ),
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
                        text: "Four"
                    }
                ];

            expect( template( { collection: collection } ) ).to.equal( 'OneTwo' );
        });

        it('should offset the starting point of the collection and limit the size of the collection', function() {
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
                    text: "Four"
                },
                {
                    text: "Five"
                }
            ];
            expect( helpers.limit( collection, 1, 3, options ) ).to.equal( 'TwoThree' );
        });

        it('should offset the starting point of the collection and limit the size of the collection when complied as a template', function() {
            var template = Handlebars.compile( '{{#limit collection 1 3}}{{text}}{{/limit}}' ),
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
                        text: "Four"
                    },
                    {
                        text: "Five"
                    }
                ];

            expect( template( { collection: collection } ) ).to.equal( 'TwoThree' );
        });

        it('should only iterate over size of collection even if limit is bigger', function() {
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
                    text: "Four"
                },
                {
                    text: "Five"
                }
            ];
            expect( helpers.limit( collection, 10, options ) ).to.equal( 'OneTwoThreeFourFive' );
        });

        it('should only iterate over size of collection even if limit is bigger when complied as a template', function() {
            var template = Handlebars.compile( '{{#limit collection 10}}{{text}}{{/limit}}' ),
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
                        text: "Four"
                    },
                    {
                        text: "Five"
                    }
                ];

            expect( template( { collection: collection } ) ).to.equal( 'OneTwoThreeFourFive' );
        });
    });
}));
