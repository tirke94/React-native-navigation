import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feed from './screens/Feed';
import Settings from './screens/Settings'
import Notification from './screens/Notifications'
import TweetDetailsScreen from './screens/homeStack/TweetDetailsScreen'
// import { Ionicons } from '@expo/vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Payments from './screens/drawerScreens/Payments';

// Stack
const Stack = createNativeStackNavigator()
function StackGroup() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Feed' component={Feed} />
            <Stack.Screen name='TweetDetailScreen' component={TweetDetailsScreen}
                options={{
                    presentation: 'modal'
                }} />
        </Stack.Navigator>
    )
}


//Tab
const Tab = createBottomTabNavigator()
function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName
                    if (route.name === 'StackGroup') {
                        iconName = focused ? 'home' : 'home'
                    }
                    else if (route.name === 'Settings') {
                        iconName = focused ? 'cog' : 'cog'
                    }
                    else if (route.name === 'Notification') {
                        iconName = focused ? 'bell' : 'bell'
                    }
                    return <FontAwesomeIcon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#1da1f2',
                tabBarInactiveTintColor: 'gray'
            })}>
            <Tab.Screen name='StackGroup' component={StackGroup} options={{ headerShown: false, tabBarLabel: 'Tirke' }} />
            <Tab.Screen name='Settings' component={Settings} />
            <Tab.Screen name='Notification' component={Notification} />
        </Tab.Navigator>
    )
}

//drawer
const Drawer = createDrawerNavigator()

const DrawerGroup = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen name='TabGroup' component={TabGroup} />
            <Drawer.Screen name='Payments' component={Payments} />
        </Drawer.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            {/* <TabGroup /> */}
            <DrawerGroup />
        </NavigationContainer>
    )
}

export default Navigation;