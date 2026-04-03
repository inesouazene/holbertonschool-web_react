import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the h1 with text School Dashboard', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the login message in App-body', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();
  });

  test('renders the copyright text in App-footer', () => {
    render(<App />);
    const footerText = screen.getByText(/copyright \d{4} - holberton school/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders an img element with alt text', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });
});
