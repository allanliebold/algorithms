function maxStockProfit(pricesArr) {
  // returns max possible profit
  // if no profit is possible, return -1
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  
  var changeBuyPrice = true;
  
  for (var i = 0; i < pricesArr.length; i++) {
    buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
  }
}
