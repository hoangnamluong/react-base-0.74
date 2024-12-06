import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const navigateTo = (
  navigator: StackNavigationProp<ParamListBase>,
  screen: string,
  param: any,
) => {
  //@ts-ignore
  return navigator.navigate(screen, param);
};

const navigatePush = (
  navigator: StackNavigationProp<ParamListBase>,
  screen: string,
  param: any,
) => {
  return navigator.push(screen, param);
};

const navigateGoBack = (navigator: StackNavigationProp<ParamListBase>) => {
  return navigator.goBack();
};

const navigatePop = (
  navigator: StackNavigationProp<ParamListBase>,
  screen: string,
  param: any,
) => {
  return navigator.pop();
};

export {navigateGoBack, navigateTo, navigatePush, navigatePop};
