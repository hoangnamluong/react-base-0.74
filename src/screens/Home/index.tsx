import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/Container';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <Container safeArea>
        <Text>Home</Text>
      </Container>
    );
  }
}

export default Home;
