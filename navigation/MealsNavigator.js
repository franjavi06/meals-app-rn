import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import FavoriteScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions =  {
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
}

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

export default createAppContainer(MealsFavTabNavigator)