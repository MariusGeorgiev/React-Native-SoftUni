import { View, Modal, Text, TextInput, StyleSheet } from "react-native";
import Button from "../common/Button";

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

                    <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                        <Button title="Back" type='secondary'/>
                        <Button title="Add" />
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