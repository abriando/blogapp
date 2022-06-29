import React, { useState } from "react";
import { FlatList, SafeAreaView, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Latest",
  },
  {
    id: "2",
    title: "Design",
  },
  {
    id: "3",
    title: "Delelopment",
  },
  {
    id: "4",
    title: "Management",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const List = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? 'black' : 'gray';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Image
        style={{width:300,Height:300}}
        source={{uri: 'https://asset.kompas.com/crops/4iaYz1-f1wl_6w0ya56hqGCtEHE=/160x30:1440x884/750x500/data/photo/2021/04/07/606db2807c59c.jpg'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
  },
});

export default List;