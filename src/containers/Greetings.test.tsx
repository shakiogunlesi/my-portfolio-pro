import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Greetings } from './Greetings';
import { greetings } from '../portfolio';

jest.mock('../components/Navigation', () => {
  const MockNavigation = () => <nav>Mocked Navigation</nav>;
  
  MockNavigation.displayName = 'MockNavigation';
  
  return MockNavigation;
});

jest.mock('../components/SocialLinks', () => {
  const MockSocialLinks = () => <div>Mocked SocialLinks</div>;
  
  MockSocialLinks.displayName = 'MockSocialLinks';
  
  return MockSocialLinks;
});


jest.mock('next/image', () => {
  const MockImage = (props: any) => <div {...props} alt="Mocked Image" />;
  
  MockImage.displayName = 'MockImage';
  
  return MockImage;
});

describe('Greetings Component', () => {
  it('renders the title and description correctly', () => {
    render(<Greetings />);
    
    const titleElement = screen.getByText(new RegExp(greetings.title, 'i'));
    expect(titleElement).toBeInTheDocument();

    if (greetings.description) {
      const descriptionElement = screen.getByText(new RegExp(greetings.description, 'i'));
      expect(descriptionElement).toBeInTheDocument();
    }
  });

  it('renders the resume button if resumeLink is provided', () => {
    render(<Greetings />);
    
    const linkElement = screen.getByRole('link', { name: /see my resume/i });
    
    if (greetings.resumeLink) {
      expect(linkElement).toBeInTheDocument();
    } else {
      expect(linkElement).not.toBeInTheDocument();
    }
  });

  it('renders the profile image', () => {
    render(<Greetings />);
    
    const imageElement = screen.getByAltText(/mocked image/i);
    
    expect(imageElement).toBeInTheDocument();
  });
});
