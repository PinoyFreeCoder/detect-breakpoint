const defaultBreakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
};

// ResponsiveBreakpoints class
class ResponsiveBreakpoints {
  constructor(breakpoints = defaultBreakpoints) {
    this.breakpoints = breakpoints;
    this.currentBreakpoint = this.getCurrentBreakpoint();
    this.handleResize = this.handleResize.bind(this);

    // Initial setup
    this.setupEventListeners();
  }

  getCurrentBreakpoint() {
    const screenWidth = window.innerWidth;
    return (
      Object.keys(this.breakpoints).find(
        (breakpoint) => screenWidth < this.breakpoints[breakpoint]
      ) || "extraLarge"
    );
  }

  handleResize() {
    const newBreakpoint = this.getCurrentBreakpoint();
    if (newBreakpoint !== this.currentBreakpoint) {
      this.currentBreakpoint = newBreakpoint;
      // Trigger an event or callback when the breakpoint changes
      console.log(`Breakpoint changed to: ${newBreakpoint}`);
    }
  }

  setupEventListeners() {
    window.addEventListener("resize", this.handleResize);
  }
}

module.exports = ResponsiveBreakpoints;
