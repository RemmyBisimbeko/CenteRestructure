import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text, StatusBar,
  TouchableOpacity, BackHandler, Alert, Linking
} from 'react-native';

import {
  Header,
  Left,
  Button,
  Title,
  Icon,
  Body,
  Right,
  Form,
  Item,
  Label,
  Input,
  Thumbnail,
  Fab,
  Tab,
  Tabs, Footer, FooterTab
} from 'native-base';

import {Colors} from 'react-native/Libraries/NewAppScreen';
class Faqs extends Component {
  render() {
    return (
      <Fragment>
         <StatusBar barStyle="dark-content" />
         <SafeAreaView>
           <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text>Frequently Asked Questions</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

class Support extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
         <SafeAreaView>
           <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>

                <View style={styles.sectionTop}>
                  <Text style={styles.sectionTitle}>About Us</Text>
                  <Text style={styles.sectionDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={()=>{ Linking.openURL("https://www.centenarybank.co.ug")}}>
                  <View style={styles.sectionTop}>
                    <Text style={styles.sectionTitle}>Terms and Conditions</Text>
                    <Text style={styles.sectionDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>{ Linking.openURL("https://www.centenarybank.co.ug")}}>
                  <View style={styles.sectionTop}>
                    <Text style={styles.sectionTitle}>Privacy Policy</Text>
                    <Text style={styles.sectionDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                  </View>
                </TouchableOpacity>
                
                <View style={styles.sectionTop}>
                  <Text style={styles.sectionTitle}>Contact us</Text>
                  <Text style={styles.sectionDescription}>
                    +256 701 234 567
                  </Text>
                  <Text style={styles.sectionDescription}>
                    help@centenarybank.co.ug
                  </Text>
                  <Text style={styles.sectionDescription}>
                    www.centenarybank.co.ug
                  </Text>
                </View>

                <View style={styles.sectionTop}>
                  <Text style={styles.sectionFollow}>Follow us on Social Media</Text>
                </View>

                <View style={styles.sectionTop}>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between", alignContent:"center", paddingBottom:20}}>
                    <TouchableOpacity 
                      style={{width:30, height:30, marginHorizontal:10, marginBottom:5}}
                      onPress={()=>{ Linking.openURL("https://twitter.com/")}}>
                        <Image
                            style={{ width: "100%", height:"100%"}}
                            source={require('../images/Icons/Twitter.png')}
                          />
                    </TouchableOpacity>  

                    <TouchableOpacity 
                      style={{width:30, height:30, marginHorizontal:10, marginBottom:5}}
                      onPress={()=>{ Linking.openURL("https://www.facebook.com/")}}>
                        <Image
                            style={{ width: "100%", height:"100%"}}
                            source={require('../images/Icons/Facebook.png')}
                          />
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={{width:30, height:30, marginHorizontal:10, marginBottom:5}}
                      onPress={()=>{ Linking.openURL("https://instagram.com")}}>
                        <Image
                            style={{ width: "100%", height:"100%"}}
                            source={require('../images/Icons/Instagram.png')}
                          />
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={{width:30, height:30, marginHorizontal:10, marginBottom:5}}
                      onPress={()=>{ Linking.openURL("https://youtube.com")}}>
                        <Image
                            style={{ width: "100%", height:"100%"}}
                            source={require('../images/Icons/Youtube.png')}
                          />
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={{width:30, height:30, marginHorizontal:10, marginBottom:5}}
                      onPress={()=>{ Linking.openURL("https://linkedin.com")}}>
                        <Image
                            style={{ width: "100%", height:"100%"}}
                            source={require('../images/Icons/Linkedin.png')}
                          />
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={{width:30, height:30, marginHorizontal:10, marginBottom:5}}
                      onPress={()=>{ Linking.openURL("https://web.whatsapp.com")}}>
                        <Image
                            style={{ width: "100%", height:"100%"}}
                            source={require('../images/Icons/WhatsApp.png')}
                          />
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={{width:30, height:30, marginHorizontal:10, marginBottom:5}}
                      onPress={()=>{ Linking.openURL("https://www.centenarybank.co.ug")}}>
                        <Image
                            style={{ width: "100%", height:"100%"}}
                            source={require('../images/Icons/Dribbble.png')}
                          />
                    </TouchableOpacity>
                  </View>
                </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

class HelpScreen extends Component {
  // get uid() {
  //   return (firebase.auth().currentUser || {}).uid;
  // }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  goBack = () => {
    this.props.navigation.navigate('Home');
  };

  handleBackPress = () => {
    this.goBack(); // works best when the goBack is async
    return true;
  };

  render() {
    return (
      <Fragment>
        <Header transparent androidStatusBarColor={Colors.light} noShadow>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon
                name="md-arrow-back"
                style={{color: Platform.OS === 'ios' ? '#1269B1' : '#1269B1'}}
              />
            </Button>
          </Left>

          <Body>
            <Title
              style={{color: Platform.OS === 'ios' ? '#1269B1' : '#1269B1'}}>
              Help
            </Title>
          </Body>

          <Right />
        </Header>

        <Tabs
          transparent
          activeTabStyle={{backgroundColor: '#1269B1'}}
          tabBarUnderlineStyle={{backgroundColor: '#1269B1'}}>
          <Tab
            heading="Common Questions"
            style={{fontSize: 8}}
            tabStyle={{backgroundColor: Colors.white}}
            activeTabStyle={{backgroundColor: Colors.white}}
            textStyle={{color: 'grey'}}
            activeTextStyle={{color: '#1269B1', fontSize: 15}}>
            <Faqs />
          </Tab>
          <Tab
            heading="Support"
            style={{fontSize: 8}}
            tabStyle={{backgroundColor: Colors.white}}
            activeTabStyle={{backgroundColor: Colors.white}}
            textStyle={{color: 'grey'}}
            activeTextStyle={{color: '#1269B1', fontSize: 15}}>
            <Support />
          </Tab>
        </Tabs>

        <Footer>
          <FooterTab style={{backgroundColor: Colors.white}}>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color: 'grey'}} />
              <Text style={{fontSize: 10, color: 'grey'}}>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Restructure')}>
              <Icon name="paper" style={{color: 'grey'}} />
              <Text style={{fontSize: 10, color: 'grey'}}>Restructure</Text>
            </Button>
            <Button
              vertical
              active
              style={{backgroundColor: Colors.white}}
              onPress={() => this.props.navigation.navigate('Help')}>
              <Icon active name="more" style={{color: '#1269B1'}} />
              <Text style={{fontSize: 10, color: '#1269B1'}}>Help</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionTop: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  MoreTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
    //fontFamily: "SFUIText",
  },
  sectionTitle: {
    //fontFamily: "SFUIText",
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  MoreDescription: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '400',
    alignItems: 'center', 
    justifyContent: 'center', 
    //fontFamily: "SFUIText",
  },
  sectionDescription: {
    //fontFamily: "SFUIText",
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'justify', 
    paddingBottom: 10
  },
  sectionFollow: {
    //fontFamily: "SFUIText",
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center', 
  },
  highlight: {
    //fontFamily: "SFUIText",
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    //fontFamily: "SFUIText",
  },
});

export default HelpScreen;

