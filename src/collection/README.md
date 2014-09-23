# Bullhorn Handlebars Collection Helpers

## Limit

Accepts a collection, an optional offset number (**Defaults:** 0) and a limit number. The limit number is the size of the results the collection should loop over. The offset number is the starting point within the collection the loop should start from.

**Usage:**

    // collection = [ { id: 1, name: "Anne" }, { id: 2, name: "Dave" }, { id: 1, name: "Matt" } ]
    {{#limit collection 1}}
        {{name}}
    {{/limit}}
    // Output => "Anne"
    {{#limit collection 1 2}}
        {{name}}
    {{/limit}}
    // Output => "Dave"

**Other Dependencies:** N/A

## Reverse Each

Like the built in each but in reverse order.  Also accepts optional offset and limit numbers that work the same as the limit helper above but in reverse.

**Usage:**

    // collection = [ { id: 1, name: "Anne" }, { id: 2, name: "Dave" }, { id: 1, name: "Matt" } ]
    {{#reverseEach collection}}
        <div>{{name}}</div>
    {{/reverseEach}}
    // Output => "<div>Matt</div><div>Dave</div><div>Anne</div>"

**Other Dependencies:** N/A

## Where

Accepts a collection, a key property name and a value. Filters the collection (using *underscore's/lodash's* _.where) to the objects matching the key value combination and loops over those object only.

**Usage:**

    // collection = [ { id: 1, name: "Anne" }, { id: 2, name: "Dave" }, { id: 1, name: "Matt" } ]
    {{#where collection "id" 1}}
        <div>{{name}}</div>
    {{/where}}
    // Output => "<div>Anne</div><div>Matt</div>"

**Other Dependencies:** Underscore/Lo-dash (specifically _.where and _.isNumber functions)
