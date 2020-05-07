import React,{Fragment, useState} from 'react';
import {
  Text, 
  TextInput,
  ScrollView,
  View,
  Platform,
  Image
} from 'react-native'; 
import styles from './estilo'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


 const Registration = ({ navigation }) => {

  const trocarPagina = () => {
    navigation.replace("ForgotPassword")
  }
   return (
    <ScrollView style={{margintop:0}}>
     <Fragment>
      <View style={styles.background}>
        <View style={styles.head}>
          <TouchableOpacity>
          <View style={styles.iconBack}>
            <Icon name="chevron-left" style={styles.path} />  
          </View>
          </TouchableOpacity>
            <Text style={styles.headTitleText}>Sign up</Text>
        </View>
        <View style={styles.rectangle}>
        <View style={styles.welcomeView}>
            <Text style={styles.welcomeBack}>Registration</Text>
            <Text style={styles.welcomeDescription}>Fill your account detail</Text>
        </View> 
        <View style={styles.emailContainer}>
        <Icon name='user' style={styles.iconEmail}/>
        <TextInput
        style={styles.inputEmail}
        placeholder="First name"
        />
        </View>
        <View style={styles.emailContainer}>
        <Icon name='user' style={styles.iconEmail}/>
        <TextInput
        style={styles.inputEmail}
        placeholder="Last name"
        />
        </View>
        <View style={styles.emailContainer}>
        <Icon name='envelope' style={styles.iconEmail}/>
        <TextInput
        style={styles.inputEmail}
        placeholder="Email"
        />
        </View>
        <View style={styles.passwordContainer}>
          <Icon name='key' style={styles.iconKey}/>
          <TextInput
            style={styles.inputPass}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.containeIagree}>
          <Icon name='check-circle' style={styles.iconCheck}/>
          <Text style={styles.IAgree}>I agree to the Airi Teams</Text>
        </View>
       
       
       <TouchableOpacity style={styles.btnSignIn} onPress={trocarPagina}>
         <Text style={styles.txtSignIn}>Sign in</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.btnLogGoogle}>
       <Image source={require('../../../res/img/iconGoogle.png')} />
         <Text style={styles.txtLogGoogle}>Sign up with Google</Text>
       </TouchableOpacity>
       </View>
      </View>
   </Fragment>
  </ScrollView>
     

  )
 };
  
 Registration.navigationOptions = () =>{
  const opcoes ={
  title:"Registration"
  }
  if(Platform.OS == "android"){
    opcoes.header = null
  }


   return opcoes;
 }
 export default Registration;
  