import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/Home';
import Notification from '../../screens/Notification';
import Profile from '../../screens/Profile';
import screens from './screens';
import withComponentEnhancer from '../../components/HOC/withComponentEnhancer';

export const MainBottomTab = createBottomTabNavigator({
  screenOptions: ({route}) => ({
    headerShown: false,
    animation: 'fade',
    tabBarIcon: ({focused, color, size}) => {
      let iconName = '';

      switch (route.name) {
        case screens.Home:
          iconName = focused ? 'home' : 'home-outline';
          break;
        case screens.Profile:
          iconName = focused ? 'person' : 'person-outline';
          break;
        case screens.Notication:
          iconName = focused ? 'notifications' : 'notifications-outline';
          break;
      }

      return <Icon name={iconName} color={color} size={size - 5} />;
    },
    tabBarStyle: {
      height: 70,
    },
    tabBarItemStyle: {
      height: 70,
      alignItems: 'center',
      flexDirection: 'row',
    },
    // tabBarInactiveTintColor: '#333',
    // tabBarActiveTintColor: 'red',
  }),
  screens: {
    [screens.Home]: withComponentEnhancer(Home, {
      withGestureHandler: true,
      withNavigation: true,
    }),
    [screens.Profile]: withComponentEnhancer(Profile, {
      withGestureHandler: true,
      withNavigation: true,
    }),
    [screens.Notication]: {
      screen: withComponentEnhancer(Notification, {
        withGestureHandler: true,
        withNavigation: true,
      }),
      options: {
        tabBarBadge: 3,
        tabBarBadgeStyle: {
          position: 'absolute',
          top: -8,
          right: -8,
        },
      },
    },
  },
});
