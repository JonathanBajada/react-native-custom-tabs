import { StyleSheet, Platform } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

export default StyleSheet.create({
	background_view: {
		flex: 1,
		backgroundColor: 'white'
	},
	tab_icon_treatment: {
		width: 20,
		height: 25,
		marginTop: vh(0.5)
	},
	tab_icon_exercise: {
		width: 28,
		height: 20,
		marginTop: vh(0.5),
		marginRight: vw(1)
	},

	tab_icon_upgrade: {
		width: 25,
		height: 22,
		marginTop: vh(0.5)
	},

	tab_icon_tool: {
		width: 24,
		height: 24,
		marginTop: vh(0.5)
	},

	tab_icon_profile: {
		width: 23,
		height: 25,
		marginTop: vh(0.5)
	},

	button: {
		width: vw(86),
		height: 52,
		alignSelf: 'center',
		backgroundColor: '#3c98e8',
		borderRadius: 35
	},

	button_new: {
		width: vw(86),
		height: 48,
		alignSelf: 'center',
		backgroundColor: '#31B2B7',
		borderRadius: 25
	},
	button_text_new: {
		alignSelf: 'center',
		fontFamily: 'SFProDisplay-Semibold',
		fontSize: 18,
		top: Platform.OS === 'ios' ? 13 : 0,
		color: 'white',
		flex: 1,
		flexDirection: 'row',
		textAlignVertical: 'center'
	},

	button_text_container: {
		flexDirection: 'row',
		alignSelf: 'center',
		// top: Platform.OS === 'ios' ? 13 : 0,
		flex: 1
	},
	button_text_new2: {
		alignSelf: 'center',
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		color: '#31B2B7',
		textAlignVertical: 'center'
	},

	button_new2: {
		width: vw(86),
		height: 48,
		alignSelf: 'center',
		borderRadius: 8,
		backgroundColor: '#d3edec'
	},

	button_text: {
		alignSelf: 'center',
		fontFamily: 'Roboto-Regular',
		fontSize: 19,
		top: Platform.OS === 'ios' ? vw(3.9) : 0,
		color: 'white',
		flex: 1,
		flexDirection: 'row',
		textAlignVertical: 'center'
	},

	header: {
		color: 'black',
		fontFamily: 'SFProDisplay-Medium',
		fontSize: 20,
		letterSpacing: 0.26
	},

	header_container: {
		borderBottomColor: '#E4E4E4',
		borderBottomWidth: 1,
		backgroundColor: 'white',
		marginHorizontal: vw(3.5)
	},

	tooltip_pointer: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 8,
		borderRightWidth: 8,
		borderBottomWidth: 10,
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: '#31B2B7',
		alignSelf: 'center'
	},
	close_icon: {
		width: 26,
		height: 27
	},

	ff_rm: {
		fontFamily: 'Roboto-Medium'
	},

	ff_rr: {
		fontFamily: 'Roboto-Regular'
	},

	ff_rl: {
		fontFamily: 'Roboto-Light'
	},

	ff_nr: {
		fontFamily: 'NunitoSans-Regular'
	},

	ff_sr: {
		fontFamily: 'SFProDisplay-Regular'
	},

	ff_ss: {
		fontFamily: 'SFProDisplay-Semibold'
	},
	ff_sts: {
		fontFamily: 'SFProText-Semibold'
	},
	ff_str: {
		fontFamily: 'SFProText-Regular'
	},
	ff_stm: {
		fontFamily: 'SFProText-Medium'
	},

	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	modalView: {
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 25,
		alignItems: 'center'
	},

	modalIcon: {
		fontSize: 39
	},

	header_button_active: {
		width: 50,
		height: 30,
		backgroundColor: '#31B2B7',
		borderRadius: 6,
		justifyContent: 'center'
	},

	header_button_inactive: {
		width: 50,
		height: 30,
		backgroundColor: '#A1DEDC',
		borderRadius: 6,
		justifyContent: 'center'
	},

	header_button_text: {
		fontSize: 15,
		color: 'white',
		// textAlign:'right',
		alignSelf: 'center'
	},

	dot_wrapper: {
		width: 30,
		height: 20,
		backgroundColor: '#EBEBEB',
		borderRadius: 8,
		alignSelf: 'flex-start'
	},

	small_dotwrapper: {
		width: 25,
		height: 17,
		backgroundColor: '#EBEBEB',
		borderRadius: 5
	},

	title: {
		fontFamily: 'Roboto-Medium',
		fontSize: 19,
		color: '#000000DE',
		marginBottom: 18,
		textAlign: 'center'
	},

	subtitle: {
		marginTop: 12,
		marginBottom: 14,
		fontSize: 14,
		color: '#9D9D9D',
		textTransform: 'uppercase',
		letterSpacing: 1.4
	},

	content: {
		fontSize: 15,
		color: '#9D9D9D',
		textAlign: 'center',
		marginBottom: 27,
		lineHeight: 20,
		width: 280
	},

	horizontal_divider: {
		borderTopWidth: 1,
		borderColor: '#E4E4E4',
		marginHorizontal: vw(5.5),
		marginBottom: vh(1)
	},
	horizontal_divider2: {
		borderTopWidth: 2.2,
		borderColor: '#E4E4E4'
	},

	horizontal_divider3_small: {
		borderTopWidth: 2.2,
		borderColor: '#CBCBCB',
		width: 30
	},
	horizontal_divider4: {
		borderTopWidth: 1.5,
		borderColor: '#E4E4E4',
		marginBottom: vh(1)
	},

	triangle_tick: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		left: 3,
		bottom: 3,
		borderTopWidth: 60,
		borderRightWidth: 30,
		borderBottomWidth: 20,
		borderLeftWidth: 30,
		transform: [ { rotate: '-90deg' } ],
		borderTopColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: 'white',
		borderLeftColor: 'transparent'
	},

	outer_circle: {
		width: 17,
		height: 17,
		borderRadius: 17 / 2,
		borderWidth: 1
	},

	inner_circle: {
		width: 8,
		height: 8,
		borderRadius: 8 / 2
	},

	outer_circle_small: {
		width: 13,
		height: 13,
		borderRadius: 13 / 2,
		borderWidth: 1
	},

	inner_circle_small: {
		width: 7,
		height: 7,
		borderRadius: 7 / 2
	},

	vertical_line: {
		height: 30,
		width: 4,
		borderRadius: 5,
		backgroundColor: 'black',
		marginRight: vw(5)
	},

	add_container: {
		bottom: 12,
		justifyContent: 'center',
		alignItems: 'center',
		width: 80,
		height: 80,
		borderRadius: 80 / 2,
		backgroundColor: 'white',
		borderWidth: 0.9,
		borderTopColor: '#EFEFEF',
		borderColor: 'white'
	}
});
