import React  from "react";
import { Text, View , StyleSheet} from "react-native";

function ColorDetailsScreen({route}: any) {
    const { color, title} = route.params;
    return (
        <View style={styles.mainContainer}>
          <Text style={styles.text}> Title: {title}</Text>
            <Text style={styles.text}>Hex code: {color}</Text>
            <View style={styles.previewOuterContainer}>
                <Text style={styles.text}>Preview: </Text>
                <View style={{height: 30, width: 40, backgroundColor: color}}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: 'center'
    },
    text: {
        fontSize: 18, 
        color: "black"
    },
    previewOuterContainer: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: 'center'
    },
});

export default ColorDetailsScreen;
