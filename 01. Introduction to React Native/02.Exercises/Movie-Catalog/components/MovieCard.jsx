import { View, Text, Image, Button } from "react-native";

export default function MovieCard(props) {
    return (
       
        <View style={styles.container}>

            <View style={{ padding: 10 }}>
                <Image
                    style = {{ borderRadius: 5 }}
                    source={{
                        uri: props.imageUrl,
                        width: 100,
                        height: 148,
                    }}
                />
              </View>

              <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={{ marginBottom: 10 }}>{props.year}</Text>
                    <View style={{ width: 100 }}>
                        <Button title='Details' onPress={() => props.onPress(props.id)} />
                    </View>   
              </View>

        </View>

);

}

const styles = {
    container: {
        backgroundColor: '#fff',
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }

}