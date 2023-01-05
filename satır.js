import {Component} from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import s from "./style";

 // export class Satir extends Companent
 class Satir extends Component{
    render(){
      return(
  
        <View style={s.satirview}>
        <View style={s.satirposter}>
          <Image 
            source={{uri:this.props.poster}}
            style={s.posterstil}
          />
        </View>
  
  
  
          <View style={s.satirbilgiler}>
          <View style={{width:'60%'}}>
          <Text style={s.sarkiadi}>{this.props.adi}</Text>
          <Text style={s.sarkituru}>{this.props.tur}</Text>
          </View>
          <TouchableOpacity
            style={s.oynatbuton}
            onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=OEFa4ztm9P0')}
          >
            <Text>Oynat</Text>
          </TouchableOpacity>
          </View>
  
  
      </View>
       
      )
    }
  }

  export default Satir;
  
