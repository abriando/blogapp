import React from "react";
import { Button, View, Text, Image, styles, TouchableOpacity, TextInput } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PostList from "../PostList";



function PostListScreen({ navigation }) {
  return (    
        <View style={{ flex: 1, flexDirection:'row', padding: 10, borderTopWidth:1 }}>
          <Text style={{padding:20, fontWeight:"bold", fontSize:20}}>Latest</Text>
          <Text style={{padding:20, fontWeight:"normal", fontSize:20, color:'gray'}}>Design</Text>
          <Text style={{padding:20, fontWeight:"normal", fontSize:20 , color:'gray'}}>Development</Text>
          <Text style={{padding:20, fontWeight:"normal", fontSize:20, color:'gray'}}>Management</Text>
        <View>
          <PostList/>
        </View>
        </View>
  );
}

export default PostListScreen;