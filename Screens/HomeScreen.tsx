import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, StyleSheet, ScrollView, Alert } from "react-native";
import UserContext from "../Context/UserContext";

const colorData = [
    {
        "id": 10278613,
        "title": "Desert Rose",
        "userName": "ClaireDancer",
        "numViews": 1,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-28 05:11:32",
        "hex": "E27262",
        "rgb": {
            "red": 226,
            "green": 114,
            "blue": 98
        },
        "hsv": {
            "hue": 8,
            "saturation": 57,
            "value": 89
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/E27262\/Desert_Rose",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/E27262\/100\/100\/Desert_Rose.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278613_Desert_Rose.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/E27262"
    },
    {
        "id": 10278612,
        "title": "Grape",
        "userName": "ClaireDancer",
        "numViews": 1,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-28 05:04:14",
        "hex": "8333A2",
        "rgb": {
            "red": 131,
            "green": 51,
            "blue": 162
        },
        "hsv": {
            "hue": 283,
            "saturation": 69,
            "value": 64
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/8333A2\/Grape",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/8333A2\/100\/100\/Grape.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278612_Grape.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/8333A2"
    },
    {
        "id": 10278611,
        "title": "Fresh Leaves",
        "userName": "ClaireDancer",
        "numViews": 13,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-28 04:50:09",
        "hex": "52C349",
        "rgb": {
            "red": 82,
            "green": 195,
            "blue": 73
        },
        "hsv": {
            "hue": 116,
            "saturation": 63,
            "value": 76
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/52C349\/Fresh_Leaves",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/52C349\/100\/100\/Fresh_Leaves.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278611_Fresh_Leaves.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/52C349"
    },
    {
        "id": 10278610,
        "title": "Mint",
        "userName": "ClaireDancer",
        "numViews": 8,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-28 04:50:05",
        "hex": "98F891",
        "rgb": {
            "red": 152,
            "green": 248,
            "blue": 145
        },
        "hsv": {
            "hue": 116,
            "saturation": 42,
            "value": 97
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/98F891\/Mint",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/98F891\/100\/100\/Mint.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278610_Mint.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/98F891"
    },
    {
        "id": 10278609,
        "title": "Conformable",
        "userName": "Bubbletripper",
        "numViews": 25,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 21:42:28",
        "hex": "7D66CF",
        "rgb": {
            "red": 125,
            "green": 102,
            "blue": 207
        },
        "hsv": {
            "hue": 253,
            "saturation": 51,
            "value": 81
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/7D66CF\/Conformable",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/7D66CF\/100\/100\/Conformable.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278609_Conformable.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/7D66CF"
    },
    {
        "id": 10278608,
        "title": "Biddable",
        "userName": "Bubbletripper",
        "numViews": 5,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 21:29:02",
        "hex": "E74B6E",
        "rgb": {
            "red": 231,
            "green": 75,
            "blue": 110
        },
        "hsv": {
            "hue": 347,
            "saturation": 68,
            "value": 91
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/E74B6E\/Biddable",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/E74B6E\/100\/100\/Biddable.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278608_Biddable.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/E74B6E"
    },
    {
        "id": 10278607,
        "title": "Obedient",
        "userName": "Bubbletripper",
        "numViews": 3,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 21:29:01",
        "hex": "F69EA1",
        "rgb": {
            "red": 246,
            "green": 158,
            "blue": 161
        },
        "hsv": {
            "hue": 358,
            "saturation": 36,
            "value": 96
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/F69EA1\/Obedient",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/F69EA1\/100\/100\/Obedient.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278607_Obedient.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/F69EA1"
    },
    {
        "id": 10278606,
        "title": "Tiger Stripe",
        "userName": "ClaireDancer",
        "numViews": 13,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 19:09:59",
        "hex": "904A29",
        "rgb": {
            "red": 144,
            "green": 74,
            "blue": 41
        },
        "hsv": {
            "hue": 19,
            "saturation": 72,
            "value": 56
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/904A29\/Tiger_Stripe",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/904A29\/100\/100\/Tiger_Stripe.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278606_Tiger_Stripe.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/904A29"
    },
    {
        "id": 10278605,
        "title": "Garden Night",
        "userName": "Skiffy",
        "numViews": 6,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 16:28:27",
        "hex": "5D04EC",
        "rgb": {
            "red": 93,
            "green": 4,
            "blue": 236
        },
        "hsv": {
            "hue": 263,
            "saturation": 98,
            "value": 93
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/5D04EC\/Garden_Night",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/5D04EC\/100\/100\/Garden_Night.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278605_Garden_Night.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/5D04EC"
    },
    {
        "id": 10278604,
        "title": "Pink Hippies",
        "userName": "thesapphirerose",
        "numViews": 9,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 12:28:25",
        "hex": "CD3D5E",
        "rgb": {
            "red": 205,
            "green": 61,
            "blue": 94
        },
        "hsv": {
            "hue": 346,
            "saturation": 70,
            "value": 80
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/CD3D5E\/Pink_Hippies",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/CD3D5E\/100\/100\/Pink_Hippies.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278604_Pink_Hippies.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/CD3D5E"
    },
    {
        "id": 10278603,
        "title": "Vuvulani",
        "userName": "OrpheusJay",
        "numViews": 8,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 11:24:50",
        "hex": "14EFD9",
        "rgb": {
            "red": 20,
            "green": 239,
            "blue": 217
        },
        "hsv": {
            "hue": 174,
            "saturation": 92,
            "value": 94
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/14EFD9\/Vuvulani",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/14EFD9\/100\/100\/Vuvulani.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278603_Vuvulani.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/14EFD9"
    },
    {
        "id": 10278602,
        "title": "Immortan",
        "userName": "OrpheusJay",
        "numViews": 13,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 11:24:50",
        "hex": "B6471A",
        "rgb": {
            "red": 182,
            "green": 71,
            "blue": 26
        },
        "hsv": {
            "hue": 17,
            "saturation": 86,
            "value": 71
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/B6471A\/Immortan",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/B6471A\/100\/100\/Immortan.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278602_Immortan.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/B6471A"
    },
    {
        "id": 10278601,
        "title": "Sneaky Pink",
        "userName": "Skiffy",
        "numViews": 13,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 11:13:37",
        "hex": "E573BF",
        "rgb": {
            "red": 229,
            "green": 115,
            "blue": 191
        },
        "hsv": {
            "hue": 320,
            "saturation": 50,
            "value": 90
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/E573BF\/Sneaky_Pink",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/E573BF\/100\/100\/Sneaky_Pink.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278601_Sneaky_Pink.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/E573BF"
    },
    {
        "id": 10278600,
        "title": "Wastelanders",
        "userName": "OrpheusJay",
        "numViews": 24,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 11:12:36",
        "hex": "F6F016",
        "rgb": {
            "red": 246,
            "green": 240,
            "blue": 22
        },
        "hsv": {
            "hue": 58,
            "saturation": 91,
            "value": 96
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/F6F016\/Wastelanders",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/F6F016\/100\/100\/Wastelanders.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278600_Wastelanders.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/F6F016"
    },
    {
        "id": 10278599,
        "title": "0E0987",
        "userName": "",
        "numViews": 0,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 10:45:24",
        "hex": "0E0987",
        "rgb": {
            "red": 14,
            "green": 9,
            "blue": 135
        },
        "hsv": {
            "hue": 242,
            "saturation": 93,
            "value": 53
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/0E0987\/0E0987",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/0E0987\/100\/100\/0E0987.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278599_0E0987.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/0E0987"
    },
    {
        "id": 10278598,
        "title": "Broun",
        "userName": "rahulkumarssees",
        "numViews": 2,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 10:11:09",
        "hex": "6D5126",
        "rgb": {
            "red": 109,
            "green": 81,
            "blue": 38
        },
        "hsv": {
            "hue": 36,
            "saturation": 65,
            "value": 43
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/6D5126\/Broun",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/6D5126\/100\/100\/Broun.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278598_Broun.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/6D5126"
    },
    {
        "id": 10278597,
        "title": "Green",
        "userName": "rahulkumarssees",
        "numViews": 13,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 10:11:08",
        "hex": "1F7530",
        "rgb": {
            "red": 31,
            "green": 117,
            "blue": 48
        },
        "hsv": {
            "hue": 132,
            "saturation": 74,
            "value": 46
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/1F7530\/Green",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/1F7530\/100\/100\/Green.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278597_Green.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/1F7530"
    },
    {
        "id": 10278596,
        "title": "iron blue",
        "userName": "pinkruby.abbate",
        "numViews": 15,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 07:29:21",
        "hex": "677FB4",
        "rgb": {
            "red": 103,
            "green": 127,
            "blue": 180
        },
        "hsv": {
            "hue": 221,
            "saturation": 43,
            "value": 71
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/677FB4\/iron_blue",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/677FB4\/100\/100\/iron_blue.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278596_iron_blue.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/677FB4"
    },
    {
        "id": 10278595,
        "title": "rouge",
        "userName": "pinkruby.abbate",
        "numViews": 5,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 07:29:20",
        "hex": "BE80F2",
        "rgb": {
            "red": 190,
            "green": 128,
            "blue": 242
        },
        "hsv": {
            "hue": 273,
            "saturation": 47,
            "value": 95
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/BE80F2\/rouge",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/BE80F2\/100\/100\/rouge.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278595_rouge.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/BE80F2"
    },
    {
        "id": 10278594,
        "title": "\u2502",
        "userName": "MistyAamen",
        "numViews": 8,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2024-05-26 02:26:56",
        "hex": "BB0DF7",
        "rgb": {
            "red": 187,
            "green": 13,
            "blue": 247
        },
        "hsv": {
            "hue": 285,
            "saturation": 95,
            "value": 97
        },
        "description": "",
        "url": "http:\/\/www.colourlovers.com\/color\/BB0DF7\/\u2502",
        "imageUrl": "http:\/\/www.colourlovers.com\/img\/BB0DF7\/100\/100\/\u2502.png",
        "badgeUrl": "http:\/\/www.colourlovers.com\/images\/badges\/c\/10278\/10278594_.png",
        "apiUrl": "http:\/\/www.colourlovers.com\/api\/color\/BB0DF7"
    }
]

interface Color {
    id: number;
    title: string;
    userName: string;
    numViews: number;
    numVotes: number;
    numComments: number;
    numHearts: number;
    rank: number;
    dateCreated: string;
    hex: string;
    rgb: {
        red: number;
        green: number;
        blue: number;
    };
    apiUrl: string;
}

const HomeScreen = ({navigation}: any) => {
    const [selectedColor, setSelectedColor] =  useState<Color[]>([]);
    const {setUser, user} = useContext(UserContext)

    const handleFavouriteColors = (id: number) => {
        const colorToAdd = colorData.find(item => item.id === id);
        if (!colorToAdd) {
            return;
        }
        const colorExistsIndex = selectedColor.findIndex(color => color.id === id);
        if (colorExistsIndex !== -1) {
            const updatedSelectedColor = selectedColor.filter(color => color.id !== id);
            setSelectedColor(updatedSelectedColor);
            setUser({ ...user, selectedColor: updatedSelectedColor });
            Alert.alert("Removed from favorites");
        } else {
            const updatedSelectedColor = [...selectedColor, colorToAdd];
            setSelectedColor(updatedSelectedColor);
            setUser({ ...user, selectedColor: updatedSelectedColor });
            Alert.alert("Added to favorites");
        }
    };

    return (
        <ScrollView style={{flex: 1}}>
             <TouchableOpacity style={{flex: 1}} onPress={()=> navigation.navigate("FavouriteScreen",)}>
                    <Text>Favourite Screen </Text>
                </TouchableOpacity>
        <FlatList
            data={colorData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{flex: 1}}>
                <TouchableOpacity style={[styles.colorBox, { backgroundColor: `#${item.hex}` }]} 
                onPress={ () =>  navigation.navigate('ColorDetailsScreen', { color: `#${item.hex}`, title: item.title, })}>
               <Text style={styles.colorText}>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=> handleFavouriteColors(item.id)}>
                    <Text>Favourite</Text>
                </TouchableOpacity>
               
                </View>
            )}
        />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    colorBox: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    colorText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
        
export default HomeScreen;