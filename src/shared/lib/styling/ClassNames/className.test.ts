import { describe, expect, test } from "vitest";
import { ClassNames } from "./ClassNames";

describe("ClassNames", () => {
  test("1 argument", () => {
    expect(ClassNames("class1")).toBe("class1");
  });
  test("2 agrs", () => {
    expect(ClassNames("class1", "class2")).toBe("class1 class2");
  });
  test("agrs", () => {
    expect(ClassNames("class1", "class2", undefined, null)).toBe(
      "class1 class2",
    );
  });

  test("cnditional class", () => {
    expect(ClassNames("class1", "class2", { class3: true })).toBe(
      "class1 class2 class3",
    );
  });
  test("cnditional2 class", () => {
    expect(ClassNames("class1", "class2", { class3: false })).toBe(
      "class1 class2",
    );
  });
});
