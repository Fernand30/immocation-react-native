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
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'
import Header from "../IOS/Header";
import GraphBox from "../IOS/GraphBox";
import BookBox from "../IOS/BookBox";

export default class FirstScreen extends Component {
  
  constructor(props){
        super(props);
      }

  componentDidMount(){
    
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
