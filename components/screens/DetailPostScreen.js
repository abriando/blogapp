import React from "react";
import { Button, View, Text, Image, styles, TouchableOpacity, TextInput } from 'react-native';

function DetailPostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default DetailPostScreen;