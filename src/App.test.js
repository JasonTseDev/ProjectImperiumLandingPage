import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project Imperium: The Ultimate Zomboid Playground/i);
  expect(linkElement).toBeInTheDocument();
});
