import React, {Fragment, useState, useEffect} from 'react';
import {
       View,
       Text,
       Platform, Image
  } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {Cabecalho} from '../../Components/Cabecalho';
import styles from '../Home/estilo';

 const Home = ({navigation}) => {
  
 const trocarPagina = () => {
    navigation.replace("Detail")
  }

  return (
    <View>
    <ScrollView maxHeight={723}>     
       
        <Fragment>

            <View style={styles.background}>
                <Cabecalho/>
                <View style={styles.container1}>
                    <View style={styles.menuDelivery}>
                        <Text style={styles.txtDelivery}>Delivery</Text>
                        <Image source={require('../../../res/img/iconmcdonalds.png')} style={styles.iconMcDonalds}/>   
                        <View style={styles.containerUpdate}>
                            <Text style={styles.txtUpdates}>Update at 17.17</Text>    
                            <View style={styles.containerIconDelivery}>
                                <Icon name='truck' style={styles.iconDelivery}/>
                            </View>
                        </View>        
                    </View>
                    <View style={styles.menuRecentOrders}>
                        <Image source={require('../../../res/img/iconlist.png')} style={styles.iconList}/>
                        <Text style={styles.txtRecent}>Recent</Text>
                        <View style={styles.containerQttItems}>
                            <Text style={styles.txtNumberItems}>56</Text>
                            <Text style={styles.txtItems}>Items</Text>
                        </View>                            
                    </View>
                </View>

                <View style={styles.container2}>
                    <View style={styles.menuBooks}>
                    <Image source={require('../../../res/img/iconcloche.png')} style={styles.iconRecipe}/>
                        <Text style={styles.txtDineIn}>Dine in</Text>
                        <View style={styles.containerRecipes}>
                            <Text style={styles.txtNumberBook}>10</Text>
                            <Text style={styles.txtBooks}>Books</Text>
                        </View> 
                    </View>
                    <View style={styles.menuExplore}>
                    <Image source={require('../../../res/img/iconfood.jpg')} style={styles.iconFood}/>
                        <Text style={styles.txtFood}>Explore</Text>
                        <View style={styles.btnExploreNew}>
                            <TouchableOpacity>
                            <Text style={styles.txtNew}>4 New!</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
                <View style={styles.containerDiscountAll}>
                    <Text style={styles.txtDiscount}>Personal Offer</Text>   
                    <View style={styles.btnDiscountAll}>
                    <TouchableOpacity>
                        <Text style={styles.txtDiscountAll}>See all</Text>
                    </TouchableOpacity>
                    <Icon name='angle-right' style={styles.iconDiscountAll}/>
                </View> 
                </View>
                <View style={styles.containerDiscount}>
                    <Image source={require('../../../res/img/baskingrobbins.png')} style={styles.logoBR}/>
                    <View style={styles.containerDiscount2}>
                    <Text style={styles.txtDiscountUpTo}>Discount up to</Text>
                    <Text style={styles.txtPercentageDiscount}>20%</Text>
                    <Text style={styles.txtDaysDiscount}>4 Days Remaining</Text>
                    </View>
                </View>
                
            </View>
        </Fragment>
               
       </ScrollView>
       <View style={styles.position}>
                    
                    <View style={styles.rodape}>
                        <TouchableOpacity style={styles.btnStore} onPress={(trocarPagina)}>
                            <Icon name='home' style={styles.iconStore}/>  
                            <Text style={styles.txtStore}>Store</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='search' style={styles.iconSearch}/>  
                        </TouchableOpacity>   
                        <TouchableOpacity>
                            <Icon name='credit-card' style={styles.iconPaymentType}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='user' style={styles.iconProfile}/>
                        </TouchableOpacity> 
                    </View>
                
            </View>
    
    </View>
  )
};
  
 
Home.navigationOptions = ({navigation}) =>{
  const opcoes = {
  title: navigation.getParam("nome")
  }
 if(Platform.OS == "android"){
   opcoes.header = null;
 }
  
     return opcoes;
}
export default Home;
  