import {
  BrandName,
  BrandRow,
  HeaderInner,
  HeaderWrapper,
  LogoIcon,
  LogoLink,
  LogoMark,
  NavLink,
  NavList,
  Quote,
} from '../styles';
import SignIn from './sign-in';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <BrandRow>
          <LogoLink to="/">
            <LogoMark>
              <LogoIcon
                fill="none"
                height="32"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="32"
              >
                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
              </LogoIcon>
              <BrandName>ThreadTales</BrandName>
            </LogoMark>
          </LogoLink>
          <nav>
            <NavList>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/catalogue">Catalogue</NavLink>
              </li>
              <li>
                <SignIn />
              </li>
            </NavList>
          </nav>
        </BrandRow>

        <Quote>"Life is too short to wear boring clothes!"</Quote>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
