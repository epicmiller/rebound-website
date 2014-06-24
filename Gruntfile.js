module.exports = function(grunt) {

    var TEMPLATES_LOCATION        = "./views/",       // don't forget the trailing /
        TEMPLATES_EXTENSION       = ".handlebars",
        TEMPLATES_OUTPUT_LOCATION = "./public/javascripts/",       // don't forget the trailing /
        TEMPLATES_OUTPUT_FILENAME = "compiled_templates.js";  // don't forget the .js

    grunt.initConfig({
        watch: {
            compass: {
                files: ['./scss/**/*.scss'],
                tasks: ['compass:dev']
            },
            handlebars: {
                files: [TEMPLATES_LOCATION + '**/*' + TEMPLATES_EXTENSION],
                tasks: ['handlebars:compile']
            },
            express: {
              files:  [ './routes/**/*.js', './bin/*', './app.js' ],
              tasks:  [ 'express:dev' ],
              options: {
                spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
              }
            }
        },
        handlebars: {
            compile: {
                src: TEMPLATES_LOCATION + '**/*' + TEMPLATES_EXTENSION,
                dest: TEMPLATES_OUTPUT_LOCATION + TEMPLATES_OUTPUT_FILENAME,

                options: {
                    amd: 'Handlebars',
                    partialsUseNamespace: true,
                    namespace: 'Collegia.Views',
                    processName: function(filePath) {
                      return filePath.replace('./views/', '').replace('.handlebars', '');
                    },
                    partialRegex: /.*/,
                    partialsPathRegex: /\/views\/shared\//,
                    processPartialName: function(filePath) { // input:  templates/_header.hbs
                      return filePath.replace('./views/shared/', '').replace('.handlebars', '');
                    }
                  }
            }
        },
        compass: {
          prod: {
            src: 'scss',
            dest: 'public/stylesheets',
            outputstyle: 'compressed',
            environment: 'production'
          },
          dev: {
             src: 'scss',
             dest: 'public/stylesheets',
             environment: 'dev'
          }
        },
        express: {
          options: {
            // Override defaults here
          },
          dev: {
            options: {
              script: './rebound.js',
              node_env: 'dev',
              port: 4001
            }
          },
          prod: {
            options: {
              script: './rebound.js',
              node_env: 'production',
              port: 4001
            }
          },
          test: {
            options: {
              script: './rebound.js'
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('dev', [ 'handlebars:compile', 'compass:dev', 'express:dev', 'watch' ])
    grunt.registerTask('prod', [ 'handlebars:compile', 'compass:prod', 'express:prod' ])

}
