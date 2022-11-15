import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link ', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should render open in a new tab ', () => {
    renderTheme(
      <MenuLink link="http://localhost" newtab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('Snapshot component MenuLink ', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newtab={true}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});