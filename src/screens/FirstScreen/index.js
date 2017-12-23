import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Platform
} from 'react-native';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

import {registerKilledListener, registerAppListener} from "../../Firebase/Listeners";
import firebaseClient from  "../../Firebase/FirebaseClient";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'
import Header from "../IOS/Header";
import GraphBox from "../IOS/GraphBox";
import BookBox from "../IOS/BookBox";

registerKilledListener();

export default class FirstScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      tokenCopyFeedback: ""
    }
  }

   async componentDidMount(){
    registerAppListener();
    FCM.getInitialNotification().then(notif => {
      this.setState({
        initNotif: notif
      })
    });

    try{
      let result = await FCM.requestPermissions({badge: false, sound: true, alert: true});
    } catch(e){
      console.error(e);
    }

    FCM.getFCMToken().then(token => {
      this.setState({token: token || ""})
    });

    if(Platform.OS === 'ios'){
      FCM.getAPNSToken().then(token => {
        console.log("APNS TOKEN (getFCMToken)", token);
      });
    }
  }

  showLocalNotification() {
    FCM.presentLocalNotification({
      vibrate: 500,
      title: 'Hello',
      body: 'Test Notification',
      big_text: 'i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large',
      priority: "high",
      sound: "bell.mp3",
      large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
      show_in_foreground: true,
      number: 10
    });
  }

  scheduleLocalNotification() {
    FCM.scheduleLocalNotification({
      id: 'testnotif',
      fire_date: new Date().getTime()+5000,
      vibrate: 500,
      title: 'Hello',
      body: 'Test Scheduled Notification',
      sub_text: 'sub text',
      priority: "high",
      large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
      show_in_foreground: true,
      picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
    });
  }

  sendRemoteNotification(token) {
    let body;

    if(Platform.OS === 'android'){
      body = {
        "to": token,
        "data":{
          "custom_notification": {
            "title": "Simple FCM Client",
            "body": "This is a notification with only NOTIFICATION.",
            "sound": "default",
            "priority": "high",
            "show_in_foreground": true
          }
        },
        "priority": 10
      }
    } else {
      body = {
        "to": token,
        "notification":{
          "title": "Simple FCM Client",
          "body": "This is a notification with only NOTIFICATION.",
          "sound": "default"
        },
        "priority": 10
      }
    }

    firebaseClient.send(JSON.stringify(body), "notification");
  }

  sendRemoteData(token) {
    let body = {
      "to": token,
      "data":{
        "title": "Simple FCM Client",
        "body": "This is a notification with only DATA.",
        "sound": "default"
      },
      "priority": "normal"
    }

    firebaseClient.send(JSON.stringify(body), "data");
  }

  sendRemoteNotificationWithData(token) {
    let body = {
      "to": token,
      "notification":{
        "title": "Simple FCM Client",
        "body": "This is a notification with NOTIFICATION and DATA (NOTIF).",
        "sound": "default"
      },
      "data":{
        "hello": "there"
      },
      "priority": "high"
    }

    firebaseClient.send(JSON.stringify(body), "notification-data");
  }

  goRechner(){
    Actions.login();
  }

  goRente(){
    Actions.register();
  }

  goSafari(url){
    Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      console.log('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    let { token, tokenCopyFeedback } = this.state;
    that = this;
    return (  <View style={{flex:1}}>
              { (Platform.OS==='ios')?
                <View>
                    <Header />
                    <GraphBox
                        boxTitle={'Deine immocation Apps'}
                        btn2Route={'Explanation'}
                    />

                    <BookBox boxTitle={'Das immocation Buch'} goSafari = {(url)=>this.goSafari.bind(this,url)} />
                </View>:
                <View style = {Styles.container}>
                     <View style={{height:20,}}/>
                     <View style={Styles.page1View}>
                          <TouchableOpacity onPress={this.goSafari.bind(this,'https://www.amazon.de/gp/product/1973363178/')}>
                              <Image source={Images.imc_logo} style={Styles.logoImage}/>
                              </TouchableOpacity>
                          
                     </View>
                     <View style={Styles.screenView}>
                        <View style={Styles.screenTitleView}>
                            <Text style={Styles.titleText}>Deine immocation Apps</Text>
                        </View>
                        <View style={Styles.flexView}>
                            <TouchableOpacity onPress={this.goRechner.bind(this)} style={Styles.screenButton}>
                                <Image source={Images.imc_screenshot_bd_rechner} style={Styles.screenImage}/>
                                <Text style={Styles.sreenText}> Bierdeckel-{'\n'}Rechner</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity  onPress={this.goRente.bind(this)} style={Styles.screenButton}>
                                <Image source={Images.imc_screenshot_bd_rente} style={Styles.screenImage}/>
                                <Text style={Styles.sreenText}> Bierdeckel-{'\n'}Rente</Text>
                            </TouchableOpacity>
                            
                        </View>
                     </View>
                     <View style={Styles.screenView}>
                        <View style={Styles.screenTitleView}>
                            <Text style={Styles.titleText}>Das immocation Buch</Text>
                        </View>
                        <Text style={Styles.bottomText}>
                            Die Do-it-yourself-Rente: Passives Einkommen{"\n"}aus Immobilien zur Altersvorsorge.
                        </Text>
                        <View style={Styles.bottomButtonView}>
                            <TouchableOpacity onPress={this.goSafari.bind(this,'https://www.amazon.de/gp/product/1973363178/')}>
                                <Image source = {Images.imc_logo_amazon} style={Styles.buttonImage} />
                            </TouchableOpacity >
                            <TouchableOpacity onPress={this.goSafari.bind(this,'https://www.amazon.de/gp/product/B0775V7KG8/')}>
                                <Image source = {Images.imc_logo_kindle} style={Styles.kindleImage} />
                            </TouchableOpacity >
                            <TouchableOpacity  onPress={this.goSafari.bind(this,'https://www.amazon.de/gp/product/B077Y3Z7V4/')}>
                                <Image source = {Images.imc_logo_audible} style={Styles.buttonImage} />
                            </TouchableOpacity>
                        </View>
                     </View>
                   </View>  
                 } 
            </View>      
    );
  }
}

AppRegistry.registerComponent('FirstScreen', () => Layout_Text);
