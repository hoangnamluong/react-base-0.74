import React from 'react';
import Container from '../../components/Container';
import {Text} from 'react-native';

class Notification extends React.Component {
  render(): React.ReactNode {
    return (
      <Container safeArea>
        <Text>Notification</Text>
      </Container>
    );
  }
}

export default Notification;
