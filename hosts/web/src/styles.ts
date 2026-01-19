import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const NotificationModal = styled.div<{ $variant: string }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ $variant }) => ($variant === 'success' ? '#48bb78' : '#4299e1')};
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
`;

export const NotificationTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const NotificationCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const AuthenticatedText = styled.span`
  color: #4a5568;
  font-weight: 500;
`;

export const SignInTrigger = styled.button`
  background: none;
  border: none;
  color: #4a5568;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font: inherit;
`;

export const SignInBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

export const SignInModal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const SignInCloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SignInTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

export const SignInErrorMessage = styled.div`
  color: #e53e3e;
  background-color: #fff5f5;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const SignInField = styled.div`
  margin-bottom: 1rem;
`;

export const SignInFieldLarge = styled.div`
  margin-bottom: 1.5rem;
`;

export const SignInLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
`;

export const SignInInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
`;

export const SignInSubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
`;

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const LogoMark = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.svg`
  color: #4299e1;
`;

export const BrandName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.2s ease;
`;

export const Quote = styled.div`
  font-style: italic;
  color: #718096;
  font-family: 'Playfair Display', serif;
  max-width: 400px;
  text-align: right;
`;

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 2rem;
`;
