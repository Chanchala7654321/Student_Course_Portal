import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  Link: ({ children }) => <a>{children}</a>,
}));

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to My Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
