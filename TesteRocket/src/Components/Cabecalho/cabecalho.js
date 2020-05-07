import React, {Fragment} from 'react';
import {Text,
       Image,
       View,
  } from 'react-native'; 
import estilo from "./estilo"
import styles from '../../Views/Home/estilo'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cabecalho = () => {
    return (
    <View style={estilo.cabecalho}>
        <View style={estilo.cabecalho1}>
         <Image style={styles.containerImage}
            source={require('../../../res/img/avatar.png')}
         />
            <View style={styles.textHead}>
                <Text style={styles.hi}>Hi, </Text>
                <Text style={styles.userName}>Robson!</Text>
            </View>    
            <Text style={styles.headDescription}>Get ready to breakfast.</Text>        
        </View> 
        <View style={estilo.cabecalho2}>
            <TouchableOpacity style={styles.containerIconNotify}>
                <Icon name='bell' style={styles.iconNotify}/>
            </TouchableOpacity>
        </View>
    </View>
    
    );
    
}

export default Cabecalho;