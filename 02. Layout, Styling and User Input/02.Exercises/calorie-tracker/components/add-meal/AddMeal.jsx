import { View, Modal, Text, TextInput, StyleSheet, Keyboard} from "react-native";
import Button from "../common/Button";
import { useState } from "react";
import uuid from "react-native-uuid";

export default function AddMeal({
    visible,
    onClose,
    onCreate,
}) {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0)

    const addPressHandler = () => {
        // Create new meal object
        const newMeal = { 
            id: uuid.v4,
            name, 
            calories: Number(calories) };

        // submit new meal to perent
        onCreate(newMeal);

        // close modal on submit
        onClose();

        // close keyboard on submit
        Keyboard.dismiss();
    }

    return (
        <Modal
            onRequestClose={onClose}
            transparent 
        > 
            <View style={styles.overlay}>

                <View style={styles.modal}>
                    <Text>Add meal</Text>

                    <View>
                        <Text>Food Name</Text>
                        <TextInput placeholder="e.g. Pizza slice" value={name} onChangeText={setName} />
                    </View>

                    <View>
                        <Text>Calories</Text>
                        <TextInput placeholder="0" keyboardType="number-pad" value={calories} onChangeText={setCalories} />
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                        <Button title="Back" type='secondary' onPress={onClose}/>
                        <Button title="Add" onPress={addPressHandler}/>
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