import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Experience } from './Experience';
import { experience } from '../portfolio';

// Mocking child components and other dependencies
jest.mock('../components/ExperienceCard', () => {
  const MockExperienceCard = (props: any) => (
    <div data-testid="experience-card">{JSON.stringify(props)}</div>
  );
  
  MockExperienceCard.displayName = 'MockExperienceCard';
  
  return MockExperienceCard;
});

jest.mock('react-awesome-reveal', () => ({
  Fade: ({ children }: any) => <div>{children}</div>,
}));

describe('Experience Component', () => {
  it('renders the Experience section with correct heading and icon', () => {
    render(<Experience />);
    
    // Get the heading by role
    const headingElement = screen.getByRole('heading', { name: /Experience/i });
    expect(headingElement).toBeInTheDocument();
    
    // Check if the icon is present by its test ID
    const iconElement = screen.getByTestId('experience-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.firstChild).toHaveClass('fas fa-briefcase');
  });

  it('renders the correct number of experience cards', () => {
    render(<Experience />);
    
    const experienceCards = screen.getAllByTestId('experience-card');
    expect(experienceCards).toHaveLength(experience.length);
  });
});
