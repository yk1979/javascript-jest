import assert from "assert";
import { fizzbuzz } from "./fizzbuzz";

describe("数列と変換規則を扱う fizzbuzz 関数のテスト", () => {
  describe("3の倍数のときは数の代わりに`Fizz`という文字列が返る", () => {
    test("3を渡すと`Fizz`が返る", () => {
      assert.strictEqual(fizzbuzz(3), "Fizz");
    });
  });
  describe("5の倍数のときは数の代わりに`Buzz`という文字列が返る", () => {
    test("5を渡すと`Buzz`が返る", () => {
      assert.strictEqual(fizzbuzz(5), "Buzz");
    });
  });
  describe("その他の数のときはそのまま文字列に変換する", () => {
    test("1を渡すと文字列の`1`が返る", () => {
      assert.strictEqual(fizzbuzz(1), "1");
    });
  });
});
