// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jest-axe adds the `toHaveNoViolations` matcher for accessibility assertions.
// learn more: https://github.com/nickcolley/jest-axe
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// jsdom does not implement IntersectionObserver, which framer-motion's
// `whileInView` feature relies on. Provide a minimal no-op mock so components
// render without throwing `ReferenceError: IntersectionObserver is not defined`.
class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {}

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = IntersectionObserverMock;
window.IntersectionObserver = IntersectionObserverMock;

// jsdom also does not implement matchMedia, which framer-motion and various
// responsive utilities may query. Provide a minimal mock if it's missing.
if (typeof window.matchMedia !== 'function') {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {}, // deprecated
    removeListener() {}, // deprecated
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    },
  });
}

// jsdom does not implement ResizeObserver, which @headlessui/react (used by
// the Header) relies on. Provide a minimal no-op mock so components render
// without throwing `ReferenceError: ResizeObserver is not defined`.
class ResizeObserverMock {
  observe() {}

  unobserve() {}

  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;
window.ResizeObserver = ResizeObserverMock;
