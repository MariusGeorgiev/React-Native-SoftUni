import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CatalogScreen from './screens/CatalogScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
          <Stack.Navigator 
          initialRouteName='Home' 
          screenOptions={{
            headerStyle: {backgroundColor: '#c4a8a863'},
            headerTintColor: 'green',
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          <Stack.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
              title: 'Home Page',
              // headerTitle: () => <Text>Display Title</Text>,
              headerShow: true,
              headerTintColor: 'red',
              // orientation: 'landscape',
              headerSearchBarOptions: { placeholder: 'Search...',},
              headerRight: () => (
                <Text style={{ color: 'green', fontWeight: 'bold', }}>Right</Text>
              ),

            }}
          />
          <Stack.Screen name='About' component={AboutScreen} />
          <Stack.Screen name='Catalog' component={CatalogScreen} />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    )
}

const NestedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Catalog" component={CatalogScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
  );
}

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{tabBarIcon: ({ color, size}) => <Ionicons name="home" size={size} color={color} />}}
      />
      <BottomTabs.Screen 
        name='About' 
        component={AboutScreen}
        options={{tabBarIcon: ({ color, size}) => <Ionicons name="information-circle-outline" size={size} color={color} />}}
      />
      <BottomTabs.Screen 
        // name='Catalog'
        name='CatalogTab'
        component={NestedStackNavigator} 
        options={{tabBarIcon: ({ color, size}) => <Ionicons name="list-circle-outline" size={size} color={color} />,
        headerShown: false,
      }}
      />
    </BottomTabs.Navigator>
  )
}

const TopTabs = createMaterialTopTabNavigator();

const TopTabsNavigation = () => {

  const insets = useSafeAreaInsets();
  return (
    <TopTabs.Navigator screenOptions={{ tabBarStyle: { paddingTop: insets.top }}}>
        <TopTabs.Screen 
        name='Home' 
        component={HomeScreen} 
        // options={{tabBarIcon: ({ color, size}) => <Ionicons name="home" size={size} color={color} />}}
      />
      <TopTabs.Screen 
        name='About' 
        component={AboutScreen}
        // options={{tabBarIcon: ({ color, size}) => <Ionicons name="information-circle-outline" size={size} color={color} />}}
      />
      <TopTabs.Screen 
        name='Catalog' 
        component={CatalogScreen} 
        // options={{tabBarIcon: ({ color, size}) => <Ionicons name="list-circle-outline" size={size} color={color} />}}
      />
    </TopTabs.Navigator>

  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="About" component={AboutScreen}/>
      <Drawer.Screen name="Catalog" component={CatalogScreen}/>
      
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      
      <NavigationContainer>
          {/* <StackNavigator /> */}
          <BottomTabsNavigator />
          {/* <TopTabsNavigation /> */}
          {/* <DrawerNavigator /> */}
      </NavigationContainer>
      
    </SafeAreaProvider>
  );
}

