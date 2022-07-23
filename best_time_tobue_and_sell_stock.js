/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
arr = [7,1,5,3,6,4]
*/

var maxProfit = function(prices) {
    let maxP = 0;
    let minP = Number.MAX_VALUE;

    for( let i = 0; i < prices.length; i++ ) {
        minP = Math.min(minP, prices[i]);

        if( prices[i] > minP ) {
           maxP = Math.max(maxP, prices[i] - minP);
        }
    }

    return maxP;
    
};
console.log(maxProfit([7,1,5,3,6,4]))

