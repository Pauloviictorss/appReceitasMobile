import { View, Text, StyleSheet } from "react-native";

export function Instructions({ data, index }) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{index+1}. </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
        display: 'flex',
        flexDirection: "row",
        backgroundColor: 'rgba(255, 0, 0, 0.09)',
        borderRadius: 5,
        paddingVertical: 20,
        paddingLeft: 10,
        paddingRight: 30,

    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FF0000'
    },
    text:{
        lineHeight: 20
    }
})