import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,  TouchableOpacity, BackHandler
} from 'react-native';

import { Header, Left, Button, Title, Icon, Body, Right, Thumbnail, Textarea } from 'native-base';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import firebase from 'react-native-firebase';

class Feedback extends Component {
  constructor() {
    super();
    var user = firebase.auth().currentUser;

    if (user != null) {
      uid = user.uid;  
    console.log(user.uid)
    }

    this.ref = firebase.firestore().collection('feedback').doc(user.uid);
    this.state = {
      feedback: '',

    };
  }

  feedback(value) {
    this.setState({ feedback: value });
  }

  sendFeedback() { 
    this.ref.set({
      feedback: this.state.feedback,
    });

    this.setState({
      feedback: '',
    });

    this.successFeedback();
  }

  successFeedback = () => {
    this.props.navigation.navigate("FeedbackSuccess");
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

  goBack = () => {
    this.props.navigation.navigate("Profile");
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
              onPress={() => this.props.navigation.navigate("Profile")}>
              <Icon name='md-arrow-back' style={{color: Platform.OS === "ios" ? '#bacf32' : '#bacf32'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Platform.OS === "ios" ? '#bacf32' : '#bacf32'}}>Feedback</Title>
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
              <Text style={styles.sectionDescription}>
                Let us know what we can change to make this app even better.
              </Text>
              <Textarea 
                  rowSpan={5}
                  bordered rounded
                  style={{borderRadius:20}}
                  placeholder="Your Message..."
                  value={this.state.feedback}
                  onChangeText={(text) => this.feedback(text)}
                />
            </View>

            <View style={styles.buttonContainer}>
            <Button
              transparent block large rounded
              style={{borderRadius:20, backgroundColor:"#bacf32"}}
              disabled={!this.state.feedback.length}
              onPress={() => this.sendFeedback()}>
                <Text style={styles.updateHighlight}>SEND</Text>
            </Button>
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

export default Feedback;
