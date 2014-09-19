# Bullhorn Handlebars Comparison Helpers

## Contains

**Usage:**

    // array = [ "Cat", "Mat", "Sat" ]
    {{#contains array "Sat"}}
        do something
    {{else}}
        do something else
    {{/contains}}
    // Output => do something

    {{#contains "Saturday" "Sat"}}
        do something
    {{else}}
        do something else
    {{/contains}}
    // Output => do something

**Other Dependencies:** N/A

## Ends With

**Usage:**

    {{#endsWith "Saturday" "day"}}
        do something
    {{else}}
        do something else
    {{/endsWith}}
    // Output => do something

**Other Dependencies:** N/A

## If Equal

**Usage:**

    {{#if-eq 5 5}}
        do something
    {{else}}
        do something else
    {{/if-eq}}
    // Output => do something

**Other Dependencies:** N/A

## If Equal Or

**Usage:**

    {{#if-eqor 5 10 1 5 7}}
        do something
    {{else}}
        do something else
    {{/if-eqor}}
    // Output => do something

**Other Dependencies:** N/A

## If Greater Than 

**Usage:**

    {{#if-gt 10 7}}
        do something
    {{else}}
        do something else
    {{/if-gt}}
    // Output => do something

**Other Dependencies:** N/A

## If Greater Than Or Equal

**Usage:**

    {{#if-gte 10 7}}
        do something
    {{else}}
        do something else
    {{/if-gte}}
    // Output => do something

**Other Dependencies:** N/A

## If Less Than

**Usage:**

    {{#if-lt 5 7}}
        do something
    {{else}}
        do something else
    {{/if-lt}}
    // Output => do something

**Other Dependencies:** N/A

## If Less Than Or Equal

**Usage:**

    {{#if-lte 5 7}}
        do something
    {{else}}
        do something else
    {{/if-lte}}
    // Output => do something

**Other Dependencies:** N/A

## If Not Equal

**Usage:**

    {{#if-noteq 5 7}}
        do something
    {{else}}
        do something else
    {{/if-noteq}}
    // Output => do something

**Other Dependencies:** N/A

## Starts With

**Usage:**

    {{#startsWith "Saturday" "Sat"}}
        do something
    {{else}}
        do something else
    {{/startsWith}}
    // Output => do something

**Other Dependencies:** N/A
