import React from 'react';
import Container from '../../components/Container';
import {Text} from 'react-native';

class Profile extends React.Component {
  render(): React.ReactNode {
    return (
      <Container safeArea>
        <Text>Profile</Text>
      </Container>
    );
  }
}

export default Profile;
