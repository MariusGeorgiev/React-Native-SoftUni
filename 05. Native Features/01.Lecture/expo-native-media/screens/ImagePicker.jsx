import { launchImageLibraryAsync, useMediaLibraryPermissions } from "expo-image-picker";
import { useState } from "react";
import { View, Text, ActivityIndicator, Button, Image } from "react-native";

export default function ImagePicker() {
    const [status, requestPermission] = useMediaLibraryPermissions();
    const [photo, setPhoto] = useState(null);

    if (!status) {
        return <ActivityIndicator />;
    }

    if (!status.granted) {
        return (
            <Button
                title="Grant Photo Permission"
                onPress={requestPermission}
            />
        );
    }
    return (
        <View>
            <Text>Photo Permission Granted! You can now access the media library.</Text>

            <Button title="Select Photo" onPress={async () => {
                // Logic to select photo goes here
                const result = await launchImageLibraryAsync({});
                console.log(result);
                if (!result.canceled) {
                    setPhoto(result.assets[0].uri);
                }
            }} />
            {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}