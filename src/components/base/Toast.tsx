import React from 'react';
import {View} from 'react-native';
import ToastBase, {
  ErrorToast,
  InfoToast,
  SuccessToast,
  ToastConfig,
} from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Style} from '../../constants/style';

export const Toast: React.FC<any> = props => {
  const toastConfig: ToastConfig = {
    success: props => (
      <SuccessToast
        {...props}
        style={[
          {
            paddingVertical: 8,
            borderLeftColor: '#28a745',
            borderLeftWidth: 0,
            height: 'auto',
            backgroundColor: '#28a745',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 16,
          },
          Style.shadow_5,
        ]}
        renderLeadingIcon={() => (
          <View
            style={[
              {
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'center',
              },
              Style.shadow_3,
            ]}
          >
            <Icon name='check' size={30} solid color={'#28a745'} />
          </View>
        )}
        contentContainerStyle={{padding: 16, backgroundColor: 'transparent'}}
        text1Style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}
        text2Style={{fontSize: 13, color: '#FFF', fontWeight: 'bold'}}
        text2NumberOfLines={3}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        style={[
          {
            paddingVertical: 8,
            borderLeftColor: '#dc3545',
            borderLeftWidth: 0,
            height: 'auto',
            backgroundColor: '#dc3545',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 16,
          },
          Style.shadow_5,
        ]}
        renderLeadingIcon={() => (
          <View
            style={[
              {
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'center',
              },
              Style.shadow_3,
            ]}
          >
            <Icon name='times' size={30} solid color={'#dc3545'} />
          </View>
        )}
        contentContainerStyle={{padding: 16, backgroundColor: 'transparent'}}
        text1Style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}
        text2Style={{fontSize: 13, color: '#FFF', fontWeight: 'bold'}}
        text2NumberOfLines={3}
      />
    ),
    info: props => (
      <InfoToast
        {...props}
        style={[
          {
            paddingVertical: 8,
            borderLeftColor: '#007bff',
            borderLeftWidth: 0,
            height: 'auto',
            backgroundColor: '#007bff',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 16,
          },
          Style.shadow_5,
        ]}
        renderLeadingIcon={() => (
          <View
            style={[
              {
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'center',
              },
              Style.shadow_3,
            ]}
          >
            <Icon name='exclamation' size={30} solid color={'#007bff'} />
          </View>
        )}
        contentContainerStyle={{padding: 16, backgroundColor: 'transparent'}}
        text1Style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}
        text2Style={{fontSize: 13, color: '#FFF', fontWeight: 'bold'}}
        text2NumberOfLines={3}
      />
    ),
    notification: props => (
      <InfoToast
        {...props}
        style={[
          {
            paddingVertical: 8,
            borderLeftColor: '#6cc4f5',
            borderLeftWidth: 0,
            height: 'auto',
            backgroundColor: '#6cc4f5',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 16,
          },
          Style.shadow_5,
        ]}
        renderLeadingIcon={() => (
          <View
            style={[
              {
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'center',
              },
              Style.shadow_3,
            ]}
          >
            <Icon name='envelope' size={30} solid color={'#6cc4f5'} />
          </View>
        )}
        contentContainerStyle={{padding: 16, backgroundColor: 'transparent'}}
        text1Style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}
        text2Style={{fontSize: 13, color: '#FFF', fontWeight: 'bold'}}
        text2NumberOfLines={3}
      />
    ),
  };

  return <ToastBase position='top' config={toastConfig} />;
};
