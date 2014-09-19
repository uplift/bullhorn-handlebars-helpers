// Debug Helper
// Usage: {{debug}} or {{debug someValue}}
// Credit: http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/
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
                root.Bullhorn.debug = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.debug = factory( root, {}, root.Handlebars );
    }
}( this, function( root, debug, Handlebars ) {
    debug = function( property ) {
        console.log( "DEBUG" );
        console.log( "================" );
        console.log( "Context" );
        console.log( this );
        if ( arguments.length > 1 ) {
            console.log( "Value" );
            console.log( property );
        }
    };
    Handlebars.registerHelper( 'debug', debug );
    return debug;
} ));
