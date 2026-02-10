import { useCameraPermissions, launchCameraAsync } from "expo-image-picker"
import { useState } from "react";
import { ActivityIndicator, Button, View, Image } from "react-native";

export default function ImagePickerCameraDemo() {
    const [status, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState(null);

    if (!status) {
        return <ActivityIndicator />;
    }

    if (!status.granted) {
        return (
            <Button
                title="Grant Camera Permission"
                onPress={requestPermission}
            />
        );
    }

    return (
        <View>
            <Button
                title="Launch Camera"
                onPress={async () => {
                    const result = await launchCameraAsync({ quality: 0.5 });
                    console.log(result);
                    if (!result.canceled) {
                        setPhoto(result.assets[0].uri);
                    }
                }}
            />

            {photo && (
                <Image
                    source={{ uri: photo }} 
                    style={{ width: 300, height: 300, marginTop: 20 }}
                />
            )}
        </View>
    );
}
