import { View, Text, Button } from "react-native";
import { getDocumentAsync } from 'expo-document-picker';
import { useState } from "react";

export default function DocumentPicker() {
    const [document, setDocument] = useState(null);
    console.log(document);
    return (
        <View>
            <Text>Document Picker Screen</Text>
            <Button title="Pick a Document" onPress={async () => {
                const result = await getDocumentAsync();
                setDocument(result.assets[0]);
            }} />

            {document && (
                <View>
                    <Text>Document Name: {document.name}</Text>
                    <Text>Document Size: {document.size} bytes</Text>
                </View>
            )}
        </View>
    );
}
