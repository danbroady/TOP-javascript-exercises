const fibonacci = function(position) {
    if (position <0) {
        return ("OOPS");
    } else if (typeof position === "string") {
        position = Number(position);
    }
    let fib = [0, 1, 1];
    for (let i=3; i<(position+1); i++) {
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib[position];
};

// Do not edit below this line
module.exports = fibonacci;
