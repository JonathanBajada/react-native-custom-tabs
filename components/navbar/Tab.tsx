import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

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
					<Image style={[ handleStyle(tab.name) ]} source={icon} />
				) : (
					<Image style={[ handleStyle(tab.name), { tintColor: focused } ]} source={icon} />
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
		height: 20,
		width: 16,
		marginTop: 5,
		marginBottom: 2
	},
	treatment: {
		height: 56,
		width: 56,
		marginBottom: 60
	},
	exercises: {
		height: 20,
		width: 30,
		marginTop: 5,
		marginBottom: 2
	},
	resources: {
		height: 20,
		width: 20,
		marginTop: 5,
		marginBottom: 2
	},
	profile: {
		height: 20,
		width: 18,
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
