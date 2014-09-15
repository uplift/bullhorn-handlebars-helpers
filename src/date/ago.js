// Ago Helper (Similar to fromNow date helper without Moment.js dependency - not as configurable)
// Usage: {{ago date}}
// Credit: http://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site/3177838#3177838
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
                root.Bullhorn.ago = factory( root, exports, Handlebars.default );
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
        root.Bullhorn.ago = factory( root, {}, root.Handlebars );
    }
}( this, function( root, ago, Handlebars ) {
    var MINUTE = 60,
        HOUR = MINUTE * 60,
        DAY = HOUR * 24,
        MONTH = DAY * 30,
        YEAR = DAY * 365;

    ago = function( date, options ) {
        if ( !( date instanceof Date ) ) {
            return date;
        }

        var seconds = Math.floor( ( new Date() - date ) / 1000 ),
            interval = Math.floor( seconds / YEAR );

        if ( interval > 1 ) {
            return interval + ' years ago';
        }
        interval = Math.floor( seconds / MONTH );
        if ( interval > 1 ) {
            return interval + ' months ago';
        }
        interval = Math.floor( seconds / DAY );
        if ( interval > 1 ) {
            return interval + ' days ago';
        }
        interval = Math.floor( seconds / HOUR );
        if ( interval > 1 ) {
            return interval + ' hours ago';
        }
        interval = Math.floor( seconds / MINUTE );
        if ( interval > 1 ) {
            return interval + ' minutes ago';
        }
        interval = Math.floor( seconds );
        if ( interval > 1 ) {
            return interval + ' seconds ago';
        } else {
            return 'Now';
        }
    };
    Handlebars.registerHelper( 'ago', ago );
    return ago;
} ));
