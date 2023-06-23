import { useState, useEffect } from 'react'
import {Text, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native'
import { useIsFocused } from '@react-navigation/native'


import { FoodList } from '../../components/foodlist'
import { getFavorites } from '../../utils/storage'
import { View } from 'moti'

export function Favorites(){
    const [receipes, setReceipes] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        let isActive = true;

        async function getReceipes(){
            const result = await getFavorites("@appreceitas")
            if(isActive){
                setReceipes(result);
            }
        }

        if(isActive){
            getReceipes();
        }

        return () => {
            isActive = false;
        }

    }, [isFocused])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>

            {receipes.length === 0 && (
                <View style={styles.nothing}>
                    <Image
                    source={require('../../../assets/sadLike.png')}
                    style={styles.cover}
                    />
                </View>
            )}

            <FlatList
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 14 }}
                data={receipes}
                keyExtractor={ (item) => String(item.id) }
                renderItem={( {item} ) => <FoodList data={item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 40
    },
    title:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5
    },
    nothing:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '85%',
    },
    cover:{
        height: 300,
        width: 300
    }
})