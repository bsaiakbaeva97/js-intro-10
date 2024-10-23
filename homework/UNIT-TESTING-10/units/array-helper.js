class ArrayHelper {
    static sum(arr){
       return arr.reduce((acc, curr) => acc + curr, 0)
    }


    static max (arr) {
        return Math.max(...arr)
    }

    static min (arr) {
        return Math.min(...arr)
    }
}

module.exports.ArrayHelper = ArrayHelper;

