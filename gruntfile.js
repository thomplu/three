module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'src/js/main.js' : 'src/js/es6/main.js'
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel']);
};