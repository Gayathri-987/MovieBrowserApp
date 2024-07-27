// AppNavigator.js or wherever you define your navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import NowPlayingScreen from '../screens/NowPlayingScreen';
import PopularScreen from '../screens/PopularScreen';
import TopRatedScreen from '../screens/TopRatedScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Now Playing" component={NowPlayingScreen} />
    <Tab.Screen name="Popular" component={PopularScreen} />
    <Tab.Screen name="Top Rated" component={TopRatedScreen} />
    <Tab.Screen name="Upcoming" component={UpcomingScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/>
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
