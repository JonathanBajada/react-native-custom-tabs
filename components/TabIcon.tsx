import * as React from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';


const TabIcon = (props:any) => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image style={[styles.icon, props.iconStyle]} source={props.url}>{props.name}</Image>
                  
                </View>      
                <View>
                <Text style={styles.title}>{props.title}</Text>   
                </View>
            </View>
        </>
    )
}



export default TabIcon

const styles = StyleSheet.create({
	container: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute'
    },
    title: {
        fontSize: 10
    }


});