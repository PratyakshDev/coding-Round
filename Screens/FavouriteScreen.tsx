import React, { useContext }  from "react";
import { Text, View , StyleSheet, FlatList, ScrollView } from "react-native";
import UserContext from "../Context/UserContext";


function FavouriteScreen() {
    const {user} = useContext(UserContext)
    console.log("USER",user)
    if (!user || !user.selectedColor || user.selectedColor.length === 0) {
        return <Text>No favorite colors found.</Text>;
    }
    return (
        <FlatList
        data={user.selectedColor} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Text>Title: {item.title}</Text>
                <Text>Hex: {item.hex}</Text>
                <View style={styles.previewOuterContainer}>
                <Text style={styles.text}>Preview: </Text>
                <View style={{height: 30, width: 40, backgroundColor: `#${item.hex}`}}></View>
            </View>
            </View>
        )}/>
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

export default FavouriteScreen;
