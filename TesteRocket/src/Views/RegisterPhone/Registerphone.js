import React,{Fragment, useState} from 'react';
import {
  Text, 
  TextInput,
  ScrollView,
  View,
  Platform,
  Image,
  TouchableWithoutFeedback, 
  Keyboard,
  TouchableOpacity, 
} from 'react-native'; 
import styles from './estilo'
import Icon from 'react-native-vector-icons/FontAwesome';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

 const RegisterPhone = ({ navigation }) => {

  const trocarPagina = () => {
    navigation.replace("PhoneVerification")
  }
 
   return (
    <ScrollView>
     <Fragment>
      <View style={styles.background}>
        <View style={styles.head}>
          <View style={styles.iconBack}>
            <Icon name="chevron-left" style={styles.pathBack} />  
          </View>
          <View style={styles.iconCancel}>
            <Icon name="times" style={styles.pathCancel} />  
          </View>
         
        </View>
        
        <DismissKeyboard>
          <View style={styles.rectangle}>
            <View>
              <Text style={styles.txtRegisterPhone}>Register phone</Text>
              <Text style={styles.txtEnteryourmobile}>Enter your mobile number to enable 2-step verification</Text>
              <View style={styles.phoneContainer}>
                <Image source={require('../../../res/img/iconreinounido.png')} style={styles.iconBandeira}/>              
                <TextInput
                keyboardType='numeric'
                keyboardAppearance='dark' 
                style={styles.inputPhone}
                placeholder="+62 85 - 747 - 015 - 554"
                />
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
         <Text style={styles.txtContinue}>Continue</Text>
       </TouchableOpacity>
                </View>
              </View> 
          </View>
        </View>
       </DismissKeyboard>

      
      </View>
   </Fragment>
  
        </ScrollView>
  )
 };
  
 RegisterPhone.navigationOptions = () =>{
  const opcoes ={
  title:"RegisterPhone"
  }
  if(Platform.OS == "android"){
    opcoes.header = null
  }


   return opcoes;
 }
 export default RegisterPhone;
  