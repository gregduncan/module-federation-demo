import { useState } from 'react';

import {
  AuthenticatedText,
  SignInBackdrop,
  SignInCloseButton,
  SignInErrorMessage,
  SignInField,
  SignInFieldLarge,
  SignInInput,
  SignInLabel,
  SignInModal,
  SignInSubmitButton,
  SignInTitle,
  SignInTrigger,
} from '../styles';

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is where you'd typically make an API call
    if (username === 'test' && password === 'test') {
      setError('');
      setIsOpen(false);
      setIsAuthenticated(true);
      setAuthenticatedUser(username);
      // Clear form fields
      setUsername('');
      setPassword('');
    } else {
      setError('Invalid username or password');
    }
  };

  if (isAuthenticated) {
    return <AuthenticatedText>Welcome, {authenticatedUser}!</AuthenticatedText>;
  }

  return (
    <>
      <SignInTrigger onClick={() => setIsOpen(true)}>Sign In</SignInTrigger>

      {isOpen && (
        <SignInBackdrop>
          <SignInModal>
            <SignInCloseButton onClick={() => setIsOpen(false)}>×</SignInCloseButton>

            <SignInTitle>Sign In</SignInTitle>

            <form onSubmit={handleSubmit}>
              {error && <SignInErrorMessage>{error}</SignInErrorMessage>}

              <SignInField>
                <SignInLabel>Username</SignInLabel>
                <SignInInput
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </SignInField>

              <SignInFieldLarge>
                <SignInLabel>Password</SignInLabel>
                <SignInInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </SignInFieldLarge>

              <SignInSubmitButton type="submit">Sign In</SignInSubmitButton>
            </form>
          </SignInModal>
        </SignInBackdrop>
      )}
    </>
  );
};

export default SignIn;
