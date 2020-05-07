import React,{Fragment,} from 'react';
import {
  Text, 
  ScrollView,
  View,
  Platform,
  Image
} from 'react-native'; 
import styles from './estilo'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


 const Detail = ({navigation}) => {
 
    const trocarPagina = () => {
        navigation.replace("Login")
      }
   return (
    <ScrollView style={{margintop:0}}>
     <Fragment>
      <View style={styles.background}>
        <View style={styles.cabecalho}>
            <TouchableOpacity>
                <View style={styles.iconBack}>
                    <Icon name="chevron-left" style={styles.pathBack} />  
                </View>
          </TouchableOpacity>
          <View style={styles.containerEnd}>
          <TouchableOpacity>
          <View style={styles.iconNotification}>
                    <Icon name="bell" style={styles.pathNotification} />  
                </View>
          </TouchableOpacity>
          <TouchableOpacity>
                <Icon name="shopping-basket" style={styles.pathBasket}/>  
          </TouchableOpacity>
          <View style={styles.circle}>
              <Text style={styles.qtdItem}>3</Text>
          </View>
          </View>
        </View>
        <View style={styles.containerExplore}>
            <Text style={styles.txtExplore}> Explore</Text>    
            <View style={styles.btnSeeAll}>
                    <TouchableOpacity>
                        <Text style={styles.txtSeeAll}>See all</Text>
                    </TouchableOpacity>
                    <Icon name='angle-right' style={styles.iconSeeAll}/>
                </View> 
      </View>
        <View style={styles.rectangle1}>
            <View style={styles.containerLine}>
            <View style={styles.line}></View>
            </View>
            <View style={styles.containerTopOrder}>
                <Text style={styles.txtTopOrder}>Top Order</Text>
                <View style={styles.btnExploreNew}>
                            <TouchableOpacity>
                            <Text style={styles.txtNew}>4 New!</Text>
                            </TouchableOpacity>
                            <Icon name='angle-right' style={styles.iconNew}/>
                </View> 
            </View>
            
            <View style={styles.rectangle2}>
                <View style={styles.containerLine}>
                <View style={styles.line}></View>
                </View>
                <View style={styles.containerRowProduct}>
                    <View style={styles.containerColumn1}>

                        <View style={styles.containerProduct}>
                        <Text style={styles.txtProduct}>Kue Dadar Mandala</Text>     
                        <Text style={styles.txtQtProduct}>350g</Text>
                        </View>
                        <View style={styles.containerAvaible}>
                            <Text style={styles.txtAvalible}>4.9</Text>
                            <Icon name='star' style={styles.iconAvaible}/>
                        </View>
                    </View>
                    <View style={styles.containerColumn2}>
                        <Image source={require('../../../res/img/imgProduct.jpeg')} style={styles.imgProduct}/>
                    </View>
                </View>
                <View style={styles.containerAddProduct}>
                <View style={styles.pathQtd}>
                    <Icon name='sort-amount-asc'></Icon>
                    <Text style={styles.inputNumeric}>1</Text>
                    <Icon name='plus' style={styles.iconAdd}></Icon>
                </View>
                <View style={styles.containerPrice}> 
                <Text>$</Text>
                <Text style={styles.txtPrice}>14.99</Text>
                </View>
                </View>
                <Text style={styles.txtTitleAboutProduct}>About product</Text>
                <Text style={styles.txtAboutProduct}>Nam dapibus nisl vitae elit fringilla rutrum. Aeneam sollicitudin, erat alementum rutrum.</Text>
                <View style={styles.containerRodape}>
                    <TouchableOpacity style={styles.btnAddToCart} onPress={trocarPagina}>
                        <Text style={styles.txtAddToCart}>Add to cart</Text>
                    </TouchableOpacity>
                    <View style={styles.containerFavorite}>
                    <TouchableOpacity style={styles.iconFavorite}>
                    <Icon name='heart' style={styles.pathFavorite}/>
                </TouchableOpacity>
                <Text style={styles.txtNumberFavorite}>45</Text>
                </View>
                </View>
                
                
            </View>

       </View>
             </View>
   </Fragment>
  </ScrollView>
     

  )
 };
  
 Detail.navigationOptions = () =>{
  const opcoes ={
  title:"Detail"
  }
  if(Platform.OS == "android"){
    opcoes.header = null
  }


   return opcoes;
 }
 export default Detail;
  