import { renderWithRouter } from './test-utils';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import Body from '../Body';
import MOCK_RESTAURANTS from './mocks/resturants.json';
import '@testing-library/jest-dom';

// ✅ Mock fetch to return your provided JSON
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RESTAURANTS),
  })
);

// ✅ Mock Internet Status to be online
jest.mock('../../hooks/useInternetStatus', () => ({
  __esModule: true,
  default: () => true,
}));

it('filters restaurant list based on search input', async () => {
  renderWithRouter(<Body />);

  // Wait for any restaurant to appear (like "Burger King")
  await waitFor(() => {
    expect(screen.getByText(/burger king/i)).toBeInTheDocument();
  });

  // Search input (make sure your SearchBar input has this placeholder)
  const searchInput = screen.getByPlaceholderText("Search for a restaurant");

  // Type into the search box
  fireEvent.change(searchInput, { target: { value: 'mcdonald' } });

  // Assert that McDonald's is shown, and others like Burger King are not
  await waitFor(() => {
    expect(screen.getByText(/mcdonald's/i)).toBeInTheDocument();
    expect(screen.queryByText(/burger king/i)).not.toBeInTheDocument();
  });
});
