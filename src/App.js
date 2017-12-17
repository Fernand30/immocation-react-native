import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Route, Schema, Animations, Scene,TabBar} from 'react-native-router-flux'

import FirstScreen from './screens/FirstScreen/index';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import FirstSlider from './screens/FirstSlider/index';
import SecondSlider from './screens/SecondSlider/index';

const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "firstscreen" component = {FirstScreen} hideNavBar={true} {...this.props} initial/>
      <Scene key = "login" component = {Login} hideNavBar={true} panHandlers={null} />
      <Scene key = "register" component = {Register} hideNavBar={true} panHandlers={null} />
      <Scene key = "firstslider" component = {FirstSlider} hideNavBar={true} panHandlers={null} />
      <Scene key = "secondslider" component = {SecondSlider} hideNavBar={true} panHandlers={null} />
    </Scene>
 </Router>


);

export default Routes