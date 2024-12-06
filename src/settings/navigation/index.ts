import {createStaticNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {isSplashNotShown, isSplashShown} from '../../app/hooks';

import withComponentEnhancer from '../../components/HOC/withComponentEnhancer';
import Auth from '../../screens/Auth';
import Splash from '../../screens/Splash';
import {MainBottomTab} from './etc';
import screens from './screens';

const RootStack = createStackNavigator({
  screenOptions: {
    headerShown: false,
    animation: 'fade',
  },
  groups: {
    [screens.Main]: {
      if: isSplashShown,
      screens: {
        [screens.MainTab]: {
          screen: MainBottomTab,
        },
        [screens.Login]: {
          screen: withComponentEnhancer(Auth, {
            withGestureHandler: true,
            withNavigation: true,
          }),
        },
      },
    },
    [screens.BeforeSplash]: {
      screens: {
        [screens.Splash]: {
          if: isSplashNotShown,
          screen: withComponentEnhancer(Splash, {
            withGestureHandler: true,
            withNavigation: true,
          }),
        },
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
