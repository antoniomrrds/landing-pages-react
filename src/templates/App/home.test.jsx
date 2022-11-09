import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
