import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tab = ({ color, tab, onPress, icon }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Image style={styles.icon} source={icon} />
			<Text style={{ color }}>{tab.name}</Text>
		</TouchableOpacity>
	);
};

export default Tab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		height: 24,
		width: 20
	}
});
