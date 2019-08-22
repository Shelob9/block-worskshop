# How To Make WordPress Blocks

The steps below are over-simplifed. This code goes with an in person workshop.

## Introduction

This repo has the end result of setting up the repo, adding a static block and then making it editable. The steps below walk you through that process. 

### Requirments
* Your computer should have:
  * [npm]()
  * [WordPress]()
  * A local development environment.
  * [Docker]() OPTIONAL.
  * [git]() OPTIONAL.
   
### Installing (Optional)

If you want to use this as is:
* Clone repo:
  * `git clone ...`
  * You should clone into the plugin directory of your local site OR into an empty directory -- if you wish to use included [docker-compose file]() for local development.
* Swith to the plugin's directory and install dependencies.
  * `cd block-workshop`
  * `npm install`
* IF using provided local environement:
  * `docker-compose up -d`

## Create Your Block

* Create package.json:
  *  `npm init`
  *  Answer questions. Don't forget to use GPL-2.0 or GPL-3.0 license.
* Install WordPress scripts
  * `npm i @wordpress/scripts`
* Update "scripts" in package.json
  * [Copy from README](https://www.npmjs.com/package/@wordpress/scripts#setup)
* Ignore directories in .gitingore:
  
```bash
node_modules/
vendor/
build/
```
## Setup Files

* Create `src/index.js`
* Put some JavaScript in there.
* Compile it to make sure everything works.
  * `npm run build`
  * You should see built JavaScript in `build/`
* Be impressed by how simple webpack and Babel are to use :)

## Register With WordPress

* Create a block.json
  * https://gist.github.com/Shelob9/f2c97a5803d02a8b82217af670b5b008#file-block-json
* Create a main plugin file to enqueue JavaScript and CSS.
  * https://gist.github.com/Shelob9/f2c97a5803d02a8b82217af670b5b008#file-plugin-php

### Create Your Block

* Open `src/index.js`
* Write Some JavaScript:
  * Import dependencies
  * `registerBlockType()`
  * Edit Callback
  * Save Callback
* For manual testing while developing
  * `npm run start`
* To ship for production:
  * `npm run build`

## Make Block Editable

* Install new dependencies:
  * `npm i @wordpress/editor @wordpress/componen
ts`
* Import `TextControl` from `@wordpress/components`
  * Use for editting message
* Import `InspectorControls` from `@wordpress/editor`
* Add message attribute
* Get current value of message from `attributes` prop passed to save and edit.
* Create update function for message using `setAttributes` prop passed to edit callback.
* Display current value of message in edit and save callbacks.
* Use `TextControl` to created edit interface for block.
* Wrap the control in `InsepctorControls` so it goes in the inspector controls.
