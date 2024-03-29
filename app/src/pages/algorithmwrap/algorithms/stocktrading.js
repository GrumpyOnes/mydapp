/* eslint-disable camelcase */
// dp[i][k][0]  //第i天 可进行K次交易  没有股票
// dp[i][k][1]  //第i天 可进行K次交易  有股票
//dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i]);
//dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i]);//买入的时候计算一次交易

//只能买卖一次 k=1
//dp[i][1][0] = Math.max(dp[i-1][1][0],dp[i-1][1][1]+prices[i]);
//dp[i][1][1] = Math.max(dp[i-1][1][1],dp[i-1][0][0]-prices[i]); //dp[i-1][0][0] = 0
//简化
//dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
//dp[i][1] = Math.max(dp[i-1][1],-prices[i]); //dp[i-1][0][0] = 0

const maxProfit1 = (prices) => {
  const n = prices.length;
  const dp = Array.from(new Array(n), (x) => new Array(2));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  return dp[n - 1][0];
};

//去掉一维
const maxProfit1V1 = (prices) => {
  const n = prices.length;
  const dp = Array.from(new Array(n), (x) => new Array(2));
  dp[0] = 0;
  dp[1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i]);
    dp[1] = Math.max(dp[1], -prices[i]);
  }
  return dp[0];
};

//语义化
const maxProfit1V2 = (prices) => {
  const n = prices.length;
  //let dp = Array.from(new Array(n),(x)=>new Array(2));
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, -prices[i]);
  }
  return sell;
};

//无限次买卖
//dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i]);
//dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i]);
//简化 k不影响结果 可去掉
//dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
//dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]); //dp[i-1][0][0] = 0
const maxProfit2 = (prices) => {
  const n = prices.length;
  const dp = Array.from(new Array(n), (x) => new Array(2));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};

//简化后
const maxProfit2V1 = (prices) => {
  const n = prices.length;
  //let dp = Array.from(new Array(n),(x)=>new Array(2));
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, sell - prices[i]);
  }
  return sell;
};

//有限次买卖 k=2
//dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i]);
//dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i]);
//k=2 枚举
//dp[i][2][0] = Math.max(dp[i-1][2][0],dp[i-1][2][1]+prices[i]);
//dp[i][2][1] = Math.max(dp[i-1][2][1],dp[i-1][1][0]-prices[i]);
//dp[i][1][0] = Math.max(dp[i-1][1][0],dp[i-1][1][1]+prices[i]);
//dp[i][1][1] = Math.max(dp[i-1][1][1],dp[i-1][0][0]-prices[i]);  //dp[i-1][0][0] ==0

//简化
// sell_2 = Math.max(sell_2,buy_2+prices[i]);
// buy_2 = Math.max(buy_2,buy_1-prices[i]);
// sell_1 = Math.max(sell_1,buy_1+prices[i]);
// buy_1 = Math.max(buy_1,-prices[i]);

const maxProfit3 = (prices) => {
  let sell_1 = 0;
  let buy_1 = -prices[0];
  let sell_2 = 0;
  let buy_2 = -prices[0];
  const n = prices.length;
  for (let i = 1; i < n; i++) {
    sell_1 = Math.max(sell_1, buy_1 + prices[i]);
    buy_1 = Math.max(buy_1, -prices[i]);
    sell_2 = Math.max(sell_2, buy_2 + prices[i]);
    buy_2 = Math.max(buy_2, sell_1 - prices[i]);
  }
  return [sell_1, sell_2];
};

//限定交易次数 最多次数为k
const maxProfit4 = (prices, k) => {
  const n = prices.length;
  const profit = new Array(k);
  for (let j = 0; j <= k; j++) {
    profit[j] = {
      buy: -prices[0],
      sell: 0,
    };
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      profit[j] = {
        sell: Math.max(profit[j].sell, profit[j].buy + prices[i]),
        buy: Math.max(profit[j].buy, profit[j - 1].sell - prices[i]),
      };
    }
  }
  return profit;
};

//含有冷冻期 冷冻期一天
//dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
//dp[i][1] = Math.max(dp[i-1][1],dp[i-2][0]-prices[i]);
//降维
//sell = Math.max(sell,buy+prices[i]);
//buy = Math.max(buy,frzSell-prices[i]);
const maxProfit5 = (prices) => {
  const n = prices.length;
  //let dp = Array.from(new Array(n),(x)=>new Array(2));
  let sell = 0;
  let buy = -prices[0];
  let frzSell = 0;
  for (let i = 1; i < n; i++) {
    const temp = sell;
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, frzSell - prices[i]);
    frzSell = temp;
  }
  return sell;
};

//有手续费
const maxProfit6 = (prices, fee) => {
  const n = prices.length;
  //let dp = Array.from(new Array(n),(x)=>new Array(2));
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i] - fee);
    buy = Math.max(buy, sell - prices[i]);
  }
  return sell;
};

export default {
  title: "买卖股票",
  desc: "",
  funcs: [
    {
      name: "只能买卖一次",
      desc: "只能买卖一次,参数为number[]",
      func: maxProfit1,
    },
    {
      name: "只能买卖一次,去掉一维",
      desc: "只能买卖一次,参数为number[]",
      func: maxProfit1V1,
    },
    {
      name: "只能买卖一次,语义化",
      desc: "只能买卖一次,参数为number[]",
      func: maxProfit1V2,
    },
    {
      name: "无限次买卖",
      desc: "参数为number[]",
      func: maxProfit2,
    },
    {
      name: "无限次买卖,简化后",
      desc: "参数为number[]",
      func: maxProfit2V1,
    },
    {
      name: "有限次买卖 k=2",
      desc: "参数为number[]",
      func: maxProfit3,
    },
    {
      name: "限定交易次数 最多次数为k",
      desc: "参数为number[]",
      func: maxProfit4,
    },
    {
      name: "含有冷冻期 冷冻期一天",
      desc: "参数为number[]",
      func: maxProfit5,
    },
    {
      name: "有手续费",
      desc: "参数为number[],num",
      func: maxProfit6,
    },
  ],
};
