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
        x1:30,
        x2:500,
        x3:6,
        x4:30
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

    x21 = this.state.x2
    X1 = this.state.x1;
    X2 = x21.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    X3 = this.state.x3;
    X4 = this.state.x4;
    dZinsEinzahlung = X3 / 100;
    dStrangeParam = 6.5 * dZinsEinzahlung;
    dK1 = x21 * (12 + dStrangeParam);
    valx1 = dK1 * (Math.pow((1+dZinsEinzahlung), X1)-1)/dZinsEinzahlung;
    val1 = valx1.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    dZinsAuszahlung = 0.02;
    q = 1 + dZinsAuszahlung/12;
    dFaktor2 = (q-1);
    dMonateAuszahlung = (X4 * 12);
    dFaktor3 = Math.pow(q, dMonateAuszahlung) - 1;
    dFaktor1 = Math.pow(q, dMonateAuszahlung -1);
    valx2 = valx1 * dFaktor1 * dFaktor2 / dFaktor3;
    val2 = valx2.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if(X3==0){
      val1 = 0
      val2 = 0
    }
    valx3 = valx2 / Math.pow(1.02, X1); 
    val3 = valx3.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if(X1 == 1) jah = 'Jahr'
      else jah = 'Jahren'
    if(X4 == 1) jah1 = 'Jahr'
      else jah1 = 'Jahre'  

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
                          <Text style={Styles.whiteText}>Vermögen nach {X1} {jah}:</Text>
                          <Text style={Styles.whiteText}>{val1} €</Text>
                      </View>
                      <View style={Styles.flexView}>
                          <Text style={Styles.whiteText}>Auszahlung / Monat ({X4} {jah1}):</Text>
                          <Text style={Styles.whiteText}>{val2} €</Text>
                      </View>
                      <View style={Styles.commonView}>
                          <Text style={Styles.whitesmallText}>Bei 2 % Inflation entspricht dies {val3} € in heutiger Kaukraft</Text>
                      </View>
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Wie lange zahlst du ein?</Text>
                        <Text style={Styles.blackText}>{X1} {jah}</Text>
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
                            minimumValue = {1}
                            maximumValue = {50}
                            step = {1}
                            onValueChange = {(val)=>this.onChangeValue1(val)}
                            value= {X1}
                          />
                      </View>    
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Wie viel sparst du pro Monat?</Text>
                        <Text style={Styles.blackText}>{X2} €</Text>
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
                            value= {x21}
                          />
                      </View>    
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Rendite Einzahlungszeitraum</Text>
                        <Text style={Styles.blackText}>{X3.toFixed(2)}%</Text>
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
                            value= {X3}
                          />
                          <Text style={Styles.blacksmallText}>Annahme fur Auszahlungszeitraum:2 %</Text>
                      </View> 
                   </View>
                   <View style={Styles.sliderView}>
                      <View style={Styles.flexView}>
                        <Text style={Styles.blackText}>Wie lange hebst du ab?</Text>
                        <Text style={Styles.blackText}>{X4} {jah1}</Text>
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
                            minimumValue = {1}
                            maximumValue = {50}
                            step = {1}
                            onValueChange = {(val)=>this.onChangeValue4(val)}
                            value= {X4}
                          />
                      </View>    
                   </View>
                   <View style={{flex:1,justifyContent:'center'}}>
                       <TouchableOpacity onPress={this.goSafari.bind(this)} style={Styles.buttonView}>
                          <Text style={Styles.whiteText}>ALTERSVORSORGE LÖSEN</Text>
                       </TouchableOpacity>
                   </View>       
            </View>
    );
  }
}

AppRegistry.registerComponent('SliderScreen', () => Layout_Text);