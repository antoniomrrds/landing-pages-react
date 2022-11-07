import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
describe('<home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
