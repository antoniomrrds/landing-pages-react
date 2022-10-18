import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'hello',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });

  expect(headingContainer).toHaveStyleRule('background', 'blue');

  expect(headingContainer).toMatchSnapshot();
});
