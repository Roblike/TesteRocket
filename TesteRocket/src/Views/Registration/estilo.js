import {StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: 790,
    backgroundColor: '#3e52b3',
  },
  rectangle: {
    width: Dimensions.get("screen").width,
    height: 790,
    marginTop: 50,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#ffffff',
  },
  head:{
    margin: 20, 
    flexDirection:"row"
  },
  iconBack: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#f2a81c',
    alignItems:"center", 
    justifyContent:"center", 
  },
  path: {
    color: '#ffffff',
  },
  headTitleText: {
    width:((Dimensions.get("screen").width)/2)+20,
    marginLeft:'auto',
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontWeight: '400',
    fontSize: 20,
    letterSpacing: 0.35
  },
  welcomeView:{
    margin:30
  },
  welcomeBack: {
    width: 221,
    height: 42,
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 36,
  },
  welcomeDescription:{
    width: 199,
    height: 24,
    opacity: 0.45,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: '400',
  },
  emailContainer: {
    flexDirection: 'row',
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    marginBottom:15,  
    borderColor: '#707070',
    borderStyle: 'solid',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    opacity: 0.4,
    backgroundColor:'#F1EAEA'
  },
  passwordContainer: {
    flexDirection: 'row',
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    marginBottom:15,  
    borderColor: '#707070',
    borderStyle: 'solid',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    opacity: 0.4,
    backgroundColor:'#F1EAEA'
  },
  inputPass:{
    marginRight:125
  },
  inputEmail:{
    marginRight:200
  },
  iconEmail:{
    margin:15,
    fontSize:14,
  },
  iconKey:{
    margin:15,
    fontSize:14, 
  },
  iconSecurity:{
    opacity:0.4,
  },
  btnSignIn: {
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    marginBottom:15, 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#3e52b3', 
    borderRadius:25, 
    alignItems:'center', 
    justifyContent:'center'
  },
  txtSignIn: {
    width: 62,
    height: 27,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: '400',
  },
  containeIagree:{
    flexDirection:'row', 
    marginBottom: 20,
    marginLeft:20
  },
  iconCheck:{
    color: '#f2a81c',
    fontSize:16,alignSelf: "center",
  },
  IAgree: {
    color: '#f2a81c',
    fontFamily: 'Segoe UI',
    fontSize: 14,
    fontWeight: '400', 
    margin:8
  },
  btnCreateAccount: {
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    marginBottom:15, 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 0.4,
    alignItems:'center', 
    justifyContent:'center'
  },
  txtCreateAccount: {
    width: 126,
    height: 19,
    color: '#525068',
    fontFamily: 'Muli - Bold',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.22,
  },
  btnLogGoogle: {
    flexDirection:'row',
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    marginBottom:15, 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 0.4,
    alignItems:'center', 
    justifyContent:'center'
  },
  txtLogGoogle: {
    width: 135,
    height: 19,
    color: '#525068',
    fontFamily: 'Muli - Bold',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.22,
    marginLeft:5
  },
  containerOr: {
    margin:15,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  txtOr:{
    color: '#e4ba11',
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: '400',
    marginHorizontal:10
  },
    line: {
      marginHorizontal:10,
      
      width: 140,
      height: 3,
      color: '#e4ba11',
      
    },
  
})

export default styles;