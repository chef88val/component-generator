var fs = require('fs')
const argv = require('yargs')/* .usage('$0 <cmd> [args]')
.command('hello [name]', 'welcome ter yargs!', {
  name: {
    default: 'default name',
    describe: 'the name to say hello to'
  }
}, function (argv) {
  console.log('hello', argv.name, 'welcome to yargs!')
})
.help()
.argv */
console.log("params", argv.update, process.argv[2])

if (process.argv[2] != undefined) readArgs()
if(argv.update) updateListComponent(argv.update)
function readArgs() {
     process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
        if (index == 2)
            writeFile(val)
    });
}
function readHTML(params) {
    switch (params) {
        case 'd': writeFile
    }
    console.log("params", params)

}

function writeFile(params) {
    var route = require('./.componentGenerator.json').route
    console.log(route,"wr",route + params)
    let mkdir = false;
    try {
        fs.mkdirSync(route+params);
        process.chdir('./' + params)
    } catch (error) {
        if (error.code !== 'EEXIST') throw error
        process.chdir('./' + params)
    }
    let ext = ['html', 'js', 'less']
    ext.forEach(function (x) {
        console.log("x", x)
        fs.readFile('../test.component.' + x, 'utf8', function (err, data) {
            console.log(__dirname,"DDD")
            if (err) throw err;
            let result = data.replace(/test/g, params).replace(/Test/g, params).replace(/vmTest/g, 'vm'+params.charAt(0).toUpperCase() + params.slice(1));
 
             fs.writeFileSync(params + '.component.' + x, result, 'utf8', function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        });
    });

    console.log("End for each")

}
function checkDirectorySync(directory) {
    try {
        fs.statSync(directory);
    } catch (e) {
        fs.mkdirSync(directory);
    }
}

function updateListComponent(x){
   // fs.readFile(x,'utf8')
}