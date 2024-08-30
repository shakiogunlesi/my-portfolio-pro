import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockProjects = [
  { name: 'Project 1', description: 'Description 1', link: 'http://example.com' },
  { name: 'Project 2', description: 'Description 2', link: 'http://example.com' },
];

jest.mock('../portfolio', () => ({
  projects: mockProjects,
}));

jest.mock('../components/ProjectsCard', () => ({ name }: { name: string }) => (
  <div>{name}</div>
));

import { Projects } from './Projects';

describe('Projects Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Projects />);
    expect(getByText('Project 1')).toBeInTheDocument();
    expect(getByText('Project 2')).toBeInTheDocument();
  });
});
