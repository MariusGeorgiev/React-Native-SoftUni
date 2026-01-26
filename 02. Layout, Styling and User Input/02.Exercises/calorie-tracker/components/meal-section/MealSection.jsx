import { TouchableOpacity, View, Text } from "react-native";
import { Plus } from 'lucide-react-native'
import { styles } from "../../styles";
import MealCard from "../meal-card/MealCard";

export default function MealSection({
    onAddMeal,
    onDeleteMeal,
    meals,
    totalCalories,
}) {
    return (
        
        <View style={[styles.section, styles.mealSection]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,}} >

                <View> 
                    <Text style={{fontWeight: 'bold', fontSize: 20,}}>Meals</Text>
                    <Text>{totalCalories} cal</Text>
                </View>

            
                <TouchableOpacity hitSlop={10} onPress={onAddMeal}>
                    <Plus />
                </TouchableOpacity>
            </View>

            <View style={{gap: 10}}> 
                {meals.map((meal, index) => <MealCard key={index} {...meal} onDelete={onDeleteMeal} /> )}
            </View>

        </View>
    );
}