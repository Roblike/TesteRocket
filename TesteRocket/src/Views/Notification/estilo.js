import {StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: 812,
    backgroundColor: '#ffffff',
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
    backgroundColor: '#3e52b3',
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
  notificationView:{
    marginHorizontal:30,
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center'
  },
  notification: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 25,
  },
  notificationDescription:{
    textAlign:'center',
    opacity: 0.45,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 18,
    marginVertical:20
  },
  btnDontAllow: {
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#3e52b3', 
    borderRadius:25, 
    alignItems:'center', 
    justifyContent:'center',
    borderColor:'#ffffff',
    borderWidth:1,
  },
  txtDontAllow: {
   
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: '400',
  },
  btnAllow: {
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    marginBottom:15, 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#ffffff', 
    borderRadius:25, 
    alignItems:'center', 
    justifyContent:'center',
  
  },
  txtAllow: {
    color: '#3e52b3',
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: '400',
  },
   
})

export default styles;