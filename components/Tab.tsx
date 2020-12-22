import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const Tab = ({ color, tab, onPress, icon }) => {
	const [ selected, setSelected ] = useState('');
	const handleStyle = (name: any) => {
		if (name === 'Treatment') {
			return styles.treatment;
		}
		if (name === 'Exercises') {
			return styles.exercises;
		}
		if (name === 'Resources') {
			return styles.resources;
		}
		return styles.icon;
	};

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Image style={handleStyle(tab.name)} source={icon} />
			<Text style={{ color }}>{tab.name === 'Treatment' ? '' : tab.name}</Text>
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
	},
	treatment: {
		height: 70,
		width: 70,
		marginBottom: 50
	},
	exercises: {
		height: 24,
		width: 30
	},
	resources: {
		height: 24,
		width: 25
	}
});
