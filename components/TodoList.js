import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TodoList(props) {
  return (
    <View style={styles.listContainer}>
      <Icon
        name={props.checked ? 'check' : 'square'}
        size={30}
        color='mediumaquamarine'
        style={{ marginLeft: 15 }}
        onPress={props.setChecked}
      />
      <Text onPress={props.setChecked} style={styles.listItem}>
        {props.text}
      </Text>
      <Icon
        name='trash-2'
        size={30}
        color='salmon'
        style={{ marginLeft: 'auto', paddingRight: 10 }}
        onPress={props.deleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  listItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 17,
    color: 'black',
  },
});
