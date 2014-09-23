# Bullhorn Handlebars Date Helpers

## Ago

Accepts date object and returns time ago type text i.e. years ago, months ago ... seconds ago and Now. Similar to From Now helper below but without Moment dependency.

**Usage:**

    // date = new Date()
    {{ago date}}
    // Output => "Now"

**Other Dependencies:** N/A

## Format Date

Accepts a date and an optional format string (**Defaults:** "DD/MM/YYYY") and returns the date in the specified format.

**Usage:**

    // date = new Date( 2014, 09, 18 )
    {{formatDate date "Do MMM YYYY"}}
    // Output => "18th Sep 2014"

**Other Dependencies:** Moment.js

## From Now

Accepts date object and an optional boolean suffix flag (**Defaults:** false). Returns time ago type text. Basically a Handlebars wrapper around Moment.prototype.fromNow function.

**Usage:**

    // date = new Date( 2014, 09, 18 )
    {{fromNow date true}}
    // Output => "a few seconds ago"

**Other Dependencies:** Moment.js

## Now

Accepts optional format string (**Defaults:** "DD/MM/YYYY") and returns the date when run in the format specified. Uses Moment.js under the hood for formatting.

**Usage:**

    // now = new Date( 2014, 09, 18 )
    {{now "Do MMM YYYY"}}
    // Output => "18th Sep 2014"

**Other Dependencies:** Moment.js
