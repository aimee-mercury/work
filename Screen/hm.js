import {View, Image, StyleSheet, Text} from 'react-native';

export default function AssetExample() {
  return (
    <View style={{backgroundColor:'black', width:'100%', height:'100%',justifyContent:'center',alignItems:'center'}}>
    <View >
 
    <Text style={{color:'white',fontSize:30}}>  <Image source={require('../assets/logo.jpg')} />MUVI</Text>
</View>
</View>

    
  );
}