import React from 'react';
import {
  Alert,
  Dimensions,
  DimensionValue,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {Store} from '../../app/store';
import {imgs} from '../../assets';
import Container from '../../components/Container';
import {NavigationComponentProps} from '../../components/HOC/withNavigation';
import {setIsSplashShown} from '../../features/derivedSlice';
import Text from '../../components/base/Text';
import Modal from '../../components/base/Modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isEqual} from 'lodash';

type Props = NavigationComponentProps & {
  isSplashShown: boolean;
  setIsSplashShown: (value: boolean) => void;
};

type States = {
  status: string;
  progress: number;
};

const {width, height} = Dimensions.get('screen');

class Splash extends React.Component<Props, States> {
  private interval: NodeJS.Timeout | null = null;
  private timeout: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      status: 'Kiểm tra phiên bản',
      progress: 0,
    };
  }

  componentDidMount(): void {
    Modal.open();
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<States>,
    snapshot?: any,
  ): void {
    if (!isEqual(prevState.progress, this.state.progress)) {
      console.log(this.state.progress);
    }
  }

  componentWillUnmount(): void {
    this.clearInterval('interval');
    this.clearInterval('timeout');
  }

  updateApp = () => {
    Modal.close();
    this.setState({status: 'Cập nhật ứng dụng ...'});

    this.interval = setInterval(() => {
      this.setState((prev: States) => {
        if (prev.progress >= 100) {
          this.clearInterval('interval');
          this.closeModal();

          return {...prev, status: 'Cập nhật hoàn tất'};
        }

        return {
          ...prev,
          progress: prev.progress + 1,
        };
      });
    }, 20);
  };

  clearInterval = (type: 'interval' | 'timeout') => {
    if (type === 'interval' && this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    if (type === 'timeout' && this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  };

  closeModal = () => {
    Modal.close();
    this.timeout = setTimeout(() => {
      this.props.setIsSplashShown(true);
    }, 1000);
  };

  render(): React.ReactNode {
    const {status, progress} = this.state;

    return (
      <>
        <Container safeArea style={style.container}>
          <Image
            source={imgs.brand}
            style={style.img}
            resizeMethod='resize'
            resizeMode='contain'
          />
          <Text style={style.updateSubtitle}>{status}</Text>
          <View style={style.progressBarContainer}>
            <View style={style.progressBarMask}></View>
            <View
              style={[
                style.progressBar,
                {width: (progress + '%') as DimensionValue},
              ]}
            ></View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 64,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={style.logoSubtitle}>Powered By</Text>
            <Image
              source={imgs.logoIcon}
              style={style.logo}
              resizeMethod='resize'
              resizeMode='contain'
            />
          </View>
        </Container>
        <Modal
          selfManage
          closeModal={this.closeModal}
          hideTitle
          contentContainerStyle={style.modalContainer}
          content={() => (
            <>
              <View style={style.modalTitleContainer}>
                <Image
                  source={imgs.logo}
                  style={{width: '80%', height: 150}}
                  resizeMethod='resize'
                  resizeMode='contain'
                />
              </View>
              <TouchableOpacity
                style={style.modalCloseContainer}
                onPress={this.closeModal}
              >
                <View style={style.modalCloseIcon}>
                  <Icon name='times' color={'#000'} size={25} />
                </View>
              </TouchableOpacity>
              <Text style={style.updateModalTitle} variant='bold'>
                Cập nhật
              </Text>
              <Text style={style.updateModalSubtitle}>
                Ứng dụng có bản cập nhật mới. Bạn có muốn cập nhật ?
              </Text>
              <TouchableOpacity
                style={style.confirmButton}
                onPress={this.updateApp}
              >
                <Text style={{color: '#374da0', fontSize: 16}} variant='bold'>
                  Xác nhận
                </Text>
              </TouchableOpacity>
            </>
          )}
        />
      </>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: width - 75,
    height: 150,
  },

  logo: {
    width: 25,
    height: 25,
  },

  logoSubtitle: {
    color: '#374da0',
    fontSize: 10,
    marginBottom: 8,
  },

  updateSubtitle: {
    color: '#999',
    fontSize: 10,
  },

  progressBarContainer: {
    width: width - 200,
    height: 6,
    marginTop: 8,
    marginBottom: 52,
  },

  progressBarMask: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  progressBar: {
    position: 'absolute',
    backgroundColor: '#374da0',
    height: '100%',
    borderRadius: 8,
    top: 0,
    left: 0,
  },

  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: 'auto',
    borderRadius: 10,
  },

  modalTitleContainer: {
    width: '100%',
    backgroundColor: '#e6e9f6',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalCloseContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },

  modalCloseIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  updateModalTitle: {
    paddingHorizontal: 32,
    marginVertical: 8,
    color: '#333',
    fontSize: 16,
  },

  updateModalSubtitle: {
    paddingHorizontal: 32,
    color: '#555',
  },

  confirmButton: {
    width: 150,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginRight: 8,
    alignSelf: 'flex-end',
  },
});

const mapStateToProps = (state: Store) => ({
  isSplashShown: state.derived.isSplashShown,
});

const mapDispatchToProps = {
  setIsSplashShown,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
