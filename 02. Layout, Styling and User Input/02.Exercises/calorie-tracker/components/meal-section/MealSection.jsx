import { TouchableOpacity, View, Text } from "react-native";
import { Plus } from 'lucide-react-native'
import { styles } from "../../styles";

export default function MealSection({
    onAddMeal,
}) {
    return (
        
        <View style={[styles.section, styles.mealSection]}>
            <Text>Meals</Text>
            <TouchableOpacity hitSlop={10} onPress={onAddMeal}>
                <Plus />
            </TouchableOpacity>
        </View>
    );
}