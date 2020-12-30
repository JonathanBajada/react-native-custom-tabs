import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

const Tab = ({ tab, onPress, icon, color, focused }) => {
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
		if (name === 'Profile') {
			return styles.profile;
		}
		if (name === 'Clients') {
			return styles.client;
		}
	};

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View>
				{tab.name === 'Treatment' ? (
					<Icon style={handleStyle(tab.name)} name={icon} size={28} />
				) : (
					<Icon style={[ handleStyle(tab.name), {} ]} name={icon} size={20} />
				)}
			</View>
			{/*<Text style={[ { color }, styles.text ]}>{tab.name === 'Treatment' ? '' : tab.name}</Text>*/}
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
	client: {
		marginTop: 5,
		marginBottom: 2
	},
	treatment: {
		marginBottom: 60
	},
	exercises: {
		marginTop: 5,
		marginBottom: 2
	},
	resources: {
		marginTop: 5,
		marginBottom: 2
	},
	profile: {
		marginTop: 5,
		marginBottom: 2
	},
	text: {
		fontSize: 10,
		marginBottom: Platform.OS === 'ios' ? 10 : 0
	}
});

/*style={tab.name === 'Treatment' ? styles.shadow : ''}
	
		width: 56,
		height: 56,
		marginBottom: 40,
		borderRadius: 100,
		overflow: 'hidden',
		elevation: 4,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		position: 'relative'
	
	
	*/

/*

		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={tab.name === 'Treatment' ? styles.shadow : ''}>
				<View>
					{tab.name === 'Treatment' ? (
						<Image style={[ handleStyle(tab.name) ]} source={icon} />
					) : (
						<Image style={[ handleStyle(tab.name), { tintColor: focused } ]} source={icon} />
					)}
				</View>
			</TouchableOpacity>
			<Text style={[ { color }, styles.text ]}>{tab.name === 'Treatment' ? '' : tab.name}</Text>
		</View>

		*/

/*
	{
		tab.name === 'Treatment' ? (
			<BoxShadow setting={tab.name === 'Treatment' ? shadowOpt : ''}>
				<Image style={[ handleStyle(tab.name) ]} source={icon} />
			</BoxShadow>
		) : (
			<Image style={[ handleStyle(tab.name), { tintColor: focused } ]} source={icon} />
		);
	}

		*/
