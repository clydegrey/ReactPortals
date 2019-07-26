const rimraf = require('rimraf');
const project = require('./project.config');

const directory = project.paths.build;
const toolsDirectory = project.paths.tools.build;

const clean = dir =>
  rimraf(dir, {
    disableGlob: true
  }, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Directory Cleaned: ${dir}`);
    }
  });


/**
 * Clean build directory
 */
clean(directory);
clean(toolsDirectory);