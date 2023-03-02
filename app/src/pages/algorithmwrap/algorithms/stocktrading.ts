/* eslint-disable arrow-body-style */
const func1 = (arr: any, len: number) => {
  console.log("arrarrarrarrarr", arr);
  return 1;
};
const func2 = (arr: any, len: number) => {
  console.log("kkkadfsf", arr);
  return 2;
};
export default {
  title: "买卖股票",
  desc: "",
  funcs: [
    {
      name: "买卖股票1",
      desc: "模拟股票交易,参数为string[],number",
      func: func1,
    },
    { name: "买卖股票2", desc: "参数为string[],number", func: func2 },
  ],
};
