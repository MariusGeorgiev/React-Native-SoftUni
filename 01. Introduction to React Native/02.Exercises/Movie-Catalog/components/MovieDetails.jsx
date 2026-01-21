import {Text, View, Image, Button} from "react-native";


export default function MovieDetails(props) {

    return (
        <View style={{alignItems: 'center', gap: 10, marginTop: 50}}>

            <Image
                style={{ borderRadius: 5 }}
                source={{
                    uri: props.movie.imageUrl,
                    width: 184,
                    height: 273,
                }}
            />

            <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>{props.movie.title}</Text>
            <Text>Year: {props.movie.year}</Text>
            <Text>Director: {props.movie.director}</Text>
            <Text>Genre: {props.movie.genre}</Text>
            <Text>Duration: {props.movie.duration} minutes</Text>

            <Button title="Go back" onPress={props.onClose} />
        
        </View>
    )
}