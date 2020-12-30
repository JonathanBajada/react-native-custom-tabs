import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

const Tab = ({ tab, onPress, icon, color, focused }) => {
	const handleStyle = (name: any) => {
		if (name === 'Bookings') {
			return styles.bookings;
		}
		if (name === 'Alerts') {
			return styles.alerts;
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
				{tab.name === 'Bookings' ? (
					<Icon style={handleStyle(tab.name)} color={color} name={icon} size={28} />
				) : (
					<Icon style={[ handleStyle(tab.name), {} ]} color={color} name={icon} size={20} />
				)}
			</View>
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
	bookings: {
		marginBottom: 60
	},
	alerts: {
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
