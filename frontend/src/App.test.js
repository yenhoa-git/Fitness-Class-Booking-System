import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';

jest.mock('./axiosConfig', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));

test('renders a login link for visitors', () => {
  render(<AuthProvider><App /></AuthProvider>);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).not.toBeNull();
});
