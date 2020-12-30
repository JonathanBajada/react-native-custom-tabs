import * as React from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';


const Client = (props:any) => {
    return (
        <>
            <View style={styles.container} >
                <Text style={styles.text}>Bar</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    }
});


export default Client
