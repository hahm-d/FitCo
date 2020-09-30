import { StyleSheet, Dimensions } from "react-native";

const PRIMARY_COLOR = "#00FFFF";
const SECONDARY_COLOR = "#000000";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";
const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: WHITE,
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesTextCardItem: {
		color: WHITE
	},
	descriptionCardItem: {
		color: GRAY,
		textAlign: "center"
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: GRAY,
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: ONLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: OFFLINE_STATUS,
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},
	button3: {
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 19,
		shadowOffset: { height: 10, width: 0 }
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: WHITE,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: DARK_GRAY,
		shadowOffset: { height: 10, width: 0 }
	},

	// COMPONENT - FILTERS
	filters: {
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		width: 70,
		alignItems: "center",
		justifyContent: "space-between",
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	filtersDisplay: {
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		width: 200,
		alignItems: "center",
		justifyContent: "space-between",
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	filtersText: {
		
		color: DARK_GRAY,
		justifyContent: "space-between",
		alignItems: 'flex-end',
		fontSize: 15
	},
	filterList:{
		marginTop: 20,
		height: 30,
		width: 200,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		flexDirection: 'row',
		backgroundColor: GRAY,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},

	// COMPONENT - FOLLOWERS
	followerAvatar: {
		width: 150, 
		marginRight: 8,
		height: 200,
		borderRadius: 10
	},


	// COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
		width: DIMENSION_WIDTH - 100
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 15,
		textAlign: "center"
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
		
		fontSize: 12,
		color: DARK_GRAY,
		paddingHorizontal: 10
	},
	infoContent: {
		color: GRAY,
		fontSize: 13
	},

	// CONTAINER - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	bg2: {
		flex: 0.1,
		resizeMode: "cover",
		width: DIMENSION_WIDTH,
		height: DIMENSION_HEIGHT
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
	icon: {
		
		fontSize: 20,
		color: DARK_GRAY,
		paddingRight: 10
	},

	// CONTAINER - HOME
	containerHome: { 
		paddingTop: 20,
		marginHorizontal: 10 
	},

	// MODAL 
	modalView: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 25,
		alignItems: "center",
		shadowColor: "#000",
		width: "100%",
		height: "100%",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	nameStyle: {
		backgroundColor: SECONDARY_COLOR,
		width: '100%',
		padding: 8,
		elevation: 20,
		marginBottom: 30,
		marginTop: 60,
		color: "white",
		fontSize: 30,
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	openButton: {
		backgroundColor: SECONDARY_COLOR,
		borderRadius: 20,
		padding: 8,
		elevation: 20
	},
	modalButton: {
		backgroundColor: SECONDARY_COLOR,
		borderRadius: 20,
		padding: 8,
		elevation: 20,
		marginBottom: 30,
		marginTop: 60 
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		marginRight: 20,
		marginLeft: 20
	},
	exitButton: {
		color: "white",
		fontWeight: "bold",
		marginHorizontal: 20
	},
		// PROFILE PAGE
	userInfoSection: {
	paddingHorizontal: 30,
	marginBottom: 25,
	alignItems: 'center',
	justifyContent: 'center',
	},
	userSocialSection: {
	paddingHorizontal: 30,
	marginBottom: 25,
	},
	usertitle: {
	fontSize: 24,
	fontWeight: 'bold',
	},
	caption: {
	fontSize: 14,
	lineHeight: 14,
	fontWeight: '500',
	},
	userProfileRow: {
	flexDirection: 'row',
	marginBottom: 10,
	},
	userProfileRow2: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: 10,
	marginTop: 12
	},
	infoBoxWrapper: {
	borderBottomColor: '#dddddd',
	borderBottomWidth: 1,
	borderTopColor: '#dddddd',
	borderTopWidth: 1,
	flexDirection: 'row',
	height: 100,
	},
	infoBox: {
	width: '50%',
	alignItems: 'center',
	justifyContent: 'center',
	},
	menuWrapper: {
	marginTop: 10,
	alignItems: 'center',
	justifyContent: 'center'
	},
	menuItem: {
	flexDirection: 'row',
	paddingVertical: 15,
	paddingHorizontal: 30,
	},
	menuItemText: {
	color: '#777777',
	marginLeft: 20,
	fontWeight: '600',
	fontSize: 16,
	lineHeight: 26,
	}		
	});
