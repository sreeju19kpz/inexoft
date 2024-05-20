import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../Pages/Auth';
import Order from '../Pages/Order';

const Stack = createStackNavigator();

export default MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Auth} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};
