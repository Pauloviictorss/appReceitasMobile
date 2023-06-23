import {View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share} from 'react-native'
import { useLayoutEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Ingredients } from '../../components/ingredients'
import { Instructions } from '../../components/instructions'
import { isFavorite, saveFavorite, removeItem } from '../../utils/storage';

import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import { VideoView } from '../../components/video';

export function Detail(){
    const route = useRoute();
    const navigation = useNavigation();
    const [showVideo, setShowVideo] = useState(false);
    const [favorite, setFavorite] = useState(false)

    useLayoutEffect(() => {
        async function getStatusFavorites(){
            const receipeFavorite = await isFavorite(route.params?.data)
            setFavorite(receipeFavorite)
        }

        getStatusFavorites();

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={ () => handleFavoriteReceipe(route.params?.data) }>
                    {favorite ? (
                        <Entypo
                        name='heart'
                        size={28}
                        color={'#FF4141'}/>
                    ) : (
                        <Entypo
                        name='heart-outlined'
                        size={28}
                        color={'#FF4141'}/>
                    )}
                </Pressable>
            )
        })

    }, [navigation, route.params?.data, favorite])

    async function handleFavoriteReceipe(receipe){
        if(favorite){
            await removeItem(receipe.id)
            setFavorite(false);
        } else {
            await saveFavorite("@appreceitas", receipe)
            setFavorite(true);
        }
    }

    function handleOpenVideo(){
        setShowVideo(true);
    }

    async function shareReceipe(){
        try{
            await Share.share({
                url: "https://github.com/Pauloviictorss",
                message: `Receita: ${route.params?.data.name}\nIngredientes: ${route.params?.data.total_ingredients}\nVi no app +Food.`
            })
        }catch(error){
            console.log(error);
        }
    }

    return(
        <ScrollView contentContainerStyle={{paddingBottom: 14}} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable onPress={handleOpenVideo}>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={60} color={'#FAFAFA'}/>
                </View>
                <Image
                    source={{ uri: route.params?.data.cover }}
                    style={styles.cover}
                />
            </Pressable>

            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.ingredientsText}>Ingredientes: ({route.params?.data.total_ingredients})</Text>
                </View>
                <Pressable onPress={shareReceipe}>
                    <Feather name='share-2' size={24} color={'#FFF'}/>
                </Pressable>
            </View>

            {route.params?.data.ingredients.map((item) => (
                <Ingredients key={item.id} data={item}/>
            ))}

            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}>Modo de Preparo</Text>
            </View>

            {route.params?.data.instructions.map((item, index) => (
                <Instructions key={item.id} data={item} index={index}/>
            ))}

            <Modal visible={showVideo} animationType='slide'>
                <VideoView
                    handleClose={() => setShowVideo(false)}
                    videoUrl={route.params?.data.video}
                />
            </Modal>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F3F9FF',
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14,
    },
    cover:{
        height: 200,
        borderRadius: 14,
        width: '100%',
    },
    playIcon:{
        position: 'absolute',
        zIndex: 9,
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 18,
        marginTop: 14,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 4
    },
    ingredientsText:{
        marginBottom: 14,
        fontSize: 16,
        color: '#FFF',
    },
    headerDetails:{
        backgroundColor: '#FF0000',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 14,
        borderRadius: 5,
    },
    instructionsArea:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
        marginTop: 14
    },
    instructionsText:{
        fontSize: 18,
        fontWeight: 500,
        color: '#FFF',
        marginRight: 8
    }
})