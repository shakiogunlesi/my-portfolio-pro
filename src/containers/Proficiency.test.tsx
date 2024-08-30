// src/containers/Proficiency.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Proficiency } from './Proficiency';
import { SkillBar } from '../types/sections';

// Updated mock data with more entries for better coverage
const mockSkillBars: SkillBar[] = [
  { Stack: 'JavaScript', progressPercentage: 90 },
  { Stack: 'TypeScript', progressPercentage: 80 },
  { Stack: 'React', progressPercentage: 85 },
  { Stack: 'Node.js', progressPercentage: 75 },
  { Stack: 'CSS', progressPercentage: 70 },
  { Stack: 'HTML', progressPercentage: 95 },
];

describe('Proficiency Component', () => {
  it('renders correctly with skillBarsData', () => {
    const { getByText } = render(<Proficiency skillBarsData={mockSkillBars} />);

    mockSkillBars.forEach(skill => {
      expect(getByText(skill.Stack)).toBeInTheDocument();
      expect(getByText(`${skill.progressPercentage}%`)).toBeInTheDocument();
    });
  });
});
