# responsive-dnd
**Dungeons and Dragons 5th Edition Character Sheet made in Bootstrap**

This is a responsively designed character sheet designed for Dungeons & Dragons 5th Edition. It is designed to be as simple and unintrusive as possible; a true paper replacement. The biggest challenge for this project is that I've only really played D&D twice. My knowledge of the mechanics is a tad limited. To that end, my friend Danny Martin deserves a producer credit for his constant help with this project. If you have any suggestions or ideas, please let me know! -[@WilliHyde](https://twitter.com/WilliHyde)


#How to run locally

* Clone this repo

* This is a node app. Before you can run responsive-dnd on your computer you must first download node, please see https://nodejs.org for downloading instruction.

* Once you have gotten node up and running, navigate to the correct directory

* Install all of the node dependencies by running `npm install`  (grab a tasty beverage this will take a couple minutes)

* Install gulp `npm install gulp-cli -g`

* Install http-server if you do not already have have it `npm install -g http-server`

* Start the server `http-server`

* The site will be running at http://localhost:8080/



**To do list:**
* Convert most of the sections into templates with Handelbars.js
* Convert the CSS over to SCSS.
* Set up a grunt file for a lot of this.
* Get the save and upload sections to function. The data will be saved and loaded in from a JSON file.

**Possible future features:**
* Cloud loading of JSON data file.
* Spell Sheet and Additional Character Information Sheet.

##Change Log
(Will live here for now)

**June 5, 2015**
* Small tabbing error in the CSS corrected.

**May 27, 2015**
* Removed dragon icon animation.
* Cleaned up the Javascript.

**May 26, 2015, Part 2**
* Added the "Clear All" functionality.
* Added a cool dragon icon.
* Tweeked some of the colors.
* Made character section look better on phones.
* Added dynamic titles.
* Changed section highlight functionality.
* Added a "Coming Soon!" modal.

**May 26, 2015**
* Calculation is now functioning.
* Cleaned up some of the JS.
* Removed Bootstrap wells and panels for custom CSS.
* Moved Passive Wisdom location to the top.
