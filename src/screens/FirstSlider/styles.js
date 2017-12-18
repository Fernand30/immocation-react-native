const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  page1View: {
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  page1Image: {
    width: responsiveWidth(40),
    height: responsiveWidth(8),
    resizeMode: 'cover'
  },
  sliderView: {
    borderColor:'#a4a4a4',
    borderBottomWidth:1,
    paddingTop:10,
  },
  blackView:{
    backgroundColor:'black',
    marginTop:20,
    paddingBottom:10
  },
  menuImage:{
    width:responsiveWidth(7),
    height:responsiveWidth(7),
    resizeMode:'cover'
  },
  flexView:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    justifyContent:'space-between'
  },
  commonView:{
    marginLeft:20,
    marginRight:20,
    marginTop:10,
  },
  whiteText:{
    fontSize:responsiveFontSize(2),
    color:'white'
  },
  whitesmallText:{
    fontSize:responsiveFontSize(1.3),
    color:'white',
    marginLeft:20,
    height:30,
  },
  blackText:{
    fontSize:responsiveFontSize(2),
    color:'black'
  },
  blacksmallText:{
    fontSize:responsiveFontSize(1.5),
    color:'#828282',
    textAlign:'center',
    marginBottom:5
  },
  buttonView:{
    height:responsiveHeight(5),
    backgroundColor:'#e03145',
    alignItems:'center',
    justifyContent:'center',
    marginRight:20,
    marginLeft:20,
  },
  buttonText:{
    color:'white',
    fontSize:responsiveFontSize(2),
    textAlign:'center'
  },
  buttonImage:{
    width:responsiveWidth(20),
    height:responsiveWidth(5),
    resizeMode:'cover'
  },
  screenImage:{
    height:responsiveWidth(30),
    width:responsiveWidth(30),
    resizeMode:'cover',
  },
  sreenText:{
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#e03145',
    textAlign:'center',
    color:'white',
    marginTop:20
  },
  logoImage: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    resizeMode: 'stretch'
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  textImage: {
    width: responsiveWidth(80),
    height: responsiveHeight(15),
    resizeMode: 'stretch'
  },
  screenView:{
    borderColor:'black',
    borderWidth:1,
    marginTop:responsiveHeight(20),
    marginLeft:20,
    marginRight:20
  },
  titleText:{
    color:'white',
    fontSize:responsiveFontSize(2.5)
  },
  screenTitleView:{
    backgroundColor:'black',
    height:responsiveHeight(7),
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle: {
    fontSize: responsiveFontSize(3.5),
    color: 'white',
    textAlign: 'center'
  },
  registerButtonView: {
    flex: 1,
    marginTop:40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  registerButton: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#27ec8d',
    height:50,
    borderRadius: 5
  },
  registerButtonText:{
    fontSize: responsiveFontSize(2),
    textAlign: 'center'
  },
  loginButtonView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginButton: {
    alignItems:'center',
    justifyContent:'center',
    borderColor: '#27ec8d',
    borderWidth: 1,
    height:50,
    borderRadius: 5
  },
  loginButtonText:{
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: '#27ec8d'
  },
  
  track: {
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#727272',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e03145',
  },
  sliderWidth:{
    marginLeft:20,
    marginRight:20
  },
};
