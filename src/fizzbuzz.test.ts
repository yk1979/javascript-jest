import assert from "assert";
import { fizzbuzz } from "./fizzbuzz";

describe("数列と変換規則を扱う fizzbuzz 関数のテスト", () => {
  describe("3の倍数のときは数の代わりに'Fizz'という文字列が返る", () => {
    test.each([
      { input: 3, reason: "同値類の中の最小の3の倍数" },
      { input: 99, reason: "上限の境界値のひとつ内側の値" }
    ])("$reasonである$inputを渡すと文字列'Fizz'が返る", ({ input }) => {
      assert.strictEqual(fizzbuzz(input), "Fizz");
    });
  });
  describe("5の倍数のときは数の代わりに'Buzz'という文字列が返る", () => {
    test.each([
      { input: 5, reason: "同値類の中の最小の5の倍数" },
      { input: 100, reason: "上限の境界値" }
    ])("$reasonである$inputを渡すと文字列'Buzz'が返る", ({ input }) => {
      assert.strictEqual(fizzbuzz(input), "Buzz");
    });
  });
  describe("3と5の両方の倍数のときは数の代わりに'FizzBuzz'という文字列が返る", () => {
    test("同値類の中の3と5の最小公倍数である15を渡すと'FizzBuzz'が返る", () => {
      assert.strictEqual(fizzbuzz(15), "FizzBuzz");
    });
  });
  describe("その他の数のときはそのまま文字列に変換する", () => {
    test.each([
      { input: 1, expected: "1", reason: "下限の境界値" },
      { input: 2, expected: "2", reason: "下限の境界値のひとつ内側の値" }
    ])("$inputを渡すと文字列の'$expected'が返る", ({ input, expected }) => {
      assert.strictEqual(fizzbuzz(input), expected);
    });
  });
  describe("仕様の範囲外の値であっても同じ規則が適用される", () => {
    test.each([
      { input: 101, expected: "101", reason: "上限の境界値のひとつ外側の値" }
    ])("$inputを渡すと文字列の'$expected'が返る", ({ input, expected }) => {
      assert.strictEqual(fizzbuzz(input), expected);
    });
    // 0は特殊な値なのでループの中に入れずにあえて外に出す
    test("下限の境界値のひとつ外側の値0を渡すと、3の倍数でも5の倍数でもあるので'FizzBuzz'が返る", () => {
      assert.strictEqual(fizzbuzz(0), "FizzBuzz");
    });
  });
});
