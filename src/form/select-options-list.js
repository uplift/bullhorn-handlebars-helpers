// Select Option List Helper
// Usage: {{option-list options "selected value"}}
( function( root, factory ) {
    // Set up appropriately for the environment.
    // Start with AMD.
    if ( typeof define === 'function' && define.amd ) {
        define(
            [
                'handlebars',
                'exports'
            ],
            function( Handlebars, exports ) {
                root.Bullhorn = root.Bullhorn || {};
                root.Bullhorn.optionList = factory( root, exports, Handlebars.default );
            }
        );
    // Next for Node.js or CommonJS.
    } else if ( typeof exports !== 'undefined' ) {
        module.exports = function( Handlebars ) {
            return factory( root, {}, Handlebars );
        };
    // Finally, as a browser global.
    } else {
        root.Bullhorn = root.Bullhorn || {};
        root.Bullhorn.optionList = factory( root, {}, root.Handlebars );
    }
}( this, function( root, optionList, Handlebars ) {
    optionList = function( list, selected, options ) {
        if ( typeof options === 'undefined' ) {
            options = selected;
            selected = null;
        }
        var html = [], label, value;

        for ( var i = 0; i < list.length; i++ ) {
            label = Handlebars.Utils.escapeExpression( list[ i ].label );
            value = Handlebars.Utils.escapeExpression( list[ i ].value );
            html.push( '<option value="' + value + '"' + ( value === selected ? ' selected' : '' ) + '>' + label + '</option>' );
        }
        return new Handlebars.SafeString( html.join( '' ) );
    };
    Handlebars.registerHelper( 'option-list', optionList );
    return optionList;
} ));
