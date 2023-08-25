function test(...args) {
    var sum = 0;
    for(var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(test(2,3))