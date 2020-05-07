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


 const Login = ({ navigation }) => {

  const trocarPagina = () => {
    navigation.replace("Registration")
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
            <Text style={styles.headTitleText}>Sign in</Text>
        </View>
        <View style={styles.rectangle}>
        <View style={styles.welcomeView}>
            <Text style={styles.welcomeBack}>Welcome back</Text>
            <Text style={styles.welcomeDescription}>Enter your credential login</Text>
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
          <Icon name='eye' style={styles.iconSecurity}/>
        </View>
       
       <TouchableOpacity style={styles.btnSignIn} onPress={trocarPagina}>
         <Text style={styles.txtSignIn}>Sign in</Text>
       </TouchableOpacity>
       <TouchableOpacity>
         <Text style={styles.forgoutYour}>Forgout your password</Text>
       </TouchableOpacity>
       <View style={styles.containerOr}>
        <Image source={require('../../../res/img/linha.png')} style={styles.linha2}/>
         <Text style={styles.txtOr}>or</Text>
        <Image source={require('../../../res/img/linha.png')} style={styles.linha2}/>
       </View>
       <TouchableOpacity style={styles.btnCreateAccount}>
         <Text style={styles.txtCreateAccount}>Create an account</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btnLogGoogle}>
       <Image source={require('../../../res/img/iconGoogle.png')} />
         <Text style={styles.txtLogGoogle}>Sign in with Google</Text>
       </TouchableOpacity>
       </View>
      </View>
   </Fragment>
  </ScrollView>
     

  )
 };
  
 Login.navigationOptions = () =>{
  const opcoes ={
  title:"Login"
  }
  if(Platform.OS == "android"){
    opcoes.header = null
  }


   return opcoes;
 }
 export default Login;
  