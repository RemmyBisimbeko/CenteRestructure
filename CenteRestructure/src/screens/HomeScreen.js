/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  BackHandler,
  Alert,
  ImageBackground,
} from 'react-native';

import {
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  Footer,
  FooterTab,
} from 'native-base';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import SplashScreen from 'react-native-splash-screen';

class HomeScreen extends Component {
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

  

  render() {
    return (
      <Fragment>
        <Header transparent androidStatusBarColor={Colors.light} noShadow>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Welcome')}>
              <Icon
                name="md-arrow-back"
                style={{color: Platform.OS === 'ios' ? '#1269B1' : '#1269B1'}}
              />
            </Button>
          </Left>
          <Body>
            <Title
              style={{color: Platform.OS === 'ios' ? '#1269B1' : '#1269B1'}}>
              Home
            </Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Restructure')}>
              <Icon
                name="paper"
                style={{color: Platform.OS === 'ios' ? '#1269B1' : '#1269B1'}}
              />
            </Button>
          </Right>
        </Header>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.logoContainer}>
                <Image
                  style={{width: '100%', height: 320, paddinging: 20}}
                  source={require('../images/mapeeraHouse.jpg')}
                />

              </View>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Popular Products</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: Colors.white,
                    marginHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    shadowOpacity: 0.5,
                  }}
                  onPress={()=>this.props.navigation.navigate("Restructure")}>
                  <Image
                    source={require('../images/CenteXpress.png')}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      height: 100,
                      width: '100%',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      padding: 10,
                      fontWeight: 'bold',
                      padding: 10,
                      fontWeight: 'bold',
                    }}>
                    Restructure
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: Colors.white,
                    marginHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    shadowOpacity: 0.5,
                  }}
                  onPress={()=>this.props.navigation.navigate("Help")}>
                  <Image
                    source={require('../images/CenteXpress.png')}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      height: 100,
                      width: '100%',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      padding: 10,
                      fontWeight: 'bold',
                      padding: 10,
                      fontWeight: 'bold',
                    }}>
                    CenteXpress
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: Colors.white,
                    marginHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    shadowOpacity: 0.5,
                  }}
                  onPress={()=>this.props.navigation.navigate("Help")}>
                  <Image
                    source={require('../images/Socialmediatax.jpg')}
                    style={{
                      height: 100,
                      width: '100%',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      padding: 10,
                      fontWeight: 'bold',
                    }}>
                    CenteMobile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: Colors.white,
                    marginHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    shadowOpacity: 0.5,
                  }}
                  onPress={()=>this.props.navigation.navigate("Help")}>
                  <Image
                    source={require('../images/aviation.png')}
                    style={{
                      height: 100,
                      width: '100%',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      padding: 10,
                      fontWeight: 'bold',
                    }}>
                    Cente Swift
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: Colors.white,
                    marginHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    shadowOpacity: 0.5,
                  }}
                  onPress={()=>this.props.navigation.navigate("Help")}>
                  <Image
                    source={require('../images/bankruptcy.png')}
                    style={{
                      height: 100,
                      width: '100%',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      padding: 10,
                      fontWeight: 'bold',
                    }}>
                    Mobile Loan
                  </Text>
                </TouchableOpacity>
              </ScrollView>
                    
            </View>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: Colors.white}}>
            <Button
              vertical
              active
              style={{backgroundColor: Colors.white}}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="home" style={{color: '#1269B1'}} />
              <Text style={{fontSize: 10, color: '#1269B1'}}>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Restructure')}>
              <Icon name="paper" style={{color: 'grey'}} />
              <Text style={{fontSize: 10, color: 'grey'}}>Restructure</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Help')}>
              <Icon name="more" style={{color: 'grey'}} />
              <Text style={{fontSize: 10, color: 'grey'}}>Help</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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
    backgroundColor: Colors.lighter,
  },
  caseContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#ecf0f1',
    height: 350,
  },
  caseDescription: {
    marginTop: 8,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '400',
    color: '#000000',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: Colors.lighter
  },
  sectionTitle: {
    //fontFamily: "SFUIText",
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginStart: 10
  },
  sectionDescription: {
    //fontFamily: "SFUIText",
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'justify',
    marginBottom: 20,
  },
  logoContainer: {
    // marginBottom: 150,
    alignContent: 'center',
    alignItems: 'center',
  },
  CaseImage: {
    width: 180,
    height: 200,
    opacity: 0.38,
  },
  highlight: {
    //fontFamily: "SFUIText",
    fontWeight: '700',
    fontStyle: 'italic',
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

export default HomeScreen;
