var Bullhorn = function( Handlebars ) {
    return {
        "join"                  : require( './src/array/join' )( Handlebars ),
        "limit"                 : require( './src/collection/limit' )( Handlebars ),
        "where"                 : require( './src/collection/where' )( Handlebars ),
        "if-eq"                 : require( './src/comparison/if-eq' )( Handlebars ),
        "if-eqor"               : require( './src/comparison/if-eqor' )( Handlebars ),
        "if-gt"                 : require( './src/comparison/if-gt' )( Handlebars ),
        "if-gte"                : require( './src/comparison/if-gte' )( Handlebars ),
        "if-lt"                 : require( './src/comparison/if-lt' )( Handlebars ),
        "if-lte"                : require( './src/comparison/if-lte' )( Handlebars ),
        "if-noteq"              : require( './src/comparison/if-noteq' )( Handlebars ),
        "ago"                   : require( './src/date/ago' )( Handlebars ),
        "formatDate"            : require( './src/date/formatDate' )( Handlebars ),
        "fromNow"               : require( './src/date/fromNow' )( Handlebars ),
        "now"                   : require( './src/date/now' )( Handlebars ),
        "optionList"            : require( './src/form/select-options-list' )( Handlebars ),
        "add"                   : require( './src/math/add' )( Handlebars ),
        "ceil"                  : require( './src/math/ceil' )( Handlebars ),
        "divide"                : require( './src/math/divide' )( Handlebars ),
        "floor"                 : require( './src/math/floor' )( Handlebars ),
        "multiply"              : require( './src/math/multiply' )( Handlebars ),
        "round"                 : require( './src/math/round' )( Handlebars ),
        "subtract"              : require( './src/math/subtract' )( Handlebars ),
        "capitalize"            : require( './src/string/capitalize' )( Handlebars ),
        "encodeURIComponent"    : require( './src/string/encodeURIComponent' )( Handlebars ),
        "lowercase"             : require( './src/string/lowercase' )( Handlebars ),
        "uppercase"             : require( './src/string/uppercase' )( Handlebars )
    };
};

module.exports = Bullhorn;
