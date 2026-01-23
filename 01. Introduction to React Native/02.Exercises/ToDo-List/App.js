import { useState } from 'react';
import {  Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [text, setText] = useState('')

  const [todos, setTodos] = useState([])

  const textChangeHandler = (value) => {
    
    setText(value);
  };

  const createTodoHandler = () => {

    if (!text) return alert('Missing Todo text!');

    const newTodo = {
      text,
      isCompleted: false,
    };

    setTodos(oldTodos => [...oldTodos, newTodo]);

    setText('');
  }

  return (
    <View style={styles.body}>
      
      <View>
        <Text style={styles.heading}>Todo list</Text>
        </View>
      
      <View style={styles.control}>
        <TextInput 
          placeholder='Go to the gym!'
          value={text}
          onChangeText={textChangeHandler}
        />
        <Button title='Create' onPress={createTodoHandler} />
      </View>
      
      <View>
        <Text>View</Text>
        </View>

    </View>
  );
}

const styles = {
  body: {
    padding:20,
    alignItems: 'center',
    gap: 30,

  },
  heading: {
    fontSize: 30,
    marginTop: 30,
    fontWeigh: 'bold',

  },

  control: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 5,

  },


}
