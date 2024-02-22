import {View, Image, StyleSheet, Text, TextInput,TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native';


export default function AssetExample() {
  return (
    <View style={{backgroundColor:'black'}}>
    <View style={{height:'15%'}}></View>
    <View style={{backgroundColor:'black', height:'40%', alignItems:'center'}} >
     <Text style={{color:'white',fontSize:20}}>  <Image source={require('../assets/logo.jpg')} />MUVI</Text>
    <View style={{backgroundColor:'#26282C',  alignItems:'center',width:'100%',height:'1555%'}}>
    <Image style={{marginTop:'40%'}} source={require('../assets/image.jpg')} />
    <Text style={{alignItems:'center',fontWeight:'bold',color:'white',fontSize:'30'}}> Welcome to Muvi</Text>
     <Text style={{alignItems:'center',justifyContent:'center', color:'white',fontSize:20}}> Free movie streaming all your needs </Text>
     <Text style={{alignItems:'center',justifyContent:'center', color:'white',fontSize:20}}>everytime and everywhere.</Text>

     <View style={{ height:'20%', justifyContent:'center'}}>
     <TouchableOpacity style={{ backgroundColor: 'yellow', padding: 10, borderRadius: 5 }}>
      <Text style={{ color: 'black', textAlign: 'center' }}>watch movie</Text>
    </TouchableOpacity>
    <Text style={{ color: 'white', textAlign: 'center',padding:10 }}> Sign in</Text>
    </View>

</View>
</View>
</View>

    
  );
}