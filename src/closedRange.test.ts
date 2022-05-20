import assert from "assert";
import { ClosedRange } from "./closedRange";

describe("整数閉区間を示す closedRange クラスのテスト", () => {
  let closedRange: ClosedRange;
  beforeEach(() => {
    closedRange = new ClosedRange(3, 7);
  });
  describe("toString メソッドを実行すると '[$下端点, $上端点]'という文字列が返る", () => {
    test("下端点3, 上端点7のとき'[3, 7]'という文字列が返る", () => {
      assert.strictEqual(closedRange.toString(), "[3, 7]");
    });
  });
  describe("contains メソッドは、渡された整数が整数閉区間の中に含まれているかどうかを調べて真偽値を返す", () => {
    // TODO 機能ごとの入れ子を作る
    test.each([
      { input: 2, expected: false, reason: "下端点よりひとつ小さい値" },
      { input: 3, expected: true, reason: "下端点と同値" },
      { input: 7, expected: true, reason: "上端点と同値" },
      { input: 8, expected: false, reason: "上端点よりひとつ大きい値" }
    ])(
      "下端点3, 上端点7のとき、$reason である $input を渡すと $expected を返す",
      ({ input, expected }) => {
        assert.strictEqual(closedRange.contains(input), expected);
      }
    );
  });
  describe("isEqual メソッドは、ClosedRange クラスのインスタンスを受け取り、その上端値と下端値が自身のものと一致するか調べて真偽値を返す", () => {
    test.each<{
      input: [number, number];
      expected: boolean;
      situation: string;
    }>([
      { input: [3, 7], expected: true, situation: "一致する場合" },
      { input: [3, 8], expected: false, situation: "不一致の場合" }
    ])(
      "$situation場合は$expectedを返す（下端値3, 上端値7のインスタンスと [下端値, 上端値]: $input を比較）",
      ({ input, expected }) => {
        assert.strictEqual(
          closedRange.isEqual(new ClosedRange(...input)),
          expected
        );
      }
    );
  });
  describe("isOverWrapping メソッドは、ClosedRange クラスのインスタンスを受け取り、その整数閉区域が自身の中に完全に内包されるかを調べて真偽値を返す", () => {
    // TODO この each はかえって読みづらいかも。。
    test.each<{
      input: [number, number];
      expected: boolean;
      situation: string;
    }>([
      {
        input: [3, 8],
        expected: false,
        situation: "インスタンスの上端値が自身の上端値よりも大きい"
      },
      {
        input: [2, 7],
        expected: false,
        situation: "インスタンスの下端値が自身の下端値よりも小さい"
      },
      {
        input: [4, 6],
        expected: true,
        situation:
          "インスタンスの下端値が自身の下端値よりも大きく、かつインスタンスの上端値が自身の上端値よりも小さい"
      },
      {
        input: [3, 7],
        expected: true,
        situation: "自身と完全に一致する"
      }
    ])(
      "$situation場合は $expected を返す（下端値3, 上端値7のインスタンスと [下端値, 上端値]: $input を比較）",
      ({ input, expected }) => {
        assert.strictEqual(
          closedRange.isOverWrapping(new ClosedRange(...input)),
          expected
        );
      }
    );
  });
  describe("例外や特殊な値の場合のテスト", () => {
    test.each<{
      input: [number, number];
      situation: string;
      message: string;
    }>([
      {
        input: [3.1, 7.9],
        situation: "整数以外の数値を渡す",
        message: "整数を渡してください"
      },
      {
        input: [7, 3],
        situation: "下端値が上限値よりも大きい",
        message: "上端点より下端点が大きい閉区間を作ることはできません"
      }
    ])(
      "$situationとエラーを返す（[下端値, 上端値]: $input）",
      ({ input, message }) => {
        assert.throws(() => {
          new ClosedRange(...input);
        }, new RegExp(message));
      }
    );
  });
});
