
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
        x2:2000,
        x3:20,
        x4:3,
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
    value = this.state.x3*this.state.x4*12 /this.state.x2*100
    value1 = this.state.x3*this.state.x4*12 /this.state.x2*10
    x4 = this.state.x4.toFixed(1)
    xx4 = x4*80
    xxx4 = xx4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    fixv = value1.toFixed(1)
    tem1 = this.state.x2/2
    tem2 = this.state.x2 *10
    temx1 = tem1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    temx2 = tem2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(value>100) value = 100
    if(value>60){
      barColor = '#0ef513'
      smalltext = 'Die Wohnung ist finanziell sehr interessant. Du hast gute Chancen, dass\nsie sich von selbst abzahlt.'
    } 
    else if(value>50){
       barColor = '#fafd06'
       smalltext = 'Die Wohnung konnte finanaziell interessant sein. Ein genauerer Blick\n lohnt sich.'
    }
    else{
      barColor = 'red'
      smalltext = 'Die Wohnung lohnt sich fur dich finanaziell wahrscheinlich nicht.'
    } 

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
                          <Text style={Styles.whiteText}>Bruttomietrendite</Text>
                          <Text style={Styles.whiteText}>{fixv}%</Text>
                      </View>
                      <View style={Styles.sliderWidth}>
                          <Slider
                            trackStyle={Styles.track}
                            thumbStyle={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    backgroundColor: barColor,
                                  }}
                            minimumTrackTintColor={barColor}
                            thumbTouchSize = {{
                              width:40,
                              height:40
                            }}
                            minimumValue = {0}
                            maximumValue = {100}
                            step = {1}
                            disabled = {true}
                            value={value}
                          />
                      </View> 
                      <Text style={Styles.whitesmallText}>
                          {smalltext}
                      </Text>
                   </View>
                   
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Kaufpreis</Text>
                        <Text style={Styles.blackText}>{temx1}€/㎡</Text>
                        <Text style={Styles.blackText}>{temx2}€</Text>
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
                            minimumValue = {2000}
                            maximumValue = {20000}
                            step = {100}
                            onValueChange = {(val)=>this.onChangeValue2(val)}
                            value = {this.state.x2}
                          />
                      </View>    
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Wohnflache</Text>
                        <Text style={Styles.blackText}>{this.state.x3}㎡</Text>
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
                            minimumValue = {20}
                            maximumValue = {120}
                            step = {1}
                            onValueChange = {(val)=>this.onChangeValue3(val)}
                            value = {this.state.x3}
                          />
                          <Text style={Styles.blacksmallText}>Annahme fur Auszahlungszeitraum:2%</Text>
                      </View> 
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Kaltmiete</Text>
                        <Text style={Styles.blackText}>{xxx4}€/Monat</Text>
                        <Text style={Styles.blackText}>{x4}€/㎡</Text>
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
                            minimumValue = {3}
                            maximumValue = {15}
                            step = {0.1}
                            onValueChange = {(val)=>this.onChangeValue4(val)}
                            value = {this.state.x4}
                          />
                      </View>    
                   </View>
                   <View style={{flex:1,justifyContent:'center'}}>
                       <TouchableOpacity onPress={this.goSafari.bind(this)} style={Styles.buttonView}>
                          <Text style={Styles.whiteText}>JETZT GENAUER KALKULIEREN</Text>
                       </TouchableOpacity>
                   </View>       
            </View>
    );
  }
}

AppRegistry.registerComponent('SliderScreen', () => Layout_Text);
