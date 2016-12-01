/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 31-03-2016.
 */

var path = require('path');

var outputFolder = './dist';
var rootAppFolder = './app';

module.exports = {

	  // should the code be minified
	  productionBuild: false,
	  outputFolder: outputFolder ,

	  styles:{
			lessFiles: ['app/css/*.less', 'app/src/modules/**/*.less'],
			input: path.resolve(rootAppFolder, './css/styles.less'),
			output: outputFolder
	  },

	  js:{
			input: path.resolve(rootAppFolder, './src/app.ts'),
			output: outputFolder
	  }
	  
}

/*
'styles': {
	  'files' : ['app/css/!*.less', 'app/src/modules/!**!/!*.less'],
			'src' : 'app/css/styles.less',
			'dest': 'www/css'
},*/
