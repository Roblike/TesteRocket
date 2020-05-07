import {StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: '#3e52b3',
  },
  rectangle: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
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
    flexDirection:"row", 
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
    width: 8,
    height: 15,
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
  txtForgotView:{
    margin:30
  },
  txtForgot: {
    width: 221,
    height: 42,
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 36,
  },
  txtEnteryour:{
    marginTop:8,
    width: 290,
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
    marginLeft:40, 
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

  btnSend: {
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginTop:18,
    marginLeft:40, 
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
  txtSend: {
    textAlign:'center',
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 17,
    fontWeight: '400',
  },
  txtIcant: {
    textAlign:'center',
    color: '#f2a81c',
    fontFamily: 'Segoe UI',
    fontSize: 12,
    fontWeight: '400',
    marginTop:20 
 
  },
 
  
  
})

export default styles;