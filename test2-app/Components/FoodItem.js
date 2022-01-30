import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const FoodItem = (props) => {
    return(
        <View style = {styles.item}>
            <Text style = {styles.itemText}>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: 'pink',
        padding: 15,
        marginBottom: 10,
        borderradius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    itemText:{

    },
});
export default FoodItem;