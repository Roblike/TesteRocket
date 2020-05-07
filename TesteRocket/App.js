import React from 'react';
import Registration from './src/Views/Registration/Registration';
import Login from './src/Views/Login/Login';
import PhoneVerification from './src/Views/PhoneVerification/PhoneVerification';
import RegisterPhone from './src/Views/RegisterPhone/Registerphone';
import Home from './src/Views/Home/Home';
import Detail from './src/Views/Detail/Detail';
import ForgotPassword from './src/Views/ForgotPassword/ForgotPassword';
import Notification from './src/Views/Notification/Notification'
import { createStackNavigator } from "react-navigation-stack";
import{createAppContainer } from "react-navigation"



const navigator = createStackNavigator({
  Login :{ screen: Login}, 
  Registration : {screen:Registration},
  ForgotPassword:{screen:ForgotPassword},
  Notification:{screen:Notification},
  PhoneVerification:{screen:PhoneVerification},
  RegisterPhone:{screen:RegisterPhone},
  Home:{screen:Home},
  Detail:{screen:Detail},
  
})

const AppContainer = createAppContainer(navigator)

const App = () => {
  
 //declara uma nova variável de state que chamamos de count(fotos)
 //todo Hook inicia com use

  return (
   <AppContainer/>
  ) 
};
  
  export default App;
