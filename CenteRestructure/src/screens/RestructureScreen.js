import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  BackHandler,
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
  Input,
  Tab,
  Tabs,
  Footer, FooterTab, Textarea
} from 'native-base';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class Restructure extends Component {
  constructor(props) {
    super(props);
  //   var user = firebase.auth().currentUser;

  //   if (user != null) {
  //     uid = user.uid;
  //     console.log(user.uid);

  //   this.ref = firebase
  //     .firestore()
  //     .collection('paymentinfo')
  //     .doc(user.uid);
  //   this.state = {
  //     name: '',
  //     cardnumber: '',
  //     cvc: '',
  //     expirationdate: '',
  //     address: '',
  //   };
  // }
}
    
  // name(value) {
  //   this.setState({name: value});
  // }

  // cardnumber(value) {
  //   this.setState({cardnumber: value});
  // }

  // cvc(value) {
  //   this.setState({cvc: value});
  // }

  // expirationdate(value) {
  //   this.setState({expirationdate: value});
  // }

  // address(value) {
  //   this.setState({address: value});
  // }

  // payCardHandler() {
  //   this.ref.set({
  //     name: this.state.name,
  //     cardnumber: this.state.cardnumber,
  //     cvc: this.state.cvc,
  //     expirationdate: this.state.expirationdate,
  //     address: this.state.address,
  //   });

  //   this.setState({
  //     name: '',
  //     cardnumber: '',
  //     cvc: '',
  //     expirationdate: '',
  //     address: '',
  //   });
  // }

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
                <Form>
                  <Item floatingLabel rounded style={{borderRadius: 20}}>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      // value={this.state.name}
                      // onChangeText={name => this.setState({name})}
                      placeholder="Name"
                    />
                  </Item>

                  <Item floatingLabel rounded style={{borderRadius: 20}}>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      // value={this.state.cardnumber}
                      // onChangeText={cardnumber => this.setState({cardnumber})}
                      placeholder="Account Number"
                    />
                  </Item>

                  <Item floatingLabel rounded style={{borderRadius: 20}}>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      // value={this.state.cvc}
                      // onChangeText={cvc => this.setState({cvc})}
                      placeholder="RIM Number"
                    />
                  </Item>

                  <Item floatingLabel rounded style={{borderRadius: 20}}>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      // value={this.state.expirationdate}
                      // onChangeText={expirationdate =>
                        // this.setState({expirationdate})
                      // }
                      placeholder="Phone Number"
                    />
                  </Item>

                  <Item floatingLabel rounded style={{borderRadius: 20}}>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      // value={this.state.expirationdate}
                      // onChangeText={expirationdate =>
                        // this.setState({expirationdate})
                      // }
                      placeholder="Loan Officer"
                    />
                  </Item>

                  <Item floatingLabel rounded style={{borderRadius: 20}}>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      // value={this.state.expirationdate}
                      // onChangeText={expirationdate =>
                        // this.setState({expirationdate})
                      // }
                      placeholder="Email Address"
                    />
                  </Item>

                  <Textarea 
                    rowSpan={5}
                    bordered rounded
                    style={{borderRadius:20, marginTop: 10}}
                    placeholder="Reason for Resructure in Detail..."
                    // value={this.state.reason}
                    // onChangeText={(text) => this.reason(text)}
                  />

                  <Button
                    transparent
                    block
                    large
                    style={{borderRadius: 20, backgroundColor: '#bacf32', marginTop: 20}}
                    // disabled={!this.state.cardnumber.length}
                    onPress={this.payCardHandler}>
                    <Text style={styles.loginHighlight}>SUBMIT</Text>
                  </Button>
                </Form>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

class Faqs extends Component {
  constructor() {
    super();
    };

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

class RestructureScreen extends Component {
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
    this.props.navigation.navigate('HomeScreen');
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
                style={{color: Platform.OS === 'ios' ? '#bacf32' : '#bacf32'}}
              />
            </Button>
          </Left>

          <Body>
            <Title
              style={{color: Platform.OS === 'ios' ? '#bacf32' : '#bacf32'}}>
              Loan
            </Title>
          </Body>

          <Right />
        </Header>

        <Tabs
          transparent
          activeTabStyle={{backgroundColor: '#bacf32'}}
          tabBarUnderlineStyle={{backgroundColor: '#bacf32'}}>
          <Tab
            heading="Restructure"
            style={{fontSize: 8}}
            tabStyle={{backgroundColor: Colors.white}}
            activeTabStyle={{backgroundColor: Colors.white}}
            textStyle={{color: 'grey'}}
            activeTextStyle={{color: '#bacf32', fontSize: 15}}>
            <Restructure />
          </Tab>
          <Tab
            heading="FAQs"
            style={{fontSize: 8}}
            tabStyle={{backgroundColor: Colors.white}}
            activeTabStyle={{backgroundColor: Colors.white}}
            textStyle={{color: 'grey'}}
            activeTextStyle={{color: '#bacf32', fontSize: 15}}>
            <Faqs />
          </Tab>
        </Tabs>

        <Footer>
          <FooterTab style={{backgroundColor: Platform.OS === 'ios' ? Colors.white : '#bacf32'}}>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color: Platform.OS === 'ios' ? 'grey' : Colors.lighter}} />
              <Text style={{fontSize: 10, color: Platform.OS === 'ios' ? 'grey' : Colors.lighter}}>Home</Text>
            </Button>
            <Button
              vertical
              active
              style={{backgroundColor: Platform.OS === 'ios' ? Colors.white : '#bacf32'}}
              onPress={() => this.props.navigation.navigate('Restructure')}>
              <Icon active name="paper" style={{color: Platform.OS === 'ios' ? '#bacf32' : Colors.white}} />
              <Text style={{fontSize: 10, color: Platform.OS === 'ios' ? '#bacf32' : Colors.white}}>Restructure</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Help')}>
              <Icon name="more" style={{color: Platform.OS === 'ios' ? 'grey' : Colors.lighter}} />
              <Text style={{fontSize: 10, color: Platform.OS === 'ios' ? 'grey' : Colors.lighter}}>Help</Text>
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
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    //fontFamily: "SFUIText",
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    //fontFamily: "SFUIText",
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
  },
  avatarContainer: {
    marginTop: 10,
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  loginHighlight: {
    //fontFamily: "SFUIText",
    fontWeight: '700',
    color: 'white',
  },
  loginDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#bacf32',
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
  },
});

export default RestructureScreen;
