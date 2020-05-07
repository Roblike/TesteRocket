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
    backgroundColor: '#3e52b3', 
    borderRadius:25, 
    alignItems:'center', 
    justifyContent:'center',
    borderColor:'#ffffff',
    borderWidth:1,
  },
  txtContinue: {
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: '400',
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

  txtRegisterPhone: {
    marginLeft:20,
    marginTop:20,
    color: '#000000',
    fontFamily: 'Leelawadee - Bold',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 36,
  },
  txtEnteryourmobile:{
    width:300,
    marginTop:5,
    marginHorizontal:20, 
    opacity: 0.45,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 17,
    fontWeight: '400',
  },
  txtMobileNumber: {
    marginTop: 50,
    marginLeft:20,
    color: '#000000',
    fontFamily: 'Poppins - Regular',
    fontSize: 15,
  },
  phoneContainer: {
    flexDirection: 'row',
    width: (Dimensions.get("screen").width)*0.8,
    height: 47,
    marginLeft:30, 
    marginBottom:15,  
    marginTop:60,
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
  inputPhone:{
    marginRight:200
  },
  iconBandeira:{
    margin:11,
    
  },
  container: {
    color:'#3e52b3'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2374AB',
  },
  input: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 3,
    backgroundColor: '#ffffff70',
    marginVertical: 5,
  },
  
})

export default styles;