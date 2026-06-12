const sumAll = function(num1, num2) {
    let arr = [];

    let start = num1;
    let end = num2;
    if (num1>num2){
        start = num2;
        end = num1;
    }
    
    if (num1%1 !==0 || num2%1 !==0
        || num1<=0 || num2<=0
        || typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    } else{
        for (let i=(start-1); i<end; i++){
            arr[i] = i+1;
        }
        return arr.reduce((sum,current) => sum+current);
    }
};

// Do not edit below this line
module.exports = sumAll;
