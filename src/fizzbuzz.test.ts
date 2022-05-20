import assert from "assert";
import { fizzbuzz } from "./fizzbuzz";

describe("数列と変換規則を扱う fizzbuzz 関数のテスト", () => {
  describe("3の倍数のときは数の代わりに`Fizz`という文字列が返る", () => {
    test("同値類の中の最小の3の倍数である3を渡すと`Fizz`が返る", () => {
      assert.strictEqual(fizzbuzz(3), "Fizz");
    });
    test("上限の境界値のひとつ内側の値99を渡すと`Fizz`が返る", () => {
      assert.strictEqual(fizzbuzz(99), "Fizz");
    });
  });
  describe("5の倍数のときは数の代わりに`Buzz`という文字列が返る", () => {
    test("同値類の中の最小の5の倍数である5を渡すと`Buzz`が返る", () => {
      assert.strictEqual(fizzbuzz(5), "Buzz");
    });
    test("上限の境界値100を渡すと`Buzz`が返る", () => {
      assert.strictEqual(fizzbuzz(100), "Buzz");
    });
  });
  describe("3と5の両方の倍数のときは数の代わりに`FizzBuzz`という文字列が返る", () => {
    test("同値類の中の3と5の最小公倍数である15を渡すと`FizzBuzz`が返る", () => {
      assert.strictEqual(fizzbuzz(15), "FizzBuzz");
    });
  });
  describe("その他の数のときはそのまま文字列に変換する", () => {
    test("下限の境界値1を渡すと文字列の`1`が返る", () => {
      assert.strictEqual(fizzbuzz(1), "1");
    });
    test("下限の境界値のひとつ内側の値2を渡すと文字列の`2`が返る", () => {
      assert.strictEqual(fizzbuzz(2), "2");
    });
  });
  describe("仕様の範囲外の値であっても同じ規則が適用される", () => {
    test("上限の境界値のひとつ外側の値101を渡すと文字列の`101`が返る", () => {
      assert.strictEqual(fizzbuzz(101), "101");
    });
    test("下限の境界値のひとつ外側の値0を渡すと、3の倍数でも5の倍数でもあるので`FizzBuzz`が返る", () => {
      assert.strictEqual(fizzbuzz(0), "FizzBuzz");
    });
  });
});
