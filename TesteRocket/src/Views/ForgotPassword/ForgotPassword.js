import React,{Fragment, useState} from 'react';
import {
  Text, 
  TextInput,
  View,
  Platform,
} from 'react-native'; 
import styles from './estilo'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


 const ForgotPassword = ({ navigation }) => {

  const trocarPagina = () => {
    navigation.replace("RegisterPhone")
  }

   return (
    <View style={{margintop:0}}>
     <Fragment>
      <View style={styles.background}>
        <View style={styles.head}>
          <TouchableOpacity>
          <View style={styles.iconBack}>
            <Icon name="times" style={styles.path} />  
          </View>
          </TouchableOpacity>
            
        </View>
        <View style={styles.rectangle}>
        <View style={styles.txtForgotView}>
            <Text style={styles.txtForgot}>Forgot password?</Text>
            <Text style={styles.txtEnteryour}>Enter your email  address to reset your password instruction</Text>
        </View> 
        <View style={styles.emailContainer}>
        <Icon name='envelope' style={styles.iconEmail}/>
        <TextInput
        style={styles.inputEmail}
        placeholder="Email"
        />
        </View>
        
     
       <TouchableOpacity style={styles.btnSend} onPress={(trocarPagina)}>
         <Text style={styles.txtSend}>Send link</Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Text style={styles.txtIcant}>I can't recorver my account using this page</Text>
       </TouchableOpacity>
       </View>
      </View>
   </Fragment>
  </View>
     

  )
 };
  
 ForgotPassword.navigationOptions = () =>{
  const opcoes ={
  title:"ForgotPassword"
  }
  if(Platform.OS == "android"){
    opcoes.header = null
  }


   return opcoes;
 }
 export default ForgotPassword;
  