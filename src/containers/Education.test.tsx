import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Education } from './Education';
import { educationInfo } from '../portfolio';

// Mocking child components and other dependencies
jest.mock('../components/EducationCard', () => {
  const MockEducationCard = (props: any) => (
    <div data-testid="education-card">{JSON.stringify(props)}</div>
  );
  
  MockEducationCard.displayName = 'MockEducationCard';
  
  return MockEducationCard;
});

jest.mock('react-awesome-reveal', () => ({
  Fade: ({ children }: any) => <div>{children}</div>,
}));

describe('Education Component', () => {
  it('renders the Education section with correct heading and icon', () => {
    render(<Education />);

    // Get the heading by role
    const headingElement = screen.getByRole('heading', { name: /Education/i });
    expect(headingElement).toBeInTheDocument();

    // Check if the icon is present by its test ID or by class
    const iconElement = screen.getByTestId('education-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.firstChild).toHaveClass('fas fa-book');
  });

  it('renders the correct number of education cards', () => {
    render(<Education />);
    
    const educationCards = screen.getAllByTestId('education-card');
    expect(educationCards).toHaveLength(educationInfo.length);
  });
});
