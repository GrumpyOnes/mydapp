/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
const trap = (height) => {
  let r = height.length - 1;
  let l = 0;
  let ans = 0;
  let pre_max = 0;
  let suf_max = 0;
  while (l <= r) {
    pre_max = Math.max(pre_max, height[l]);
    suf_max = Math.max(suf_max, height[r]);
    if (pre_max < suf_max) {
      ans += pre_max - height[l];
      l++;
    } else {
      ans += suf_max - height[r];
      r--;
    }
  }
  return ans;
};

export default {
  title: "接雨水",
  desc: "",
  funcs: [
    {
      func: trap,
      name: "接雨水",
      desc: "接雨水算法,参数为num[],https://leetcode.cn/problems/trapping-rain-water/submissions/",
    },
  ],
};
