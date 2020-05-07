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
  navigation.replace("Notification")
}
   return (
    <ScrollView style={{margintop:0}}>
     <Fragment>
      <View style={styles.background}>
        <View style={styles.head}>
          <TouchableOpacity>
          <View style={styles.iconBack}>
            <Icon name="chevron-left" style={styles.pathBack} />  
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.iconCancel}>
            <Icon name="times" style={styles.pathCancel} />  
          </View>       
          </TouchableOpacity>
        </View>
        <View style={styles.rectangle}>
        <View style={styles.welcomeView}>
            <Text style={styles.txtPhoneVerification}>Phone Verification</Text>
            <Text style={styles.txtEnteryour}>Enter your otp code here</Text>
        </View> 
       <View style={styles.containerQuadros}>
        <TextInput style={styles.Quadro1}>
       </TextInput>
       <TextInput style={styles.Quadro2}>
         
         </TextInput>
         <TextInput style={styles.Quadro3}>
         
         </TextInput>
         <TextInput style={styles.Quadro4}>
         
         </TextInput>
         </View>
         <View style={styles.rectangle1}>
                <View style={styles.containerKeyboard}>
                  <View style={styles.containerRowKeyboard}>
                    <TouchableOpacity>
                      <Text style={styles.txtNumber}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.txtNumber}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.txtNumber}>3</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.containerRowKeyboard}>
                  <TouchableOpacity>
                      <Text style={styles.txtNumber}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.txtNumber}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.txtNumber}>6</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.containerRowKeyboard}>
                  <TouchableOpacity>
                      <Text style={styles.txtNumber}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.txtNumber}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.txtNumber}>9</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.containerColumnKeyboard}>
                    <View style={styles.containerLastRowKeyboard}>
                      <TouchableOpacity>
                        <Text style={styles.txtNumber}>0</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={require('../../../res/img/iconremove.png')} style={styles.iconRemove}/>              
                      </TouchableOpacity> 
                    </View>
                  </View>
                  <TouchableOpacity style={styles.btnContinue} onPress={(trocarPagina)}>
         <Text style={styles.txtContinue}>Next</Text>
       </TouchableOpacity>
                </View>
              </View> 
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
  