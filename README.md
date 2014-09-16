# Bullhorn Handlebars helpers

Coming Soon!

## Install

### Bower

*TODO*

### NPM

*TODO*

## Usage

### Node

In Node.js environment, require the helper as a standard module and pass an instance of the Handlebars object to the required function.

    var Handlebars = require( 'handlebars' );
    var join = require( 'bullhorn/src/array/join' )( Handlebars );

The helper will be registered on the handlebars object inside of the required module. The helper is also returned as a standalone function incase it is required outside of a handlebars template. Usually you won't need to use the standalone function.

Alternatively you can register all helpers at once by requiring the bullhorn object and passing in the instance of Handlebars. This will also give you an object with all the functions on it for use outside of Handlebars templates.

    var Handlebars = require( 'handlebars' );
    var Bullhorn = require( 'bullhorn' )( Handlebars );
    // Can now use Bullhorn.join( /* ARGS */ ); 

### Browser

In a browser environment, just include the script to the helper as a script tag after the inclusion of the Handlebars script tag. (Some helpers require other libraries to be included before the helpers inclusion)
    
    <script src="bower_components/handlebars/handlebars.js"></script>
    <script src="bower_components/bullhorn/src/array/join.js"></script>

The helper will be registered on the handlebars object inside the script and a standalone function will be attached to a global Bullhorn object incase it is required outside of a handlebars template.  The above script tag would be accessible from Bullhorn.join.

### AMD

In an AMD environment, load the helper as you would any other AMD module. You'll need to configure a 'handlebars' path in your requirejs config as all the helpers load 'handlebars' in their definition. The helper will be registered on the handlebars object inside the module script and the standalone function is returned as the module export value incase it is required outside of a handlebars template. The standalone function is also attached to the global Bullhorn object the same as the standard browser environment.

    requirejs.config({
        paths: {
            "handlebars": "path/to/handlebars"
        }
    });

    // My Module
    define( [ 'bower_components/src/array/join' ], function( join ) {
        // Do something
    });


## Helpers

*TODO*

## License

Licensed under the [MIT](http://www.opensource.org/licenses/MIT) license.


