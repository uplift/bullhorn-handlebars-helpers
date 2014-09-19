# Bullhorn Handlebars Collection Helpers

## Limit

**Usage:**

    // collection = [ { id: 1, name: "Anne" }, { id: 2, name: "Dave" }, { id: 1, name: "Matt" } ]
    {{#limit collection 1}}
        {{name}}
    {{/limit}}
    // Output => "Anne"

**Other Dependencies:** N/A

## Reverse Each

**Usage:**

    // collection = [ { id: 1, name: "Anne" }, { id: 2, name: "Dave" }, { id: 1, name: "Matt" } ]
    {{#reverseEach collection}}
        <div>{{name}}</div>
    {{/reverseEach}}
    // Output => "<div>Matt</div><div>Dave</div><div>Anne</div>"

**Other Dependencies:** N/A

## Where

**Usage:**

    // collection = [ { id: 1, name: "Anne" }, { id: 2, name: "Dave" }, { id: 1, name: "Matt" } ]
    {{#where collection "id" 1}}
        <div>{{name}}</div>
    {{/where}}
    // Output => "<div>Anne</div><div>Matt</div>"

**Other Dependencies:** Underscore/Lo-dash (specifically _.where and _.isNumber functions)
