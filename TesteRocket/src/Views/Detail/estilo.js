import {StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get("screen").width,
    height: 812,
    backgroundColor: '#ffffff',
  },
  cabecalho:{
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
  iconNotification: {
    width: 30,
    height: 30,
    marginRight:10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#3e52b3',
    alignItems:"center", 
    justifyContent:"center", 
  },
  pathBack: {
    width: 8,
    height: 15,
    color: '#ffffff',
  },
  pathNotification: {
      width:13,
      height:13,
      fontSize:13,
      color:'#ffffff'
  },
  containerEnd: {
    flexDirection:'row'
  },
  pathBasket: {
    fontSize:23, 
    alignSelf:'flex-end'
},
circle:{
  width:15,
  height:15,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  backgroundColor:'#f2a81c',
  alignItems:'center',
  justifyContent:'center'
},
qtdItem:{
fontSize:11,
color:'#ffffff'
},
  containerExplore:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:20,
    justifyContent:'space-between'
  },
  btnSeeAll:{
    flexDirection:'row',
    marginLeft:'auto', 
    marginRight:15
  },
  txtSeeAll:{
    width: 45,
    height: 20,
    marginRight:5,
    color: '#e4ba11',
    fontFamily: 'Segoe UI',
    fontSize: 15, 
    alignSelf:'flex-end'
  },
  iconSeeAll:{
    width: 19,
    height: 22,
    color:'#e4ba11',
    fontSize:15, 
    margin:2    
  },
  txtExplore: {
    color: '#000000',
    fontFamily: 'Poppins - Semi Bold',
    fontSize: 29,
    lineHeight: 29,
  },
  rectangle1: {
    width: Dimensions.get("screen").width,
    marginTop: 50,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#3e52b3',

  },
  containerTopOrder:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:40,
    marginBottom:50,
    marginRight:20,
    justifyContent:'space-between'
  },
  txtTopOrder: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 36,
  },
  rectangle2: {
    width: Dimensions.get("screen").width,
    height: 780,
    shadowRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#ffffff',
  },
  containerRowProduct:{
    flexDirection:'row'
  },
  containerColumn1:{
    flexDirection:'column',
    marginLeft:20,
    marginTop:40,
    width: ((Dimensions.get("screen").width)/2)-90,
    marginLeft: 20,  
  },
  containerProduct:{
    flexDirection:'row',
  },
  txtProduct: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 36,
  },
  txtQtProduct: {
    opacity: 0.45,
    color: '#707070',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    marginTop:'auto'
  },
  containerAvaible:{
    marginTop:10,
    flexDirection:'row'
  },
  txtAvalible:{
    fontFamily: 'Segoe UI',
    fontSize:16
  },
  iconAvaible:{
    marginLeft:5,
    marginTop:1,
    color:'yellow',
    fontSize:20
  },
  containerColumn2:{
    flexDirection:'column', 
    marginLeft:40,
    width: ((Dimensions.get("screen").width)/2),
  },
  imgProduct: {
    width:230,
    height:220
  },
   btnExploreNew: {
    width: 98,
    height: 32,
    backgroundColor: '#f2a81c', 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25, 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    },
  txtNew: {
    color: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: 15, 
    alignSelf:'flex-end'
    },
    iconNew:{
      marginLeft:5,   
      color:'#ffffff',
      fontSize:15, 
      },
containerLine:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginTop:10
},
   line:{
    width: 54,
    height: 4,
    borderRadius: 100,
    backgroundColor: '#bebebe',
   },
containerAddProduct:{
  flexDirection:'row',
  marginLeft:20,
  marginVertical:20,
  justifyContent:'space-between',
  marginRight:20
},
txtTitleAboutProduct:{
    fontFamily: 'Segoe UI',
    fontSize: 20,
    marginLeft:20
},
txtAboutProduct:{
  opacity:0.45,
  fontFamily: 'Segoe UI',
  fontSize: 19,
  marginLeft:20,
  marginRight:20
},
containerRodape:{
  flexDirection:'row', 
  justifyContent:'space-between',
  marginTop:30,
},
btnAddToCart: {
  width: (Dimensions.get("screen").width)*0.6,
  height: 47,
  marginLeft:20, 
  
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  backgroundColor: '#3e52b3', 
  borderRadius:25, 
  alignItems:'center', 
  justifyContent:'center'
},
txtAddToCart: {
  color: '#ffffff',
  fontFamily: 'Segoe UI',
  fontSize: 16,
  fontWeight: '400',
},
containerFavorite:{
  flexDirection:'row',
  marginRight:20, 
  justifyContent:'center',alignItems:'center'
},
iconFavorite: {
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
pathFavorite: {
  color: '#ffffff',
},
txtNumberFavorite: {
  opacity:0.45,
  fontFamily: 'Segoe UI',
  fontSize: 15,
  marginLeft:15,
  marginRight:20
},
pathQtd: {
  width: 98,
  height: 32,
  backgroundColor: '#FFFFFF',
  borderWidth:1,
  borderColor:'#DCDCDC',  
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25, 
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center', 
  },
inputNumeric:{
  marginHorizontal:12,
  fontSize:18
},
iconAdd:{
color:'#f2a81c'
},
containerPrice:{
  flexDirection:'row'
  },
  txtPrice: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
  },
})

export default styles;