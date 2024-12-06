import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NavigationComponentProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const withNavigation = (Component: any) => {
  return (props: any) => {
    const navigation: StackNavigationProp<ParamListBase> =
      useNavigation<StackNavigationProp<ParamListBase>>();

    return <Component {...props} navigation={navigation} />;
  };
};

export default withNavigation;
