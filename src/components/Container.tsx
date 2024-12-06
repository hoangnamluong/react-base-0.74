import {SafeAreaView} from 'react-native-safe-area-context';
import {TComponent} from '../settings/type';
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  style?: ViewStyle;
  scrollable?: boolean; // Determines if it uses ScrollView
  safeArea?: boolean; // Determines if it wraps with SafeAreaView
  scrollProps?: ScrollViewProps; // Props for ScrollView
} & TComponent;

const Container: React.FC<Props> = ({
  children,
  safeArea,
  scrollProps,
  scrollable,
  style,
}) => {
  const Container = safeArea ? SafeAreaView : View;
  const Content = scrollable ? ScrollView : View;

  return (
    <Container style={[styles.container, style]}>
      <Content {...(scrollable ? scrollProps : {})} style={style}>
        {children}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Container;
