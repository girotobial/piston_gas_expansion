import { create3dShape } from "@/model/geometry";

test("Create Cylinder with width 2, height 3", () => {
  const cylinder = create3dShape("circular", 2, 3);
  expect(cylinder.width).toBe(2);
  expect(cylinder.height).toBe(3);
});

test("Create cuboid with width 2, height 3", () => {
  const cuboid = create3dShape("square", 2, 3);
  expect(cuboid.height).toBe(3);
  expect(cuboid.width).toBe(2);
});

test("Cylinder with diameter 2 has area of Pi", () => {
  expect(create3dShape("circular", 2, 1).crossSectionArea()).toBe(Math.PI);
});

test("Cylinder with diameter of 8 has cross sectional area of 16 Pi", () => {
  expect(create3dShape("circular", 8, 1).crossSectionArea()).toBe(16 * Math.PI);
});

test("Cylinder with diameter of 8 and a height of 2 has a volume of 32 Pi", () => {
  expect(create3dShape("circular", 8, 2).volume()).toBe(32 * Math.PI);
});

test("Cylinder with diameter of 0 has a volume and area of 0", () => {
  const cylinder = create3dShape("circular", 0, 10);
  expect(cylinder.crossSectionArea()).toBe(0);
  expect(cylinder.volume()).toBe(0);
});

test("Cuboid with width of 1 has a cross sectional area of 1", () => {
  expect(create3dShape("square", 1, 1).crossSectionArea()).toBe(1);
});

test("Cuboid with width 1 and height 1 has volume of 1", () => {
  expect(create3dShape("square", 1, 1).volume()).toBe(1);
});

test("Cuboid with width 8 and height 2 has area of 64 and volume of 128", () => {
  const cuboid = create3dShape("square", 8, 2);
  expect(cuboid.crossSectionArea()).toBe(64);
  expect(cuboid.volume()).toBe(128);
});
