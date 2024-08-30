import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Proficiency } from './Proficiency'; // Import the Proficiency component
import { SkillBar } from '../types/sections';

// Mock data for SkillBar
const mockSkillBars: SkillBar[] = [
  { Stack: 'JavaScript', progressPercentage: 90 },
  { Stack: 'TypeScript', progressPercentage: 80 },
  { Stack: 'React', progressPercentage: 85 },
];

// Mock the GreetingLottie component
jest.mock('../components/DisplayLottie', () => {
  const MockDisplayLottie = () => <div data-testid="lottie-animation" />;
  
  MockDisplayLottie.displayName = 'MockDisplayLottie';
  
  return MockDisplayLottie;
});


describe('Proficiency Component', () => {
  it('renders correctly with skillBarsData', () => {
    const { getByText, getByTestId } = render(<Proficiency skillBarsData={mockSkillBars} />);

    // Check if skill bars are rendered correctly
    mockSkillBars.forEach(skill => {
      expect(getByText(skill.Stack)).toBeInTheDocument();
      expect(getByText(`${skill.progressPercentage}%`)).toBeInTheDocument();
    });

    // Check if the GreetingLottie component is rendered
    expect(getByTestId('lottie-animation')).toBeInTheDocument();
  });
});
