import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Home, Plus } from 'lucide-react-native'
import { styles } from "./styles";
import MealSection from './components/meal-section/MealSection';
import AddMeal from './components/add-meal/AddMeal';
import { useMemo, useState } from 'react';

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
          </View>

          {/* Meal Section */}
         <MealSection onAddMeal={addMealPressHandler} meals={meals} totalCalories={totalCalories} />

         {/* Add meal modal */}
         { showAddMeal && <AddMeal onClose={() => setShowAddMeal(false)} onCreate={createMealHandler} />}

          {/* App Bar */}
          <View style={styles.endSection}>
            <Home />
            <TouchableOpacity onPress={addMealPressHandler}>
              <View style={{ width: 10, height: 10}}>
                <Plus />
              </View>
            </TouchableOpacity> 
          </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider> 
  );
}


