import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'

export default class FirstScreen extends Component {
  
  constructor(props){
        super(props);
      }

  componentDidMount(){
    
  }

  goHome(){
    Actions.firstscreen();
  }

  goSlider(){
    Actions.firstslider();
  }

  render() {
    that = this;
    return (
            <View style = {Styles.container}>
                   <View style={{height:20,}}/>
                   <View style={Styles.page1View}>
                        <Image source={Images.imc_logo} style={Styles.logoImage}/>
                        <TouchableOpacity onPress={this.goHome.bind(this)}>
                            <Image source={Images.imc_menu_icon} style={Styles.menuImage}/>
                        </TouchableOpacity>    
                   </View>
                   
                   <View style={Styles.screenView}>
                      <View style={Styles.screenTitleView}>
                          <Text style={Styles.titleText}>Der Bierdeckel-Rechner</Text>
                      </View>
                      <Text style={Styles.bottomText}>
                          Nehmen wir an, du möchtest dir durch den Kauf{"\n"}einer kleinen Wohnung deine eigene Rente{'\n'}
                          aufbauen.{'\n'}{'\n'}
                          Wann ist eine angebotene Wohnung eine{'\n'}lohnenswerte Geldanlage?
                          {'\n'}{'\n'}Finde es heraus!
                      </Text>
                      <TouchableOpacity onPress={this.goSlider.bind(this)} style={Styles.bottomButtonView}>
                         <Text style={Styles.buttonText}>Los geht&rsquo;s</Text>
                      </TouchableOpacity>
                   </View>
            </View>
    );
  }
}

AppRegistry.registerComponent('FirstScreen', () => Layout_Text);
