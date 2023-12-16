import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from "react-native";

const cubos = [
    {
        codigo_cubo: 1,
        titulo_cubo: 'Cubos 3x3',
        imagem_cubo: require('../assets/3x3-1.jpg'),
    },
    {
        codigo_cubo: 3,
        titulo_cubo: 'Loucos',
        imagem_cubo: require('../assets/loucos.jpg'),
    },
    
    {
        codigo_cubo: 1,
        titulo_cubo: 'Lubrificantes',
        imagem_cubo: require('../assets/lubs.jpg'),
    },
    {
        codigo_cubo: 1,
        titulo_cubo: 'Todos os produtos',
        imagem_cubo: require('../assets/todos.jpeg'),
    },
    
];

// COMPONENTE DE ITEM DE RENDERIZAÇÃO
const cubosItem = ({ item }) => {
    return (
        <View style={styles.cubos_container}>
            
            <Image
                style={styles.cubos_image}
                source={item.imagem_cubo}
            />

            <View style={styles.cubos_text_container}>

                <Text style={styles.cubos_data}>{item.titulo_cubo}</Text>
                <Text style={styles.cubos_data}>{item.preco_cubo}</Text>

                <TouchableOpacity style={styles.cubos_button_details}>
                    <Text style={styles.cubos_button_text}> Ver Cubos </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
};

export default function Feedcuboss() {
    return (
        <SafeAreaView>

            <FlatList
                data={cubos}
                renderItem={cubosItem}
                ListEmptyComponent={<Text> NÃO A CUBOS </Text>}
                keyExtractor={cubos => cubos.codigo_cubo}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_title: {
        color: '#333',
        fontSize: 25,
        fontWeight: 'bold',
    },
    icone: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    cubos_list_header: {
        height: 100,
    },
    cubos_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CCC',
        marginBottom: 10,
        
    },
    cubos_image: {
        width: 180,
        height: 220,
        marginRight: 10,
        marginBottom: 10,
    },
    cubos_text_container: {
        width: 200,
        justifyContent: 'center',
    },
    cubos_data: {
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    cubos_author: {
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        textAlign: 'left',
        color: '#CCC',
        marginBottom: 10,
    },
    cubos_button_details: {
        alignItems: 'center',
        backgroundColor: '#057d2f',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    cubos_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});