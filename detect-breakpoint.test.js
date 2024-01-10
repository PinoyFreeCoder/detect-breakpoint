const { JSDOM } = require("jsdom");
const ResponsiveBreakpoints = require("./index");

// Set up a basic DOM environment
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
  url: "http://localhost",
});

// Set global variables
global.window = dom.window;
global.document = dom.window.document;

describe("ResponsiveBreakpoints", () => {
  let breakpointsHelper;

  beforeEach(() => {
    // Reset the instance before each test
    breakpointsHelper = new ResponsiveBreakpoints();
  });

  test("should initialize with default breakpoints", () => {
    expect(breakpointsHelper.breakpoints).toEqual({
      small: 576,
      medium: 768,
      large: 992,
      extraLarge: 1200,
    });
  });

  test("should correctly detect current breakpoint on initialization", () => {
    expect(breakpointsHelper.currentBreakpoint).toBe("extraLarge");
  });

  test("should update current breakpoint on window resize", () => {
    // Mock window.innerWidth to simulate a resize event
    window.innerWidth = 800;
    breakpointsHelper.handleResize();

    expect(breakpointsHelper.currentBreakpoint).toBe("large");
  });

  // Clean up after all tests
  afterAll(() => {
    // Reset global variables to avoid memory leaks
    global.window = undefined;
    global.document = undefined;
  });
});
