import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import request from './request';
import CharacterItem from './components/CharacterItem';

export default function App() {
  const { characters, loading, error } = useCharacters();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Star Wars Characters</Text>

      <View>
        {loading
          ? <ActivityIndicator size="large" color="#0000ff" />
          : <FlatList
              data={characters}
              renderItem={({item}) => <CharacterItem {...item} />}
              keyExtractor={(item, index) => index.toString() }
              contentContainerStyle={{ paddingBottom: 50 }}
          />
        }
        {error && <Text style={{ color: 'red' }}>Error fetching data</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch('https://swapi.dev/api/people')
    //   .then(response => response.json())
    //   .then(data => {
    //     setCharacters(data.results);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

    request.get('/people')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { characters, loading, error };
}
