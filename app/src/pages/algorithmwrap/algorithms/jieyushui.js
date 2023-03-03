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
const trap2 = (heights) => {
  const leng = heights.length;
  const maxleft = new Array(leng).fill(0);
  const maxRight = new Array(leng).fill(0);
  const diff = new Array(leng).fill(0);
  for (let i = 1; i < leng; i++) {
    maxleft[i] = Math.max(maxleft[i - 1], heights[i - 1]);
  }
  for (let i = leng - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], heights[i + 1]);
  }
  for (let i = 0; i < leng; i++) {
    const _diff = Math.min(maxleft[i], maxRight[i]) - heights[i];
    diff[i] = _diff > 0 ? _diff : 0;
  }
  return diff.reduce((st, itm) => st + itm, 0);
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
