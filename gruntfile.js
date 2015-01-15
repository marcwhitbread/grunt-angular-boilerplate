module.exports = function(grunt) {
	
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	concat: {
	    	compile: {
		    	src: ['src/js/**/*.js'],
		    	dest: 'app/js/script.js'
	    	}
    	},
    	htmlmin: {
	    	compile: {
		    	options: {
					removeComments: true,
					collapseWhitespace: true
				},
		    	files: [{
					expand: true,
					cwd: 'src/html/',
					src: '**/*.html',
					dest: 'app/partials/'
				}]
	    	}
    	},
    	uglify: {
	    	compile: {
		    	files: {
			    	'app/js/script.min.js': 'app/js/script.js'
		    	}
	    	}
    	},
    	less: {
	    	compile: {
				files: {
					'app/css/style.css' : 'src/less/style.less'
				}
			}
		},
    	watch: {
	    	html: {
		    	files: 'src/html/**/*.html',
				tasks: ['htmlmin:compile']
	    	},
			css: {
				files: 'src/less/**/*.less',
				tasks: ['less:compile']
			},
			js: {
				files: ['src/js/**/*.js'],
				tasks: ['concat:compile', 'uglify:compile']
			}
		},
		jshint: {
			all: ['src/js/*.js']
		}
    });
    
    //load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    //register tasks
    grunt.registerTask('default', ['watch']);
    
};