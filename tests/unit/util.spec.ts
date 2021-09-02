import { range } from "@/utils";

describe("range", () => {
  it("creates an array of numbers", () => {
    const output = range(1, 3, 1);
    expect(output).toBeInstanceOf(Array);
    expect(output[0]).toBe(1);
  });
  it("creates an array containing a sequence of numbers", () => {
    const output = range(1, 3, 1);
    expect(output).toBeInstanceOf(Array);
    expect(output.length).toBeCloseTo(3);
    expect(output).toStrictEqual([1, 2, 3]);
  });

  it("creates a range of the length of the input, if only one input is given", () => {
    const output = range(4);
    expect(output).toStrictEqual([0, 1, 2, 3, 4]);
  });
});
