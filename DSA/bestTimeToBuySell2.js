/*
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve. */
function bestTimeToBuyAndSell(prices){
    let sum = 0;
    let n=prices.length;
    for (let i = 1; i < n; i++) {
        if (prices[i] > prices[i - 1])
            sum += prices[i] - prices[i - 1];
    }
    return sum;
}

// prices= [7,1,5,3,6,4]            //output=7
prices = [1,2,3,4,5]          //output=4
// prices = [7,6,4,3,1]     // output = 0
console.log(bestTimeToBuyAndSell(prices))