import { StyleSheet } from "react-native";
import { linear } from "react-native/Libraries/Animated/Easing";
import { COLORS,SIZES } from "../../constans/theme";

const styles = StyleSheet.create({
    top: {
        backgroundColor: COLORS.primary,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    searchBox:{
        flexDirection: 'row',
        width: SIZES.width - 20,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 5,
    },
    search: {
        marginLeft: 10,
        color: COLORS.title,
    },
    location:{
        flexDirection:"row",
        marginBottom: 20,
    },
    location_end:{
        marginTop: 8,
        flexDirection:"row",
        marginLeft: "auto",
        marginRight:10,
        fontSize: SIZES.h4,
        fontWeight: "300",
    },
    title: {
        fontSize: SIZES.h2,
        color: COLORS.title,
        fontWeight: "bold",
    },
    title2: {
        fontSize: SIZES.h5,
        color: COLORS.blue,
        fontWeight: "800"
    },
    title3: {
        fontSize: SIZES.h5,
        color: COLORS.title,
        
    },
    title4: {
        fontSize: SIZES.h2,
        color: COLORS.title,
        marginLeft: 10,
        marginTop: 20,
    },
    findEvents_components: {
        flexDirection: "row",
        marginRight: 20,
        marginLeft: 20,
    },
    text_components:{
        flex:1,
        backgroundColor: COLORS.white,
        padding: 20,
        borderStyle: "solid",
        borderColor: COLORS.grey,
        borderWidth: 1,
    },
    findGroup:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: COLORS.white,
        padding: 10,
    },
    findGroupRight:{
        paddingLeft: 40,
    }
});
export default styles;