
## Create Your Block
* Create package.json:
  *  `npm init`
  *  Answer questions. Don't forget to use GPL-2.0 or GPL-3.0 license.
* Install WordPress scripts
  * `npm i @wordpress/scripts`
* Update "scripts" in package.json
  * [Copy from README](https://www.npmjs.com/package/@wordpress/scripts#setup)
* Ignore directories in .gitingore:

```
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

