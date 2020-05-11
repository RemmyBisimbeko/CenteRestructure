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
  Tab,
  Tabs, Form, Item, Input, Textarea
} from 'native-base';

import {Colors} from 'react-native/Libraries/NewAppScreen';
class RestructureScreen extends Component {
  // get uid() {
  //   return (firebase.auth().currentUser || {}).uid;
  // }

  // submitRestructureHandler = () => {
  //   this.props.navigation.navigate('Success');
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
              Restructure
            </Title>
          </Body>

          <Right />
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
                        placeholder="Branch"
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
                        placeholder="Loan Officer (Optional)"
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
                        placeholder="Email Address (Optional)"
                      />
                    </Item>
  
                    <Textarea 
                      rowSpan={5}
                      bordered rounded
                      style={{borderRadius:20, marginTop: 10}}
                      placeholder="Request for Resructure in Detail..."
                      // value={this.state.reason}
                      // onChangeText={(text) => this.reason(text)}
                    />
  
                    <Button
                      transparent
                      block
                      large
                      style={{borderRadius: 20, backgroundColor: '#1269B1', marginTop: 20}}
                      // disabled={!this.state.cardnumber.length}
                      // onPress={this.submitRestructureHandler}>
                      onPress={()=>this.props.navigation.navigate('Success')}>
                      <Text style={styles.loginHighlight}>SUBMIT</Text>
                    </Button>
                  </Form>
                </View>
              </View>

          </ScrollView>
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
              active
              style={{backgroundColor: Colors.white}}
              onPress={() => this.props.navigation.navigate('Restructure')}>
              <Icon active name="paper" style={{color: '#1269B1'}} />
              <Text style={{fontSize: 10, color: '#1269B1'}}>Restructure</Text>
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
    color: '#1269B1',
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
