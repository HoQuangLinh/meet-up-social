import { StyleSheet } from "react-native";
import { linear } from "react-native/Libraries/Animated/Easing";
import { COLORS,SIZES } from "../../constans/theme";

const styles = StyleSheet.create({
    container:{
        margin: 5,
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title:{
        color : COLORS.title,
        fontSize: SIZES.h4,
        marginVertical: 5,
    },
    textBtn:{
        color: COLORS.blue,
        fontSize: SIZES.h6,
        fontWeight: "700",
    },
    image:{

    },
    item:{
        width: SIZES.width / 2,
        height: 150,
    }
});
export default styles;