(function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'form/select-options-list'
            ],
            function( Handlebars ) {
                factory( Handlebars.default, root.expect );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        var Handlebars = require( 'handlebars' );
        var expect = require( 'chai' ).expect;
        require( '../../../src/form/select-options-list' )( Handlebars );
        factory( Handlebars, expect );
    // Finally, as a browser global.
    } else {
        factory( root.Handlebars, root.expect );
    }
}( this, function( Handlebars, expect ) {
    describe('Select Option List Handlebars Helper', function () {
        var helpers = Handlebars.helpers;

        it('should be defined on the Handlebars helper object', function() {
            expect( helpers[ 'option-list' ] ).to.exist;
        });

        it("should create option html to insert into a select dropdown from the array of data", function () {
            var optionData = [
                {
                    label: "Please Select",
                    value: ""
                },
                {
                    label: "Option 1",
                    value: "1"
                },
                {
                    label: "Option 2",
                    value: "2"
                }
            ];
            expect( helpers[ 'option-list' ]( optionData, null, {} ).string ).to.equal( '<option value="">Please Select</option><option value="1">Option 1</option><option value="2">Option 2</option>' );
        });

        it("should create option html to insert into a select dropdown from the array of data when complied as a template", function () {
            var optionData = [
                {
                    label: "Please Select",
                    value: ""
                },
                {
                    label: "Option 1",
                    value: "1"
                },
                {
                    label: "Option 2",
                    value: "2"
                }
            ];
            var template = Handlebars.compile( '{{option-list data}}' );
            expect( template( { data: optionData } ) ).to.equal( '<option value="">Please Select</option><option value="1">Option 1</option><option value="2">Option 2</option>' );
        });

        it("should create option html to insert into a select dropdown from the array of data and select the given selected value to show", function () {
            var optionData = [
                {
                    label: "Please Select",
                    value: ""
                },
                {
                    label: "Option 1",
                    value: "1"
                },
                {
                    label: "Option 2",
                    value: "2"
                }
            ];
            expect( helpers[ 'option-list' ]( optionData, "2", {} ).string ).to.equal( '<option value="">Please Select</option><option value="1">Option 1</option><option value="2" selected>Option 2</option>' );
        });

        it("should create option html to insert into a select dropdown from the array of data and select the given selected value to show when complied as a template", function () {
            var optionData = [
                {
                    label: "Please Select",
                    value: ""
                },
                {
                    label: "Option 1",
                    value: "1"
                },
                {
                    label: "Option 2",
                    value: "2"
                }
            ];
            var template = Handlebars.compile( '{{option-list data "2"}}' );
            expect( template( { data: optionData } ) ).to.equal( '<option value="">Please Select</option><option value="1">Option 1</option><option value="2" selected>Option 2</option>' );
        });
    });
}));
