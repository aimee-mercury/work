import {View, Image, StyleSheet, Text, TextInput,TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native';


export default function AssetExample() {
  return (
    <View style={{}} >
    <View >
   <ImageBackground source={require('../assets/joker.jpg')} style={{width:'100%',height:'100%'}}>

 <View style={{ flex:1,  justifyContent:'center' }}>

 <View style={{ marginBottom:'1%',paddingLeft:20 }}>
  <Text style={{ color: 'white', fontWeight: 'bold',fontSize:32}}>Enjoy your favourite </Text> 
  <Text style={{ color: 'white', fontWeight: 'bold', marginBottom:'10%',fontSize:32 }}> movie everywhere</Text>
   </View>


<Text style={{ color: 'white',fontSize:18 ,paddingLeft:20 }}>Browse through our collection and discover hundreds of movie series that you'll love! </Text>
</View>
<View style={{ horizontalLine: {
    borderBottomColor: 'yellow',
    borderBottomWidth: 5,
    marginVertical: 10, 
  },}}></View>

 <TouchableOpacity style={{ backgroundColor: 'yellow', padding: 10, borderRadius: 5, float:'button',marginBottom:3,marginLeft:10,marginRight:10 }}>
      <Text style={{ color: 'black', textAlign: 'center' }}>Get Started</Text>
    </TouchableOpacity>

</ImageBackground>

 
</View>
</View>

    
  );
}