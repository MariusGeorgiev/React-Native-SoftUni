import { useState } from 'react';
import { Text, View, Image, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const onPressHandler = () => {
    console.log('Pressed button');
    // alert('My First Functionallity!')
    setCount(oldCount => oldCount + 1);
  }

  return (
    <>
      <View>
        <Text style={{ color: 'black', fontSize: 36, textAlign: 'center', marginTop: 100 }}>
          Hello World!
        </Text>
        <Text style={{ color: 'black' }}>Secondar Heading</Text>
      </View>
      <View>
        <Image
          source={require('./assets/favicon.png')}
        />
        <Button
          title={show ? 'Hide' : 'Show'}
          onPress={() => setShow(state => !state)}
        />
        {show &&
          <Image
            source={{
              uri: 'https://www.appcoda.com/content/images/wordpress/2015/04/react-native.png',
              width: 200,
              height: 200,
            }}
          />
        }
        <Button
          title={`Counter ${count}`}
          onPress={onPressHandler}
        />
      </View>
    </>
  );
}
