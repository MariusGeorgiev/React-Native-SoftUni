import { View, Modal, Text, TextInput, StyleSheet } from "react-native";

export default function AddMeal({
    visible,
    onClose,
}) {
    return (
        <Modal
            onRequestClose={onClose}
            transparent
            style={{height: 300}}
        > 
            <View style={styles.overlay}>

                <View style={styles.modal}>
                    <Text>Add meal</Text>

                    <View>
                        <Text>Food Name</Text>
                        <TextInput placeholder="e.g. Pizza slice" />
                    </View>

                    <View>
                        <Text>Calories</Text>
                        <TextInput placeholder="0" keyboardType="number-pad"/>
                    </View>

                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>

                </View>

            </View>

        </Modal>
    )
};

export const styles = StyleSheet.create({ 
    overlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
    },
    modal: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        justifyContent: 'space-between'
        
    }

})