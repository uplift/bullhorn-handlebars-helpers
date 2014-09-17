// Truncate Helper
// Usage: {{truncate "Hello world this is my sentence!" 5}}
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
                root.Bullhorn.truncate = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.truncate = factory( root, {}, root.Handlebars );
    }
}( this, function( root, truncate, Handlebars ) {
    truncate = function( string, len, suffix, options ) {
        var removeText, truncatedString,
            originalLength = len;

        if ( typeof suffix === 'object' ) {
            options = suffix;
            suffix = '...';
        }
        if ( typeof len !== 'number' ) {
            removeText = len;
            len = string.indexOf( len );
            string = string.split( removeText ).join( "" );
        }

        truncatedString = string.substring( 0, len );

        if ( truncatedString.substr( -1 ) === ' ' ) {
            truncatedString = truncatedString.substring( 0, len - 1 );
        } else if ( string.substring( len, len + 1 ) !== ' ' && string.substring( len, len + 1 ) !== '' ) {
            len = truncatedString.lastIndexOf( ' ' );
            truncatedString = string.substring( 0, len );
        }

        if ( originalLength > string.length || truncatedString.length === 0 ) {
            suffix = '';
        }

        return truncatedString + suffix;
    };
    Handlebars.registerHelper( 'truncate', truncate );
    return truncate;
} ));
