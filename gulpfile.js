const exec = require('child_process').exec;
const path = require('path');
const { watch, parallel } = require('gulp');
const nodemon = require('gulp-nodemon');


/**
 *  Build the UI 
 */
function ngBuild(done) {
    process.chdir(path.resolve('note-me-ui'));
    // console.log(process.cwd());
    exec('ng build --deleteOutputPath=false', (err, stdout, stderr) => {
        process.chdir(path.resolve('..'));
        // console.log(process.cwd());
        if (!err) {
            console.log('UI was built successfully');
        } else {
            console.log('UI build failed with error:');
            console.log(`\n Failed with code ${err.code}\n`);
            done(err.stack);
        }
        done();
    });
}

/**
 * Watch changes in the UI files and build ui
 */
async function UiWatcher() {
    console.log('UI watcher is on');

    // process.chdir(path.resolve('ui'));
    watch('note-me-ui/src/**/*.*', { delay: 500, queue: false }, ngBuild);
}

/**
 * watch the server code using nodemon
 */
async function server(done) {
    setTimeout(() => {
        var stream = nodemon({
            script: 'src/main.ts',
            ext: 'html ts',
            ignore: ['note-me-ui/'],
            done: done
        });

        stream
            .on('restart', function () {
                console.log('restarted!')
            })
            .on('crash', function () {
                console.error('Application has crashed!\n')
                stream.emit('restart', 10)  // restart the server in 10 seconds
            });
    }, 10000);
}

exports.default = ngBuild;
exports.watch = UiWatcher;
exports.server = server;
exports.full = parallel(UiWatcher, server);
