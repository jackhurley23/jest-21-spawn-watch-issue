
describe('add', () => {
  it('should add two numbers', () => {
    expect(1 + 2).toBe(3);
  });
});


describe("Nested Top Parent", function() {
  describe("First inner describe", function() {
    it("Inner first it", function() {
      // let output = mount(HELLO_WORLD);
      // expect(output.text()).toContain('Hello World');
      expect(1 + 1).toBe(3);
    });
  });
  describe("Second inner describe", function() {
    it("Inner second it", function() {
      // let output = mount(HELLO_WORLD);
      // expect(output.text()).toContain('Spec1');
      expect(1).toBe(2);
    });
  });
});

describe("Parent of numbers", function() {
  it("One", function() {
    expect(1).toBe(1);
  });
  it("Two", function() {
    expect(2).toBe(2);
  });
  it("Three", function() {
    expect(3).toBe(3);
  });
  it("Four", function() {
    expect(4).toBe(4);
  });
});