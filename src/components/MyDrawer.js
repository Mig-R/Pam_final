import { createDrawerNavigator } from '@react-navigation/drawer';

// IMPORTAÇÃO DAS TELAS NAVEGAVEIS NO DRAWERMENU
import Produtos from "../screens/Produtos";
import Categoria from "../screens/Categoria";
import Login from '../screens/Login';


// CRIAÇÃO DO NAVIGATOR DO DRAWERMENU
const Drawer = createDrawerNavigator();

// CONSTRUÇÃO DE UM FUNCTIONAL COMPONENT
export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Login'>

<Drawer.Screen
                name='Login'
                component={Login}
                options={{
                    title: "Home"
                    
                }}
            />


            <Drawer.Screen
                name='Produtos'
                component={Produtos}
                options={{
                    title: "Produtos",
            
                }}
            />

            <Drawer.Screen
                name='Categoria'
                component={Categoria}
                options={{
                    title: "Categorias",
                
                }}
            />


        </Drawer.Navigator>
    );

};