#TopQuery

This assumes you have Node.js and Karma installed on your machine.  We will use Jasmine, Karma, Sinon to run and execute our tests.


###To install Karma, please do the following:
* `npm install karma --save`
* `npm install -g karma-cli`

Type `npm test` at the command prompt and wait for the tests to run.  

**Note**: In case things don't go right, you can follow the steps below manually and run the Following Commands to set up Karma and Jasmine for the project. 

* `npm install jasmine --save`
* `karma init` (and follow through all the questions.  It will integrate all the launchers by modifying the package.json.  It adds all the dependencies as `devDependencies`.  Move them to `dependencies`)
* In the `karma.conf.js` make sure the following lines are present in the List of files/patterns to load in the browser section
	
	```
	 files: [
      'src/**/*.js',
      'test/**/*Spec[s].js'
    ],
    ```
* Replace the following in `package.json`, in the `"test"` section:
   
   ```"karma start >/dev/null & sleep 3 && karma run && ps -ef | grep karma | grep -v grep | awk '{print $2}' | xargs kill -9"```
   
* To execute the tests, type `npm test`
  
