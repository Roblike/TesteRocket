import {StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: 812,
    backgroundColor: '#3e52b3',
  },
  rectangle: {
    width: Dimensions.get("screen").width,
    height: 812,
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
    justifyContent:'space-between'
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
  pathBack: { 
    color: '#ffffff',
  },
  iconCancel: {
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
  pathCancel: {
    color: '#ffffff',
  },
  headTitle: {
    alignItems:"center", 
    justifyContent:"center", marginHorizontal:90
  },
  headTitleText: {
    width: 64,
    height: 28,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontWeight: '400',
    fontSize: 20,
    letterSpacing: 0.35
  },
  welcomeView:{
    margin:30
  },
  txtPhoneVerification: {
    width: 221,
    height: 42,
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 36,
  },
  txtEnteryour:{
    width: 199,
    height: 24,
    opacity: 0.45,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: '400',
  },
  containerQuadros:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
  },
  Quadro1: {
    width: 60,
    height: 60,
    margin:15,
    borderColor: '#707070',
    borderStyle: 'solid',
    opacity: 0.2,
    borderWidth: 1.5,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  Quadro2: {
    width: 60,
    height: 60,
    margin:15,
    backgroundColor: '#3e52b3',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    },
  Quadro3: {
    width: 60,
    height: 60,
    margin:15,
    borderColor: '#707070',
    borderStyle: 'solid',
    opacity: 0.2,
    borderWidth: 1.5,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    },
  Quadro4: {
    width: 60,
    height: 60,
    margin:15,
    borderColor: '#707070',
    borderStyle: 'solid',
    opacity: 0.2,
    borderWidth: 1.5,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    },

  btnNext: {
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
  txtNext: {    
    color: '#3e52b3',
    fontFamily: 'Muli - Bold',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.22,
  },
  rectangle1: {
    width: Dimensions.get("screen").width,
    height: 700,
    marginTop: 50,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#3e52b3',
  },
  containerKeyboard:{
    margin:25
  },
  containerRowKeyboard:{
    flexDirection:'row',
    marginTop:20,
    marginHorizontal:30,
    justifyContent:'space-between'
  },
  containerColumnKeyboard:
  {
    flexDirection:'column'
  },
  containerLastRowKeyboard:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:'auto',marginHorizontal:25,
    width:((Dimensions.get("screen").width)/2)-45,
    justifyContent:'space-between', 
  },
  txtNumber:{
    fontSize:30,
    color:'#FFF'
  },
  iconRemove:{
    width:30,
    height:30,
  },
  btnContinue: {
    height: 47,
    marginVertical:30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#fff', 
    borderRadius:25, 
    alignItems:'center', 
    justifyContent:'center',
  },
  txtContinue: {
    color: '#3e52b3',
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: '400',
  },

  
})

export default styles;