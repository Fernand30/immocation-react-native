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

// this shall be called regardless of app state: running, background or not running. Won't be called when app is killed by user in iOS
FCM.on(FCMEvent.Notification, async (notif) => {
    // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
    if(notif.local_notification){
      //this is a local notification
    }
    if(notif.opened_from_tray){
      //iOS: app is open/resumed because user clicked banner
      //Android: app is open/resumed because user clicked banner or tapped app icon
    }
    // await someAsyncCall();

    if(Platform.OS ==='ios'){
      //optional
      //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application.
      //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
      //notif._notificationType is available for iOS platfrom
      switch(notif._notificationType){
        case NotificationType.Remote:
          notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
          break;
        case NotificationType.NotificationResponse:
          notif.finish();
          break;
        case NotificationType.WillPresent:
          notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
          break;
      }
    }
});
FCM.on(FCMEvent.RefreshToken, (token) => {
    alert(token)
    // fcm token may not be available on first load, catch it here
});

export default class FirstScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      tokenCopyFeedback: ""
    }
  }

    componentDidMount() {
        // iOS: show permission prompt for the first call. later just check permission in user settings
        // Android: check permission in user settings
        //FCM.requestPermissions().then(()=>console.log('granted')).catch(()=>alert('notification permission rejected'));
        
        FCM.getFCMToken().then(token => {
            alert(token)
            // store fcm token in your server
        });
        
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
                          <Image source={Images.imc_logo} style={Styles.logoImage}/>
                     </View>
                     <View style={Styles.screenView}>
                        <View style={Styles.screenTitleView}>
                            <Text style={Styles.titleText}>Deine immcation Apps</Text>
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
                            Die do-it-yourself-Rente: Passives Einkommen{"\n"}aus immobilien zur Altersvorsorge.
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
