import {gestureHandlerRootHOC as gestureHandlerRootHOCBase} from 'react-native-gesture-handler';
import withNavigationBase from './withNavigation';

type Option = {
  withGestureHandler?: boolean;
  withNavigation?: boolean;
};

const withComponentEnhancer = (
  Component: any,
  {withNavigation, withGestureHandler}: Option,
) => {
  let EnhancedComponent = Component;

  if (withNavigation) {
    EnhancedComponent = withNavigationBase(EnhancedComponent);
  }

  if (withGestureHandler) {
    EnhancedComponent = gestureHandlerRootHOCBase(EnhancedComponent);
  }

  return EnhancedComponent;
};

export default withComponentEnhancer;
