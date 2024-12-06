import React from 'react';
import Container from '../../components/Container';
import {Text} from 'react-native';

class Auth extends React.Component {
  render(): React.ReactNode {
    return (
      <Container safeArea>
        <Text>Login</Text>
      </Container>
    );
  }
}

export default Auth;
