# Bullhorn Handlebars Comparison Helpers

## Contains

Accepts either a string or an array as the first argument and a value as the second. 

If the first argument is a string, it will compare it to the second value to see if it contains the second value within the string. If it is then the true section of the template conditional is run. If it isn't then the false section is run.

If the first argument is an array, it will check to see if the second value is a value within the array. If it is then the true section of the template conditional is run. If it isn't then the false section is run.

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

Accepts two strings. If the first string ends with the second string then the true section of the template conditional is run. If it doesn't end with the second string then the false section is run.

**Usage:**

    {{#endsWith "Saturday" "day"}}
        do something
    {{else}}
        do something else
    {{/endsWith}}
    // Output => do something

**Other Dependencies:** N/A

## If Equal

Accepts two values.  If the two values are strict equal (i.e. value === value) then the true section of the template conditional is run. If they don't equal then the false section is run.

**Usage:**

    {{#if-eq 5 5}}
        do something
    {{else}}
        do something else
    {{/if-eq}}
    // Output => do something

**Other Dependencies:** N/A

## If Equal Or

Accepts unlimited values.  If the first value is strict equal (i.e. value === value) with any of the other values then the true section of the template conditional is run. If it doesn't equal any other value then the false section is run.

**Usage:**

    {{#if-eqor 5 10 1 5 7}}
        do something
    {{else}}
        do something else
    {{/if-eqor}}
    // Output => do something

**Other Dependencies:** N/A

## If Greater Than 

Accepts two numeric values.  If the first value is greater than the second value then true section of the template conditional is run. If the first is equal or less than the second value then the false section is run.

**Usage:**

    {{#if-gt 10 7}}
        do something
    {{else}}
        do something else
    {{/if-gt}}
    // Output => do something

**Other Dependencies:** N/A

## If Greater Than Or Equal

Accepts two numeric values.  If the first value is greater or equal to the second value then true section of the template conditional is run. If the first is less than the second value then the false section is run.

**Usage:**

    {{#if-gte 10 7}}
        do something
    {{else}}
        do something else
    {{/if-gte}}
    // Output => do something

**Other Dependencies:** N/A

## If Less Than

Accepts two numeric values.  If the first value is less than the second value then true section of the template conditional is run. If the first is equal or greater than the second value then the false section is run.

**Usage:**

    {{#if-lt 5 7}}
        do something
    {{else}}
        do something else
    {{/if-lt}}
    // Output => do something

**Other Dependencies:** N/A

## If Less Than Or Equal

Accepts two numeric values.  If the first value is less than or equal to the second value then true section of the template conditional is run. If the first is greater than the second value then the false section is run.

**Usage:**

    {{#if-lte 5 7}}
        do something
    {{else}}
        do something else
    {{/if-lte}}
    // Output => do something

**Other Dependencies:** N/A

## If Not Equal

Accepts two values.  If the two values are not strict equal (i.e. value !== value) then the true section of the template conditional is run. If they do equal then the false section is run.

**Usage:**

    {{#if-noteq 5 7}}
        do something
    {{else}}
        do something else
    {{/if-noteq}}
    // Output => do something

**Other Dependencies:** N/A

## Starts With

Accepts two strings. If the first string starts with the second string then the true section of the template conditional is run. If it doesn't start with the second string then the false section is run.

**Usage:**

    {{#startsWith "Saturday" "Sat"}}
        do something
    {{else}}
        do something else
    {{/startsWith}}
    // Output => do something

**Other Dependencies:** N/A
