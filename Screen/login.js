import React from 'react';
import { View, TouchableOpacity, Text, Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
const Form = () => {
  return (
    <ScrollView style={{backgroundColor:'#26282C', width:'100%', height:'100%'}}>

      <TouchableOpacity style={{marginTop:30,flexDirection:'row'}}>
      <Icon name="arrow-back" size={24} color="yellow" />
        <Text style={{color:'white',fontSize:20}}>Login</Text>
      </TouchableOpacity>

 <View style={{backgroundColor:'#26282c',justifyContent:'center',alignItems:'center',height:'30%'}}>
    <View >
 <Text style={{color:'white',fontSize:30}}>  <Image source={require('../assets/logo.jpg')} />MUVI</Text>

</View>
<Text style={{color:'white',marginTop:15,fontSize:15}}>Please Login to enjoy more benefit and we</Text>
<Text style={{color:'white',fontSize:15}}>won't let you go.</Text>
</View>

     
      <View style={{color:'white'}}>
     
      <TextInput
          style={{ borderBottomWidth: 1, borderColor: 'transparent', marginBottom: 10 ,backgroundColor:'#26282c',color:'white'}}
          placeholder="Email Address"
          placeholderTextColor="gray"
          right={<TextInput.Icon name="email-outline" color={"orange"}/>}
        />
       
        <TextInput
          style={{ borderBottomWidth: 2, borderColor: '#26282c', marginBottom: 10 ,backgroundColor:'#26282c',color:'white'}}
          placeholder="Password"
          placeholderTextColor="gray"
          right={<TextInput.Icon name="lock-outline" color={"orange"}/>}
          secureTextEntry={true}
        />
     <Text style={{color:'yellow'}}>Forget Password</Text>
      </View>
      
  <View>

  <TouchableOpacity style={{ backgroundColor: '#fdd130', padding: 15, borderRadius: 5, float:'button',marginTop:20 }}>
      <Text style={{ color: 'black', textAlign: 'center' }}>Get Started</Text>
    </TouchableOpacity>
    <Text style={{ color: 'white', textAlign: 'center',marginTop:5,marginTop:5}}> or login with</Text>
  </View>
      
  <View>

<TouchableOpacity style={{ backgroundColor: 'black', padding: 15, borderRadius: 5, float:'button',marginTop:15 }}>
    <Text style={{ color: 'white', textAlign: 'center',marginTop:10 }}>
    <MaterialCommunityIcons name="apple" size={20} color="white" />   Sign Up with Apple</Text>
  </TouchableOpacity>
 
</View>

<View>

<TouchableOpacity style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, float:'button',marginTop:15}}>

      <Text style={{ color: 'black', textAlign: 'center' }}><MaterialCommunityIcons name="google" size={20} color="red" />   Sign Up with Google</Text>
    
  </TouchableOpacity>
  <Text style={{ color: 'white', textAlign: 'center',marginTop:20}}> Don't have an account </Text>
</View>

    </ScrollView>
  );
};
  
export default Form;