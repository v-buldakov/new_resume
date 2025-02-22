import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Samuil Shenderovich/i);
  expect(linkElement).toBeInTheDocument();
});

test('check experience', () => {
  render(<App />);
  const company = screen.getAllByText(/Bad wolf/);
  expect(company.length).toBeGreaterThan(1);
})