import { View, Text, StyleSheet } from "react-native";

export function Ingredients({ data }) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(255, 0, 0, 0.09)',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4
    },
    name:{
        fontWeight: 500,
        fontSize: 16,
    }
})