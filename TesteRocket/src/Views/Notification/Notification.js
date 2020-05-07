import React,{Fragment} from 'react';
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


 const Notification = ({ navigation }) => {

 const trocarPagina = () => {
  navigation.replace("Home")
}

   return (
    <ScrollView style={{margintop:0}}>
     <Fragment>
      <View style={styles.background}>
        <View style={styles.head}>
          <View style={styles.iconBack}>
            <Icon name="times" style={styles.path} />  
          </View> 
        </View>
        <View style={styles.rectangle}>
        <View style={styles.notificationView}>
            <Image source={require('../../../res/img/imgNotification.jpg')}/>
            <Text style={styles.notification}>Notification</Text>
            <Text style={styles.notificationDescription}>Stay notified about new food, updates, menu and recipes.</Text>
        </View> 
        <TouchableOpacity style={styles.btnAllow} onPress={trocarPagina}>
         <Text style={styles.txtAllow}>Allow Notification</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btnDontAllow} onPress={trocarPagina}>
         <Text style={styles.txtDontAllow}>Don't Allow</Text>
       </TouchableOpacity>
      
       </View>
      </View>
   </Fragment>
  </ScrollView>
     

  )
 };
  
 Notification.navigationOptions = () =>{
  const opcoes ={
  title:"Notification"
  }
  if(Platform.OS == "android"){
    opcoes.header = null
  }


   return opcoes;
 }
 export default Notification;
  