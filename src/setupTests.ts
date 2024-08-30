import '@testing-library/jest-dom';
import 'whatwg-fetch';

// Mocking IntersectionObserver globally
(global as any).IntersectionObserver = class {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
};

afterAll(() => {
  delete (global as any).IntersectionObserver;
});