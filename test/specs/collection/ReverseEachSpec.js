(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'collection/reverseEach'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/collection/reverseEach' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Reverse Each Handlebars Helper', function () {
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
            expect( helpers.reverseEach ).to.exist;
        });

        it('should loop over the collection in reverse', function() {
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
            expect( helpers.reverseEach( collection, options ) ).to.equal( 'FourThreeTwoOne' );
        });

        it('should loop over the collection in reverse when complied as a template', function() {
            var template = Handlebars.compile( '{{#reverseEach collection}}{{text}}{{/reverseEach}}' ),
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

            expect( template( { collection: collection } ) ).to.equal( 'FourThreeTwoOne' );
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
            expect( helpers.reverseEach( collection, 2, options ) ).to.equal( 'FourThree' );
        });

        it('should limit the size of the collection when complied as a template', function() {
            var template = Handlebars.compile( '{{#reverseEach collection 2}}{{text}}{{/reverseEach}}' ),
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

            expect( template( { collection: collection } ) ).to.equal( 'FourThree' );
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
            expect( helpers.reverseEach( collection, 1, 3, options ) ).to.equal( 'FourThree' );
        });

        it('should offset the starting point of the collection and limit the size of the collection when complied as a template', function() {
            var template = Handlebars.compile( '{{#reverseEach collection 1 3}}{{text}}{{/reverseEach}}' ),
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

            expect( template( { collection: collection } ) ).to.equal( 'FourThree' );
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
            expect( helpers.reverseEach( collection, 10, options ) ).to.equal( 'FiveFourThreeTwoOne' );
        });

        it('should only iterate over size of collection even if limit is bigger when complied as a template', function() {
            var template = Handlebars.compile( '{{#reverseEach collection 10}}{{text}}{{/reverseEach}}' ),
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

            expect( template( { collection: collection } ) ).to.equal( 'FiveFourThreeTwoOne' );
        });
    });
}));
