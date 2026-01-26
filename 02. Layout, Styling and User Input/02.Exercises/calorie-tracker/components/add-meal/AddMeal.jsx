import { Modal, Text } from "react-native";

export default function AddMeal({
    visible,
    onClose,
}) {
    return (
        <Modal
            onRequestClose={onClose}
        > 
            <Text>Add meal</Text>
        </Modal>
    )
}