import {StyleSheet, TextProps} from 'react-native';
import {Text as TextNative} from 'react-native';

type Props = TextProps & {
  variant?: 'regular' | 'bold' | 'italic';
};

const Text: React.FC<Props> = props => {
  return (
    <TextNative
      {...props}
      style={[props.style, style[props.variant || 'regular'], style.text]}
    >
      {props.children}
    </TextNative>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
  },
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default Text;
