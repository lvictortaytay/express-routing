function calculateMean(queryNums){
    let sum = 0
    let nums = []
    splitNums = queryNums.split(",")
    for(let num in splitNums){
        if(typeof(Number(num)) == "number"){
            nums.push(Number(num) + 1)
            console.log()
        }else{
            return false
        }
    }
    for(let i = 0 ; i < nums.length ; i++){
        sum = sum + nums[i]
    }
    let mean = sum / nums.lenth
    return mean
}


module.exports = calculateMean