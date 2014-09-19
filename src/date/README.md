# Bullhorn Handlebars Date Helpers

## Ago

**Usage:**

    // date = new Date()
    {{ago date}}
    // Output => "Now"

**Other Dependencies:** N/A

## Format Date

**Usage:**

    // date = new Date( 2014, 09, 18 )
    {{formatDate date "Do MMM YYYY"}}
    // Output => "18th Sep 2014"

**Other Dependencies:** Moment.js

## From Now

**Usage:**

    // date = new Date( 2014, 09, 18 )
    {{fromNow date true}}
    // Output => "a few seconds ago"

**Other Dependencies:** Moment.js

## Now

**Usage:**

    // now = new Date( 2014, 09, 18 )
    {{now "Do MMM YYYY"}}
    // Output => "18th Sep 2014"

**Other Dependencies:** Moment.js
