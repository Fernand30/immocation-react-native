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
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'
import Slider from 'react-native-slider'
export default class SliderScreen extends Component {
  
  constructor(props){
      super(props);
      this.state=({
        x1:0,
        x2:0,
        x3:0,
        x4:0
      })
  }

  componentDidMount(){
    
  }

  goHome(){
    Actions.firstscreen();
  }

  goRente(){
    Actions.register();
  }

  goSafari(){
    
    const url = 'https://www.immocation.de/app-genauer-kalkulieren/?utm_source=app&utm_campaign=bierdeckel&utm_term=roter-faden'
    Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      console.log('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
    }).catch(err => console.error('An error occurred', err));
  }

  onChangeValue1(val){
    this.setState({
      x1:val,
    })
  }

  onChangeValue2(val){
    this.setState({
      x2:val,
    })
  }

  onChangeValue3(val){
    this.setState({
      x3:val,
    })
  }

  onChangeValue4(val){
    this.setState({
      x4:val,
    })
  }

  render() {

    nach = this.state.x1;
    nachM = this.state.x1*1345
    mona = this.state.x1*10;
    monaM = this.state.x1*7;
    bei = this.state.x1*2;
    beiM = this.state.x1*12;

    return (
            <View style = {Styles.container}>
                   <View style={{height:20,}}/>
                   <View style={Styles.page1View}>
                        <Image source={Images.imc_logo} style={Styles.logoImage}/>
                        <TouchableOpacity onPress={this.goHome.bind(this)}>
                            <Image source={Images.imc_menu_icon} style={Styles.menuImage}/>
                        </TouchableOpacity>    
                   </View>
                   <View style={Styles.blackView}>
                      <View style={Styles.flexView}>
                          <Text style={Styles.whiteText}>Vermogen nach {nach} Jahren:</Text>
                          <Text style={Styles.whiteText}>{nachM}€</Text>
                      </View>
                      <View style={Styles.flexView}>
                          <Text style={Styles.whiteText}>Auszahlung / Monat({mona} Jahre):</Text>
                          <Text style={Styles.whiteText}>{monaM}€</Text>
                      </View>
                      <View style={Styles.commonView}>
                          <Text style={Styles.whitesmallText}>Bei {bei}% inflation entspricht dies {beiM}€ in heutiger Kaukraft</Text>
                      </View>
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Wie lange zahlst du ein?</Text>
                        <Text style={Styles.blackText}>{this.state.x1} Jahre</Text>
                      </View>
                      <View style={Styles.sliderWidth}>
                          <Slider
                            trackStyle={Styles.track}
                            thumbStyle={Styles.thumb}
                            minimumTrackTintColor='red'
                            thumbTouchSize = {{
                              width:40,
                              height:40
                            }}
                            minimumValue = {0}
                            maximumValue = {50}
                            step = {1}
                            onValueChange = {(val)=>this.onChangeValue1(val)}
                          />
                      </View>    
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Wie viel sparst du pro Monat?</Text>
                        <Text style={Styles.blackText}>{this.state.x2}€</Text>
                      </View>
                      <View style={Styles.sliderWidth}>
                          <Slider
                            trackStyle={Styles.track}
                            thumbStyle={Styles.thumb}
                            minimumTrackTintColor='red'
                            thumbTouchSize = {{
                              width:40,
                              height:40
                            }}
                            minimumValue = {0}
                            maximumValue = {2000}
                            step = {50}
                            onValueChange = {(val)=>this.onChangeValue2(val)}
                          />
                      </View>    
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Rendite Einzahlungszeitraum</Text>
                        <Text style={Styles.blackText}>{this.state.x3}%</Text>
                      </View>
                      <View style={Styles.sliderWidth}>
                          <Slider
                            trackStyle={Styles.track}
                            thumbStyle={Styles.thumb}
                            minimumTrackTintColor='red'
                            thumbTouchSize = {{
                              width:40,
                              height:40
                            }}
                            minimumValue = {0}
                            maximumValue = {12.00}
                            step = {0.25}
                            onValueChange = {(val)=>this.onChangeValue3(val)}
                          />
                          <Text style={Styles.blacksmallText}>Annahme fur Auszahlungszeitraum:2%</Text>
                      </View> 
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Wie lange hebst du ab?</Text>
                        <Text style={Styles.blackText}>{this.state.x4}Jahre</Text>
                      </View>
                      <View style={Styles.sliderWidth}>
                          <Slider
                            trackStyle={Styles.track}
                            thumbStyle={Styles.thumb}
                            minimumTrackTintColor='red'
                            thumbTouchSize = {{
                              width:40,
                              height:40
                            }}
                            minimumValue = {0}
                            maximumValue = {50}
                            step = {1}
                            onValueChange = {(val)=>this.onChangeValue4(val)}
                          />
                      </View>    
                   </View>
                   <View style={{flex:1,justifyContent:'center'}}>
                       <TouchableOpacity onPress={this.goSafari.bind(this)} style={Styles.buttonView}>
                          <Text style={Styles.whiteText}>ALTERSVORSORGE LOSEN</Text>
                       </TouchableOpacity>
                   </View>       
            </View>
    );
  }
}

AppRegistry.registerComponent('SliderScreen', () => Layout_Text);