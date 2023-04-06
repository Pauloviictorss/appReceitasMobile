import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

import {AntDesign} from '@expo/vector-icons'
import {WebView} from 'react-native-webview'

export function VideoView({handleClose, videoUrl}){
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleClose}>
                <AntDesign name="close" size={24} color={'#000'}/>
                <Text style={styles.backText}>Fechar</Text>
            </TouchableOpacity>

            <WebView
            style={styles.contentView}
            source={{uri: videoUrl}}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    backButton:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFF',
        height: 48,
        alignItems: 'center',
        paddingStart: 14
    },
    backText:{
        color: '#000',
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 14
    },
    contentView:{
        flex: 1,
        width: '100%'
    }
})