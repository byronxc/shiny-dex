import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shiny dex', () => {
  render(<App />);
  const linkElement = screen.getByText("Shiny Dex");
  expect(linkElement).toBeInTheDocument();
});
