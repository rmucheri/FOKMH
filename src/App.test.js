import { render } from '@testing-library/react';
import App from './App';

// App includes its own BrowserRouter, so render it directly.
test('renders the app without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
