

  require('yargs')
    .usage('$0 <cmd> [args]')
    .command('hello [name]', 'welcome ter yargs!', {
      name: {
        default: 'default name',
        describe: 'the name to say hello to'
      }
    }, function (argv) {
      console.log('hello', argv.name, 'welcome to yargs!')
    })
    .help()
    .argv
