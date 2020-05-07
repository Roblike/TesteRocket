import {StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
  background: {
    flex:1,
    width: Dimensions.get("screen").width,
    height: 812,
    backgroundColor: '#EBE7E7',
    },
  textHead: {
    width: 172,
    height: 44,
    color: '#000000',
    fontFamily: 'Poppins - Semi Bold',
    fontSize: 31,
    fontWeight: '600',
    lineHeight: 36,
    flexDirection:'row'
    }, 
  hi: {
    fontFamily: 'Poppins - Semi Bold',
    fontSize: 31,
    },
  userName: {
    color: '#e4ba11',
    fontFamily: 'Poppins - Semi Bold',
    fontSize: 31,
    },
  head:{
    margin: 20, 
    flexDirection:"row"
  },
  containerImage: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#3e52b3',
    alignItems:"center", 
    justifyContent:"center", 
  },
  image: {
    width: 8,
    height: 15,
    color: '#ffffff',
  },
  containerIconNotify: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#3e52b3',
    alignItems:"center", 
    justifyContent:"center", 
  },
  iconNotify: {
    width: 13,
    height: 13,
    fontSize:13,
    color: '#ffffff',
  },
  headTitle: {
    alignItems:"center", 
    justifyContent:"center", marginHorizontal:90
  },
  headDescription:{
    width: 199,
    height: 18,
    opacity: 0.45,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: '400',
  },
  container1:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  menuDelivery: {
    width: 170,
    height: 170,
    margin:7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#3e52b3',
  },
  txtDelivery: {
    marginLeft: 20,
    marginTop: 20,
    color: '#ffffff',
    fontFamily: 'Segoe UI - Bold',
    fontSize: 18,
    fontWeight: '400',
  },
  iconMcDonalds: {
    marginLeft:20,
    marginTop:13,
  },
  containerUpdate: {
    flexDirection:'row', 
    marginTop:8,
    marginLeft:20,
    marginRight:20
  },
  txtUpdates: {
    width:60,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 14,
    fontWeight: '400',
  },
  txtTime: {
    marginLeft: 20,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 12  ,
    fontWeight: '400',
  },
  containerIconDelivery: {
    width: 30,
    height: 30,
    backgroundColor:'#ffffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems:"center", 
    justifyContent:"center", 
    marginLeft:'auto'
  },
  iconDelivery: {
    fontSize:18,
  },
  menuRecentOrders: {
    width: 170,
    height: 170,
    margin:7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  iconList:{
    width:25,
    height:25,
    marginLeft: 20,
    marginTop: 20,
  },
  txtRecent: {
    marginTop:9,
    marginLeft: 20,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    
  },
  containerQttItems:{
    flexDirection:'row',
    marginTop:20,
    marginLeft: 20,
  },
  txtNumberItems:{
    color: '#000000',
    fontFamily: 'Segoe UI',
    fontSize: 29,
    fontWeight: '400',
  },
  txtItems:
  {
    marginTop:10,
    marginLeft:5,    
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 18,
    fontWeight: '400',
  },
  container2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  menuBooks: {
    width: 170,
    height: 170,
    margin:7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  iconRecipe:{
    width:25,
    height:25,
    marginLeft: 20,
    marginTop: 20,
  },
  txtDineIn: {
    marginTop:9,
    marginLeft: 20,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    
  },
  containerRecipes:{
    flexDirection:'row',
    marginTop:20,
    marginLeft: 20,
  },
  txtNumberBook:{
    color: '#000000',
    fontFamily: 'Segoe UI',
    fontSize: 29,
    fontWeight: '400',
  },
  txtBooks:
  {
    marginTop:10,
    marginLeft:5,    
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 18,
    fontWeight: '400',
  },
  menuExplore: {
    width: 170,
    height: 170,
    margin:7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  iconFood:{
    width:25,
    height:25,
    marginLeft: 20,
    marginTop: 20,
  },
  txtFood: {
    marginTop:9,
    marginLeft: 20,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    
  },
  btnExploreNew: {
    width: 78,
    height: 32,
    marginLeft:20,
    marginTop:40,
    backgroundColor: '#F9E698', 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25, 
    alignItems:'center',
    justifyContent:'center', 
    },
  txtNew: {
    width: 43,
    height: 35,
    marginTop:15,
    color: '#F2A532',
    fontFamily: 'Segoe UI - Bold',
    fontSize: 13,
    fontWeight: '400', 
  
    },
  
  containerDiscountAll:{
    flexDirection:'row',
    marginVertical:10,
    
  },
  txtDiscount:{
    width: 199,
    height: 23,
    marginLeft:30,
    color: '#000',
    fontFamily: 'Segoe UI',
    fontSize: 20,
  },
  btnDiscountAll:{
    flexDirection:'row',
    marginLeft:'auto', 
    marginRight:15
  },
  txtDiscountAll:{
    width: 45,
    height: 20,
    marginRight:5,
    color: '#e4ba11',
    fontFamily: 'Segoe UI',
    fontSize: 15, 
    alignSelf:'flex-end'
  },
  iconDiscountAll:{
    width: 19,
    height: 22,
    color:'#e4ba11',
    fontSize:15, 
    margin:2
    
  },
  containerDiscount:{
    width: Dimensions.get("screen").width,
    marginTop:10,
    height: 239,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,        
    flexDirection:'row',    
    },
    containerDiscount2:{
      flexDirection:"column",
      marginTop:15,
      marginLeft:35
    },
    logoBR:{
      width:150,
      height:50,
      marginTop:28,
      marginLeft:30
    },
    txtDiscountUpTo:{ 
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: '400',
    },
    txtPercentageDiscount:{
    marginTop:2,
    color: 'rgba(0, 0, 0, 0.98)',
    fontFamily: 'Segoe UI',
    fontSize: 23,
    fontWeight: '400',
    },
    txtDaysDiscount:{
    marginTop:2,
    color: '#e4ba11',
    fontFamily: 'Segoe UI',
    fontSize: 17,
    fontWeight: '400',
    },
  position:{
    flex:1,
    justifyContent:'flex-end'
    },
  rodape:{
    width: Dimensions.get("screen").width,
    height: 130,
    shadowRadius: 16,
    backgroundColor: '#3e52b3',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,        
    flexDirection:'row',  
    margin:'auto'
    },
  btnStore: {
    width: 99,
    height: 38,
    marginLeft:30,
    marginTop:15,
    backgroundColor: '#e4ba11',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection:'row',  
    alignItems:'center',
    justifyContent:'center', 
    },
  txtStore: {
    width: 43,
    height: 35,
    marginTop:12,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: '400', margin:2
    },
  iconStore: {
    width: 30,
    height: 35,
    marginTop:12,
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: '400'
    },
  iconSearch: {
    marginTop:23,
    marginLeft:50,
    color: '#ffffff',
    fontSize:20
  },
  iconPaymentType: {
    marginTop:23,
    marginLeft:50,
    color: '#ffffff',
    fontSize:20
  },
  iconProfile: {
    marginTop:23,
    marginLeft: 60,
    color: '#ffffff',
    fontSize:20
  }
     
})

export default styles;