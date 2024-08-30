import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

// Mock the GreetingLottie component to ensure it renders synchronously
jest.mock('../components/DisplayLottie', () => ({
  __esModule: true,
  default: () => <div data-testid="lottie-animation"></div>,
}));

describe("Skills Component", () => {
    test("renders the correct software skills icons", () => {
      render(<Skills />);
      const javascriptIcon = screen.getByTestId("JavaScript-icon");
      const reactIcon = screen.getByTestId("Reactjs-icon");
      expect(javascriptIcon).toBeInTheDocument();
      expect(reactIcon).toBeInTheDocument();
    });
  });
  