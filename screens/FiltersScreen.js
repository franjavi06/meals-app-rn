import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton'

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The FilterScreen Screen</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerLeft: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={()=>{
                navData.navigation.toggleDrawer()
            }}/>
        </HeaderButtons>
        )
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FiltersScreen
