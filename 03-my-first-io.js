console.log(
    require('fs')
    .readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .length - 1);

// okay, I'm really lazy. did not want to add any extra variables at all.