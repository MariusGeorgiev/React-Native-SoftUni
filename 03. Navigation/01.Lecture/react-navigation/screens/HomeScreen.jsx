import { Link } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}) {

        const catalogPressHandler = () => {
            navigation.navigate('Catalog')
    }

  return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

            <View>
                <Link screen={"About"}>About</Link>
            </View>
                <Pressable onPress={catalogPressHandler}>
                <Text>Catalog</Text>
                </Pressable>
            
            
        </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});