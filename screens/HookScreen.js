import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import TodoList from '../components/TodoList';
import Icon from 'react-native-vector-icons/Feather';

export default function HookScreen() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const count = todos.length;
  const todoWord = (todos) => {
    if (todos.length > 1) {
      return 'todos';
    }
    return 'todo';
  };

  const addTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue('');
    }
  };

  const setChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    if (todos.length > 0) {
      setTodos(
        todos.filter((todo) => {
          if (todo.key !== id) return true;
        })
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.welcomeText}>You have {count} todos.</Text>
      <View style={styles.buttonContainer}>
        {/* <Button
          onPress={() => setCount(count + 1)}
          title='Count up!'
          color='salmon'
          accessibilityLabel='Click this button to increase count'
        />
        <Button
          onPress={() => setCount(count - 1)}
          title='Count down!'
          color='salmon'
          accessibilityLabel='click this button to clear count'
        /> */}
      </View>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder='Feed me tasks!'
          placeholderTextColor='#abbabb'
          value={value}
          onChangeText={(value) => setValue(value)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <Icon name='plus' size={30} color='mediumaquamarine' />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%' }}>
        {todos.map((item) => (
          <TodoList
            text={item.text}
            key={item.key}
            setChecked={() => setChecked(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
            checked={item.checked}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    marginTop: '15%',
    fontSize: 25,
    color: 'salmon',
    paddingBottom: 10,
    textAlign: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'baseline',
    justifyContent: 'center',
    borderColor: '#abbabb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    width: '90%',
  },
  textInput: {
    flex: 1,
    alignSelf: 'center',
    height: 20,
    fontSize: 18,
    paddingLeft: 0,
    color: 'black',
    minHeight: '3%',
  },
  optionText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 1,
  },
  welcomeText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 1,
  },
});
