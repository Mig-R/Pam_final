import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from "react-native";

const cubos = [
    {
        codigo_cubo: 1,
        titulo_cubo: '3x3',
        preco_cubo: '200,00',
        imagem_cubo: require('../assets/3x3-1.jpg'),
    },
    {
        codigo_cubo: 2,
        titulo_cubo: '2x2',
        preco_cubo: '30,00',
        imagem_cubo: require('../assets/2x2.jpg'),
    },
    {
        codigo_cubo: 3,
        titulo_cubo: '6x6',
        preco_cubo: '300,00',
        imagem_cubo: require('../assets/6x6.jpg'),
    },
    {
        codigo_cubo: 4,
        titulo_cubo: 'Combo',
        preco_cubo: '1200,00',
        imagem_cubo: require('../assets/combo.jpg'),
    },
    {
        codigo_cubo: 5,
        titulo_cubo: 'Mirror',
        preco_cubo: '250,00',
        
        imagem_cubo: require('../assets/mirror.jpg'),
    },
    {
        codigo_cubo: 6,
        titulo_cubo: 'Lubrificantes',
        preco_cubo: '150,00',
        imagem_cubo: require('../assets/lubs.jpg'),
    },
    {
        codigo_cubo: 7,
        titulo_cubo: '13x13',
        preco_cubo: '4600,00',
        imagem_cubo: require('../assets/13x13.jpg'),
    }
    
];

// COMPONENTE DE ITEM DE RENDERIZAÇÃO
const cuboItem = ({ item }) => {
    return (
        <View style={styles.cubo_container}>

            <Image
                style={styles.cubo_image}
                source={item.imagem_cubo}
            />

            <View style={styles.cubo_text_container}>

                <Text style={styles.cubo_data}>{item.titulo_cubo}</Text>
                <Text style={styles.cubo_data}>{item.preco_cubo}</Text>

                <TouchableOpacity style={styles.cubo_button_details}>
                    <Text style={styles.cubo_button_text}> Detalhes </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
};

export default function Feedcubos() {
    return (
        <SafeAreaView>

            <FlatList
                data={cubos}
                renderItem={cuboItem}
                ListEmptyComponent={<Text> A LISTA DE cuboS ESTÁ VAZIA </Text>}
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
    cubo_list_header: {
        height: 100,
    },
    cubo_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CCC',
        marginBottom: 10,
        
    },
    cubo_image: {
        width: 180,
        height: 220,
        marginRight: 10,
        marginBottom: 10,
    },
    cubo_text_container: {
        width: 200,
        justifyContent: 'center',
    },
    cubo_data: {
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    cubo_button_details: {
        alignItems: 'center',
        backgroundColor: '#057d2f',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    cubo_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    });