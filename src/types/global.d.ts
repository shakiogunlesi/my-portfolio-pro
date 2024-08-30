// src/types/global.d.ts
interface IntersectionObserver {
    observe(): void;
    unobserve(): void;
    disconnect(): void;
  }
  
  declare global {
    interface Window {
      IntersectionObserver: typeof IntersectionObserver;
    }
  }
  
  export {}; // To make this file a module
  