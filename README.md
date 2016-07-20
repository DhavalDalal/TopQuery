#TopQuery

This assumes you have Node.js and Karma installed on your machine.  We will use Jasmine and Karma to execute our tests.
### First Things First
* Run `npm install` to get all the dependencies sorted out.
* If you don't have Karma installed, please go to the next section, else perform the next step.
* Type `npm test` at the command prompt and wait for the tests to run.  

###To install Karma, please do the following:
* `npm install karma --save`
* `npm install -g karma-cli`

**Note**: In case things don't go right, you can follow the steps below manually and run the Following Commands to set up Jasmine for the project by re-creating karma.conf.js

* `npm install jasmine --save`
* `karma init` (and follow through all the questions.  It will integrate all the launchers by modifying the package.json.  It adds all the dependencies as `devDependencies`.  Move them to `dependencies`)
* In the `karma.conf.js` make sure the following lines are present in the List of files/patterns to load in the browser section
	
	```
	 files: [
      'src/**/*.js',
      'test/**/*Spec[s].js'
    ],
    ```
* Check if the following still exists in `package.json`, else replace the following in `package.json`, in the `"test"` section:
   
   ```"karma start >/dev/null & sleep 3 && karma run && ps -ef | grep karma | grep -v grep | awk '{print $2}' | xargs kill -9"```
  
