import {useSelector} from 'react-redux';
import {Store} from './store';

export const isSplashShown = (): boolean => {
  const isSplashShown = useSelector(
    (state: Store) => state.derived.isSplashShown,
  );

  console.log(isSplashShown);
  return isSplashShown;
};

export const isSplashNotShown = (): boolean => {
  const isSplashShown = useSelector(
    (state: Store) => state.derived.isSplashShown,
  );

  console.log(isSplashShown);
  return !isSplashShown;
};
