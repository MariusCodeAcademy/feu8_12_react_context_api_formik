import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Wrap from '../../styled/Wrap.styled';

const HeaderContainer = styled(Wrap)`
  display: flex;
  gap: 15px;
`;

const Logo = styled(Link)`
  font-size: 25px;
  padding: 0.2em 0;
`;

export default function Header() {
  return (
    <HeaderContainer as={'header'}>
      <Logo to={'/'}>OurLogo</Logo>
      <nav>
        <a href='' className='navLink'>
          link
        </a>
      </nav>
    </HeaderContainer>
  );
}
