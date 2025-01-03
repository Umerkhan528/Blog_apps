import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Main = () => {
    return (
        <View style={style.container}>
            <View style={style.topContainer}>
                <Text style={style.headerTitle}>Leader Board</Text>
                <View style={style.mainCardContainer} >
                    {[3, 1, 2].map(
                        (index, item) => {
                            return (<View style={[style.mainCard, item !==1 && {marginTop:25}]} key={index}>
                                <Image style={style.mainCardImage}  source={{uri:"https://play-lh.googleusercontent.com/bZFgLx_6xeI8Vhoj7m88uoDNrOA3afmqLC8D6lZBZG5uF1XBTDCsLmVSTK4ub0y75tU=w526-h296-rw"}} style={style.mainCardImage} />
                                <Text style={style.mainCardTitle}>Imran</Text>
                                <View style={style.mainCardRankContainer}>
                                    <Text style={style.mainCardRankContainerText}>{index}</Text>
                                </View>
                            </View>);
                        })}
                </View>
            </View>
            <FlatList  style={style.flatlist} data={[1, 2, 3, 4, 5,6,7,8,9]}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <View style={style.card} key={index}>
                                <View style={style.cardDataContainer}>
                                    <Text style={style.cardIndex}>{index+1}</Text>
                                    <Image style={style.cardImage} source={{uri:"https://play-lh.googleusercontent.com/bZFgLx_6xeI8Vhoj7m88uoDNrOA3afmqLC8D6lZBZG5uF1XBTDCsLmVSTK4ub0y75tU=w526-h296-rw"}} />
                                    <Text style={style.cardTitle}>sachin</Text>
                                </View>
                                <View style={style.cardRankContainer}><Text style={style.cardRankTitle}>1000234</Text></View>
                            </View>
                        );
                    }
                } />
        </View>);
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4a4949"
    },
    topContainer: {
        padding: 30,
        height: "40%",
        backgroundColor: "#292929",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 600,
        paddingBottom: 20,
        color: "#ffffff"
    },
    mainCardContainer: {
        // backgroundColor: "white",
        height: "80%",
        width: "100%",
        flexDirection: "row",
        gap:10,
        justifyContent: "center",
        alignItems: "center"
    },
    mainCard: {
        height: "90%",
        padding: 20,
        width: 90,
        margin: 10,      
        borderRadius: 10,
        backgroundColor: "#4a4949",
        justifyContent: "space-between",
        alignItems: "center"
    },
    mainCardImage: {
        borderRadius:10,
        height:80,
        width:60,
    },
    mainCardTitle: { color: "white", fontSize:15, fontWeight:"bold" },
    mainCardRankContainer: {
        height:30,
        width:30,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:-16,        
        borderRadius:50,
        backgroundColor:"orange"
    },
    mainCardRankContainerText: {
        color: "#ffffff"
    },
    card: {
        borderRadius:10,
        paddingVertical:20,
        marginVertical:15,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-between"
    },
    cardDataContainer: {
        // backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"stretch"
    },
    cardIndex: {
        margin:20,
        color:"white"
    },
    cardImage: {
        height:70,
        width:70,
        borderRadius:50,
    },
    cardTitle: {margin:20,
        color:"white"
    },
    cardRankContainer: {},
    cardRankTitle: {color:"orange"},
    flatlist: { height: "70%", }
});

export default Main;