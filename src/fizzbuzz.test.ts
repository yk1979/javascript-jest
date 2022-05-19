import assert from "assert";
import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuzz test", () => {
  test("1を渡すと文字列の`1`が返る", () => {
    assert.strictEqual(fizzbuzz(1), "1");
  });
  test("2を渡すと文字列の`2`が返る", () => {
    assert.strictEqual(fizzbuzz(2), "2");
  });
  test("3を渡すと文字列の`Fizz`が返る", () => {
    assert.strictEqual(fizzbuzz(3), "Fizz");
  });
  test("5を渡すと文字列の`Buzz`が返る", () => {
    assert.strictEqual(fizzbuzz(5), "Buzz");
  });
});
