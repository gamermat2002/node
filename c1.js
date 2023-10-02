// __dirname => path to current directory
// __filename => filename
// require => function to use current module
// module => info about current module
// process => info about env where the program is being executed


const func = (Name) => {
    console.log(`Hello ${Name}`);
}

module.exports = func