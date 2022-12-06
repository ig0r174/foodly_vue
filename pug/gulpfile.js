const { src, dest } = require('gulp');
const pug = require('gulp-pug');


function defaultTask(cb) {
  return src('./src/*.pug')
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest('./dist'));
}

exports.default = defaultTask
