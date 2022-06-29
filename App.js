import * as React from 'react';
import { Button, View, Text, Image, styles, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <TouchableOpacity style={{padding:20}}>
        <Entypo name="menu" size={35} color="black" />
        </TouchableOpacity>
        <ScrollView>
        <View style={{paddingLeft: 20}}>
          <Text style={{fontSize:40, fontWeight:'bold', width:250}}>
            This is where we tell stories
          </Text>
          <Text style={{paddingTop:40, color:'gray',marginLeft:20}}>
            _________________________________________________________________
          </Text>
          <View style={{flexDirection:'row', marginTop:-5}}>
            <Text style={{paddingTop:10,fontSize:20, fontWeight:'bold', borderTopWidth:3, borderRadius:1}}>Latest</Text>
            <Text style={{fontSize:20,color:'gray', paddingTop:10, paddingLeft:30}}>Design</Text>
            <Text style={{fontSize:20,color:'gray', paddingTop:10, paddingLeft:30}}>Development</Text>
            <Text style={{fontSize:20,color:'gray', paddingTop:10, paddingLeft:30}}>Management</Text>
          </View>
          <View style={{paddingTop:40}}>
            <Image
            style={{width:385,height:300}}
            source={{uri:'https://asset.kompas.com/crops/4iaYz1-f1wl_6w0ya56hqGCtEHE=/160x30:1440x884/750x500/data/photo/2021/04/07/606db2807c59c.jpg'}}
            />
          </View>
          <Text style={{paddingTop:30}}>
            ___________________________________________________________________
          </Text>
          <Text style={{fontSize:30, fontWeight:'bold',paddingTop:10}}>
            How Apple's M1 Chips Make macOS Development Much Less Costly
          </Text>
          <Text style={{paddingTop:10}}>
            ___________________________________________________________________
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text style={{paddingTop:20, color:'gray'}}>
            #Development  #Management
          </Text>
        </View>
      </ScrollView>
      <View style={{marginTop:-40, marginLeft:370}}>
        <Entypo name="message" size={40} color="black" />
      </View>
    </SafeAreaView>
  );
}