import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal as ModalNative,
  StyleSheet,
  ViewStyle,
  TouchableWithoutFeedback,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Style} from '../../constants/style';

type Props = {
  visible?: boolean;
  closeModal?: () => void;
  title?: string | (() => React.JSX.Element);
  content: string | (() => React.JSX.Element);
  footer?: string | (() => React.JSX.Element);
  selfManage?: boolean;
  contentContainerStyle?: ViewStyle;
  bodyContainerStyle?: ViewStyle;
  hideTitle?: boolean;
  titleStyle?: ViewStyle;
  titleTextStyle?: TextStyle;
  titleTextLight?: boolean;
  titleTextColor?: string;
  isPressMaskClose?: boolean;
  onShow?: () => void;
};

type States = {
  isOpenLocal: boolean;
};

class Modal extends React.Component<Props, States> {
  static instance: Modal | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpenLocal: false,
    };

    Modal.instance = this;
  }

  static open = () => {
    if (Modal.instance) Modal.instance.setState({isOpenLocal: true});
  };

  static close = () => {
    if (Modal.instance) Modal.instance.setState({isOpenLocal: false});
  };

  render(): React.ReactNode {
    const {
      isPressMaskClose = true,
      visible = true,
      closeModal,
      title = '',
      content = null,
      footer = null,
      selfManage = false,
      contentContainerStyle,
      bodyContainerStyle,
      hideTitle,
      titleStyle = {},
      titleTextStyle = {},
      titleTextLight = false,
      titleTextColor = null,
      onShow,
    } = this.props;

    const {isOpenLocal} = this.state;

    return (
      <ModalNative
        animationType='fade'
        transparent={true}
        visible={selfManage ? isOpenLocal : visible}
        onRequestClose={() => {
          if (selfManage && Modal.instance && !closeModal)
            Modal.instance.setState({isOpenLocal: false});
          else closeModal && closeModal();
        }}
        onShow={() => onShow && onShow()}
      >
        <View
          style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}
        >
          {isPressMaskClose ? (
            <TouchableWithoutFeedback
              onPress={() => {
                if (selfManage && Modal.instance && !closeModal)
                  Modal.instance.setState({isOpenLocal: false});
                else closeModal && closeModal();
              }}
            >
              <View style={styles.modalContainer} />
            </TouchableWithoutFeedback>
          ) : (
            <View style={styles.modalContainer} />
          )}
          <View
            style={[
              contentContainerStyle
                ? contentContainerStyle
                : styles.contentContainer,
              ,
              Style.shadow_3,
            ]}
          >
            {!hideTitle && (
              <View style={[styles.titleContainer, titleStyle]}>
                {typeof title == 'function' ? (
                  title()
                ) : (
                  <Text
                    style={[
                      titleTextStyle,
                      styles.title,
                      {
                        color: titleTextLight
                          ? '#fff'
                          : !!titleTextColor
                          ? titleTextColor
                          : '#333',
                      },
                    ]}
                  >
                    {title}
                  </Text>
                )}
                <TouchableOpacity
                  onPress={() => {
                    if (selfManage && Modal.instance && !closeModal)
                      Modal.instance.setState({isOpenLocal: false});
                    else closeModal && closeModal();
                  }}
                >
                  <Icon
                    name='closecircle'
                    size={25}
                    color={titleTextLight ? '#fff' : '#000'}
                  />
                </TouchableOpacity>
              </View>
            )}
            {typeof content == 'function' ? content() : <Text>{content}</Text>}
            {footer && typeof footer == 'function' ? (
              footer()
            ) : (
              <Text>{footer}</Text>
            )}
          </View>
        </View>
      </ModalNative>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: '85%',
    height: '85%',
    borderRadius: 10,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    gap: 8,
  },
});

export default Modal;
