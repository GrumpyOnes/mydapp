/* eslint-disable no-undef */
import Jieyushui from "../algorithms/jieyushui";

describe("测试接雨水算法", () => {
  test("测试用例1", () => {
    const result = Jieyushui.funcs[0].func([3, 4, 2, 5, 6]);
    expect(result).toBe(2);
  });
});
