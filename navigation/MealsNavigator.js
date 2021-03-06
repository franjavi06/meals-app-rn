import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from "../screens/FiltersScreen";
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import FavoriteScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
  };

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
    }, 
    {
    defaultNavigationOptions: defaultStackNavOptions
    }
)

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
},
{
 defaultNavigationOptions: defaultStackNavOptions
}
)

const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions:{
        tabBarIcon: (tabInfo)=>{
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.primaryColor
    }},
    Favorites: {screen: FavNavigator, navigationOptions:{
        tabBarLabel: 'Favorites!',
        tabBarIcon: (tabInfo)=>{
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.accentColor
    }}
}

const MealsFavTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabScreenConfig,
    {
        activeColor: 'white',
        shifting: true
    }):createBottomTabNavigator(tabScreenConfig,
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    })

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen 
    },
    {
        //navigationOptions: {
        //    drawerLabel: 'Filters'
        //},
        defaultNavigationOptions: defaultStackNavOptions
    }
)    

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator, 
        navigationOptions:{
        drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans'
        }
    }
})



export default createAppContainer(MainNavigator)