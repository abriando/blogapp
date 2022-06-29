import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import { useState, useEffect } from 'react'
import fetchClient from './service/axios'

const GetContacts = () => {
  const url = "https://gorest.co.in/public/v2/users/1901020043/posts";
  const [status, setStatus] = useState('post');
  const [listUser, setListUser] = useState([])
  const [newUser, setNewUser] = useState({
    image: '',
    title: '',
    content: ''
  })

  //unntuk memanggil liset user
  const getUsers = async () => {
    try {
      const response = await fetchClient.get(url);
      setListUser(response.data.slice(0, 5))
    } catch (error) {
      console.log('Data fetching cancelled');
    }
  };

  const getUserDetail = async (id) => {
    try {
      const response = await fetchClient.get(url + `/${id}`);
      if (response) {
        const { image, title, content } = response.data;
        setNewUser({
          image: image,
          title: title,
          content: content,
        });
        setStatus('update')
      }
    } catch (error) {
      console.log('Data fetching cancelled');
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetchClient.delete(url + `/${id}`);
      if (response) {
        console.log(response)
        const { image, title, content } = response.data;
        setNewUser({
          image: image,
          title: title,
          content: content,
        });
        getUsers()
      }
    } catch (error) {
      console.log('Data fetching cancelled');
    }
  }



  //untuk menginput data
  const postUsers = async () => {
    try {
      const response = await fetchClient.post(url, newUser);
      if (response) {
        getUsers();
        setNewUser({
          image: '',
          title: '',
          content: '',
        });
      }
    } catch (error) {
      console.log('Data fetching cancelled', error.response);
    }
  };

  const updateUser = async () => {
    try {
      const response = await fetchClient.put(url + `/${newUser.id}`, newUser);
      if (response) {
        getUsers();
      }
    } catch (error) {
      console.log('Data fetching cancelled', error.response);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const clear = () => {
    setNewUser({
      image: '',
      title: '',
      content: '',
    });
    setStatus('post')
  }

  return (
    <ScrollView style={styles.container}>
      {listUser.length > 0 && listUser.map(user => {
        return (
          <View style={styles.hapus}>
            <TouchableOpacity style={styles.listContainer} onPress={() => getUserDetail(user.id)}>
              <Text>{user.image}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteUser(user.id)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

        )
      })}
      
      <View style={styles.textInputContainer}>
        <TextInput placeholder="image" style={styles.textInput} value={newUser.image} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, image: val };
          })
        }} />
        <TextInput placeholder="title" style={styles.textInput} value={newUser.title} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, title: val };
          })
        }} />
        <TextInput placeholder="content" style={styles.textInput} value={newUser.content} onChangeText={val => {
          setNewUser(prev => {
            return { ...prev, content: val };
          })
        }} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => status == 'post' ? postUsers() : updateUser()}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => clear()}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default GetContacts;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  textInputContainer: {
    marginTop: 20
  },
  textInput: {
    borderWidth: 2,
    marginBottom: 10
  },
  listContainer: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 3,
    width: '90%'
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    marginTop: 20
  },
  hapus: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});