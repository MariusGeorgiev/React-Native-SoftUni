import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Home, Plus } from 'lucide-react-native'
import { styles } from "./styles";
import MealSection from './components/meal-section/MealSection';
import AddMeal from './components/add-meal/AddMeal';
import { useMemo, useState } from 'react';
import Slider from '@react-native-community/slider'

export default function App() {

  const [showAddMeal, setShowAddMeal] = useState(false);
  const [meals, setMeals] = useState([]);

  const totalCalories = useMemo(() => meals.reduce((acc, meal ) =>  acc + meal.calories, 0), [meals]);

  const addMealPressHandler = () => {
    setShowAddMeal(true);
  };

  const createMealHandler = (meal) => {
    setMeals(state => [...state, meal]);
  }

   const deleteMealHandler = (mealId) => {
    setMeals(oldMeals => oldMeals.filter(meal => meal.id !== mealId))
  }

  return (

    <SafeAreaProvider> 
      <SafeAreaView style={styles.container}>
        
          {/* Header */}
          <View style={[styles.endSection, styles.header]}>
            <Text style={styles.heading}>Calorie Tracker</Text>
          </View>

          {/* Overview  */}
          <View style={styles.section}>
            <Text>Calorie Overview</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={3000}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              disabled
              value={totalCalories}
            />
          </View>

          {/* Meal Section */}
         <MealSection 
         onAddMeal={addMealPressHandler} 
         meals={meals} 
         totalCalories={totalCalories}
         onDeleteMeal={deleteMealHandler}
         />

         {/* Add meal modal */}
         { showAddMeal && <AddMeal 
            onClose={() => setShowAddMeal(false)} 
            onCreate={createMealHandler} 
          />}

          {/* App Bar */}
          <View style={styles.endSection}>
            <Home />
            <TouchableOpacity onPress={addMealPressHandler}>
                <Plus />
            </TouchableOpacity> 
          </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider> 
  );
}


