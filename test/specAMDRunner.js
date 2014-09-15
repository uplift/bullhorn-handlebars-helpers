var baseUrl, dep, callback;

if ( window.__karma__ ) {
    var tests = [];
    for ( var file in window.__karma__.files ) {
        if ( /Spec\.js$/.test( file ) ) {
            tests.push( file );
        }
    }
    // Karma serves files from '/base'
    baseUrl = '/base/src';
    deps = tests;
    callback = window.__karma__.start;
} else {
    baseUrl = '../src';
    deps = [
        'tests/specs/array/JoinSpec',
        'tests/specs/collection/LimitSpec',
        'tests/specs/comparison/IfEqOrSpec',
        'tests/specs/comparison/IfEqSpec',
        'tests/specs/comparison/IfGteSpec',
        'tests/specs/comparison/IfGtSpec',
        'tests/specs/comparison/IfLteSpec',
        'tests/specs/comparison/IfltSpec',
        'tests/specs/comparison/IfNotEqSpec',
        'tests/specs/date/AgoSpec',
        'tests/specs/date/FormatDateSpec',
        'tests/specs/date/FromNowSpec',
        'tests/specs/date/NowSpec',
        'tests/specs/form/SelectOptionsListSpec',
        'tests/specs/math/AddSpec',
        'tests/specs/math/CeilSpec',
        'tests/specs/math/DivideSpec',
        'tests/specs/math/FloorSpec',
        'tests/specs/math/MultiplySpec',
        'tests/specs/math/RoundSpec',
        'tests/specs/math/SubtractSpec',
        'tests/specs/string/CapitalizeSpec',
        'tests/specs/string/EncodeURIComponentSpec',
        'tests/specs/string/LowercaseSpec',
        'tests/specs/string/UppercaseSpec'
    ];
    callback = mocha.run;
}


requirejs.config({
    baseUrl: baseUrl,
    paths: {
        // "underscore"        : "bower_components/underscore/underscore",
        "handlebars"        : "../test/bower_components/handlebars/handlebars.amd",
        "moment"            : "../test/bower_components/moment/moment",
        "tests"             : "../test"
    },
    deps: deps,
    callback: function() {
        callback();
    }
});
