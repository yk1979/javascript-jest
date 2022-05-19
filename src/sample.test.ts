import { sample } from "./sample";

const assert = require("assert").strict;

test("ts sample test", () => {
  const message = sample();
  assert.equal(message, "Hello TDDBC!");
});
