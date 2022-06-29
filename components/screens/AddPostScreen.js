import React from "react";
import { Button, View, Text, Image, styles, TouchableOpacity, TextInput } from 'react-native';
import GetContacts from "../GetContact";

function AddPostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GetContacts/>
    </View>
  );
}

export default AddPostScreen;