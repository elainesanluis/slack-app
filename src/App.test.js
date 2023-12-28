import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import usePost from './hooks/usePost';

// Mock the usePost hook
jest.mock('./hooks/usePost');

// Provide a mock implementation for usePost
usePost.mockImplementation(() => ({
  res: { data: {} },
  errors: [],
  handleSubmit: jest.fn(),
}));

test('Successful Login Submission', async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ee@sample.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: '12341234' } });

  fireEvent.click(screen.getByText('Sign In'));

  await waitFor(() => {
    expect(window.location.pathname).toBe('/app');
  });
});

test('Error Messages Displayed for Invalid Login', async () => {
  // Mock the handleSubmit function to simulate an API error
  usePost.mockImplementation(() => ({
    res: { data: {} },
    errors: ['Invalid email address', 'Password must be at least 6 characters'],
    handleSubmit: jest.fn(),
  }));

  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalid_email' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'short' } });

  fireEvent.click(screen.getByText('Sign In'));

  await waitFor(() => {
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
  });
});
