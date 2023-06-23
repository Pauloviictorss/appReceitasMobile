import { Text, StyleSheet } from 'react-native'

import { View } from 'moti'

export function Logo(){
    return(
        <View 
        style={styles.logoArea}
        from={{
            opacity: 0,
            translateX: -50,
        }}
        animate={{
            opacity: 1,
            translateX: 0
        }}
        transition={{
            delay: 200,
            type: 'spring',
            duration: 850
        }}
        >
            <Text style={styles.logo}>+Food</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        backgroundColor: '#FF0000',
        alignSelf: 'flex-start',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 16,
        marginBottom: 8,
        width: '100%'
    },
    logo:{
        fontSize: 16,
        fontWeight: 'bold', 
        color: '#FFF'
    }
})