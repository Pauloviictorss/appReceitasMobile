import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'

import api from '../../services/api'
import { FoodList } from '../../components/foodlist'


export function Search(){
    const route = useRoute();
    const [receipes, setReceipes] = useState([])

    useEffect(() => {
        async function fetchReceipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            console.log(response.data);
            setReceipes(response.data)
        }

        fetchReceipes();
    }, [route.params?.name])


    return(
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={receipes}
                keyExtractor={ (item) => String(item.id) }
                renderItem={( {item} ) => <FoodList data={item}/>}
                ListEmptyComponent={() => 
                    <View style={styles.nothing}>
                    <Image
                    source={require('../../../assets/sadSearch.png')}
                    style={styles.cover}
                    />
                </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    nothing:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingTop: 120
    },
    cover:{
        height: 300,
        width: 300
    }
})