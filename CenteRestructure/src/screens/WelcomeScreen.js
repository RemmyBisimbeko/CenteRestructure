/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  BackHandler,
} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';

import {Form, Input, Label, Item, Thumbnail, Button} from 'native-base';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
    // SplashScreen.hide();
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />

        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}

        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            alignContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end'
          }}
          source={require('../images/launchScreen.png')}>
          <Image
            style={{
              width: '60%',
              height: '30%',
              marginBottom: 250, 
              paddingTop: 50
            }}
            source={require('../images/bm-transparent.png')}
          />

          <Text style={styles.sectionDescription}>
            <Text style={styles.highlight}>Simplified Access to the Bank</Text>
          </Text>
          <Button
            transparent
            block
            large
            style={{
              borderRadius: 20,
              marginHorizontal: 20,
              backgroundColor: '#bacf32',
            }}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.loginHighlight}>CONTINUE</Text>
          </Button>

            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}> Restructure your Loan</Text>
            </Text>
        </ImageBackground>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  appTitle: {
    width: 151.3,
    height: 30.7,
    // fontFamily: "Circular",
    fontSize: 25,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -1,
    textAlign: 'left',
    color: '#000000',
  },
  body: {
    backgroundColor: Colors.white,
    alignContent: 'stretch',
    alignItems: 'stretch',
  },
  sectionContainer: {
    paddingHorizontal: 24,
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    //fontFamily: "SFUIText",
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    //fontFamily: "SFUIText",
    marginTop: 5,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    padding: 20,
  },
  loginHighlight: {
    //fontFamily: "SFUIText",
    fontWeight: '700',
    color: Colors.white,
  },
  loginDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
    padding: 20,
  },
  highlight: {
    //fontFamily: "SFUIText",
    fontWeight: '700',
    padding: 30,
    color: Colors.white,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default WelcomeScreen;
