const repeatString = function(str, num) {
    let arr = [];
    if (num <0){
        return("ERROR")
    } else{
        for (let i=0; i<num; i++){
                arr[i] = str;
        }
    }
    return arr.join('');
};

// Do not edit below this line
module.exports = repeatString;
