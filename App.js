import { Component } from "react";
import { View, Text, Image, TouchableOpacity, Linking, ScrollView, } from 'react-native';
import s from "./style";
import Satir from "./satır";
// import {Satir} from "./satır";
//Propslar Componentlerin Alt Elamanıdır




export default class App extends Component {
  render () {
    return (
     
      <View style={s.container}>
        <View style={s.baslik}>
          <Text style={s.basliktxt}>Listeci Seçmeler</Text>
        </View>
       
      <ScrollView>
       <Satir 
       adi='bangs bang'
       tur='Slow Rock'
       url='https://www.youtube.com/watch?v=OEFa4ztm9P0'
       poster='https://i.ytimg.com/vi/pm3rDbXbZRI/maxresdefault.jpg' 
       
       />
       <Satir
       adi='bangs bang'
       tur='Slow Rock'
       url='https://www.youtube.com/watch?v=OEFa4ztm9P0'
       poster='https://cdns-images.dzcdn.net/images/cover/1713a2cead51e5f91a32c39302f83ddc/500x500.jpg' 

       />
       <Satir
       
       adi='bangs bang'
       tur='Slow Rock'
       url='https://www.youtube.com/watch?v=OEFa4ztm9P0'
       poster='https://i.ytimg.com/vi/rL1svMa518w/maxresdefault.jpg' 

       />
       <Satir
       
       adi='Hotel'
       tur='Slow Rock'
       url='https://www.youtube.com/watch?v=OEFa4ztm9P0'
       poster='https://i.ytimg.com/vi/GWUBpKSEYTQ/maxresdefault.jpg' 

       />
       <Satir
       
       adi='bangs bang'
       tur='Slow Rock'
       url='https://www.youtube.com/watch?v=OEFa4ztm9P0'
       poster='https://i.ytimg.com/vi/rL1svMa518w/maxresdefault.jpg' 

       />
       <Satir
       
       adi='bangs bang'
       tur='Slow Rock'
       url='https://www.youtube.com/watch?v=OEFa4ztm9P0'
       poster='https://i.ytimg.com/vi/rL1svMa518w/maxresdefault.jpg' 

       />
       
       </ScrollView>
      </View>
     
    )
  }
}