const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const config = {
	mode: {
		symbol: {
			dest: 'sprite',
			sprite: 'sprite.svg',
			example: true
		}
	},
	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false
	}
};

gulp.task('sprites', () => {
	return gulp.src('icons/**/*.svg').pipe(svgSprite(config)).pipe(gulp.dest('.'));
});
