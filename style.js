import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
    },
    baslik: {
      height:60, 
      justifyContent:'center', 
      alignItems:'center', 
      borderRadius:10, 
      margin:2,
      
    },
    basliktxt: {
      color:'orange', 
      fontSize:30, 
      fontWeight:'bold',
    },
    satirview: {
      margin:2, 
      padding: 5, 
      flexDirection:'row', 
      borderBottomWidth:1, 
      borderBottomColor:'orange',
    },
    satirposter: {
      borderRadius:20, 
      borderWidth:2, 
      borderColor:'orange',
    },
    posterstil: {
      width:100, 
      height:100, 
      borderRadius:20, 
      margin:4,
    },
    satirbilgiler: {
      marginLeft:15, 
      flexDirection:'row',
    },
    sarkiadi: {
      fontSize:22, 
      fontWeight:'500', 
      color:'orange',
    },
    sarkituru: {
      fontSize:18, 
      color:'orange',
    },
    oynatbuton: {
      width:'20%', 
      height:40, 
      marginTop:50, 
      marginRight:10, 
      borderRadius:8, 
      flexDirection:'row', 
      alignItems:'center', 
      backgroundColor:'orange', 
      justifyContent:'center',
    },
    oynaktxt: {
      fontSize:20, 
      fontWeight:'bold', 
      color:'white',
    },
  });

  export default s;