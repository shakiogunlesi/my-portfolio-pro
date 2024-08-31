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

  declare module '*.png' {
    const value: string;
    export default value;
  }
  
  
  export {}; // To make this file a module
  