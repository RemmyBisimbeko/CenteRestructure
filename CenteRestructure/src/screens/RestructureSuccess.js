import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Image,
  TextInput,  TouchableOpacity, BackHandler
} from 'react-native';

import { Header, Left, Button, Title, Icon, Body, Right, Thumbnail, Textarea } from 'native-base';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class RestructureSuccess extends Component {
  constructor() {
    super();
  }

   

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

  goBack = () => {
    this.props.navigation.navigate("Restructure");
  }

  handleBackPress = () => {
    this.goBack(); // works best when the goBack is async
    return true;
  }


  render() {  
  return (
    <Fragment>

        <Header 
          transparent
          androidStatusBarColor={Colors.light}
          noShadow>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.navigate("Restructure")}>
              <Icon name='md-arrow-back' style={{color: Platform.OS === "ios" ? '#bacf32' : '#bacf32'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Platform.OS === "ios" ? '#bacf32' : '#bacf32'}}>Loan</Title>
          </Body>
          <Right>
          </Right>
        </Header>


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

                <Image 
                    style={{width:"100%", height:200}} 
                    source={require("../images/feedback.png")}
                />

                <Text style={styles.sectionDescription}>
                    <Text style={styles.highlight}>Your Restructure request has been sent.</Text>
                </Text>

                <Text style={styles.sectionDescription}>
                    Thank you for choosinng Centenary Bank. We will contact you as soon as possible.
                </Text>
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: -1,
    textAlign: "left",
    color: "#000000"
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems:"center", 
    justifyContent:"center"
  },
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 150
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
    textAlign: "center"
  },
  highlight: {
    //fontFamily: "SFUIText",
    fontWeight: '700',
    fontSize:25
  },
  updateHighlight: {
    //fontFamily: "SFUIText",
    fontWeight: '700',
    color: Colors.white
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

export default RestructureSuccess;
