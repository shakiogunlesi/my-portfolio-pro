import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


const mockSkillBars = [
  { Stack: 'JavaScript', progressPercentage: '80' },
  { Stack: 'React', progressPercentage: '70' },
];

jest.mock('../portfolio', () => ({
  SkillBars: mockSkillBars,
}));

jest.mock('../components/DisplayLottie', () => jest.fn(() => <div>Mocked GreetingLottie</div>));

import { Proficiency }from './Proficiency'; // Correct for default export

describe('Proficiency Component', () => {
    it('renders nothing when SkillBars is undefined or not an array', () => {
      const { container } = render(<Proficiency skillBarsData={undefined} />);
      expect(container.firstChild).toBeNull();
  
      const { container: container2 } = render(<Proficiency skillBarsData={null as any} />);
      expect(container2.firstChild).toBeNull();
  
      const { container: container3 } = render(<Proficiency skillBarsData={[]} />);
      expect(container3.firstChild).toBeNull();
    });
  });
