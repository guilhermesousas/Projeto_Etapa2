import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateProduct from './src/screens/CreateProduct/';
import Home from './src/screens/Home/';
import Account from './src/screens/Account/';
import { MaterialIcons } from "@expo/vector-icons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#070A52", }, 
                    headerTintColor: '#FFF', 
                    headerTitleAlign: 'center', 
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateProduct" component={CreateProduct} options={{ title: 'Criar anotação' }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if(route.name == "Início"){
                        iconName = "home"
                    }else if(route.name == "Conta"){
                        iconName = "account-circle";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: "#00BFFF", 
                tabBarInactiveTintColor: "#fff", 
                tabBarStyle: {backgroundColor: "#070A52"}, 
                headerShow: true, 
                headerTintColor: "#FFF", 
                headerTitleAlign: "center", 
                headerStyle: {backgroundColor: "#070A52"},
            })}
        >
            <Tab.Screen name="Início" component={Home}/>
            <Tab.Screen name="Conta" component={Account}/>
        </Tab.Navigator>
    );
}