// Education.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Education } from './Education';
import { educationInfo } from '../portfolio';

// Define the props interface for EducationCard
interface EducationCardProps {
  schoolName: string;
  degree: string;
  // Add other props if needed
}

// Mock EducationCard component
jest.mock('../components/EducationCard', () => (props: EducationCardProps) => (
  <div data-testid="education-card">
    <h5>{props.schoolName}</h5>
    <p>{props.degree}</p>
  </div>
));

describe('Education Component', () => {
  it('renders Education section with correct elements', () => {
    render(<Education />);
    
    // Check for the presence of the icon
    const icon = screen.getByTestId('education-icon');
    expect(icon).toBeInTheDocument();
    
    // Check for the title
    const title = screen.getByText(/education/i);
    expect(title).toBeInTheDocument();
    
    // Check for EducationCard components
    educationInfo.forEach(info => {
      const card = screen.getByText(info.schoolName);
      expect(card).toBeInTheDocument();
    });
  });

  it('renders no cards when educationInfo is empty', () => {
    // Mock empty educationInfo
    jest.mock('../portfolio', () => ({
      educationInfo: []
    }));
    
    render(<Education />);
    
    // Check that no EducationCard components are rendered
    const cards = screen.queryAllByTestId('education-card');
    expect(cards).toHaveLength(0);
  });
});
