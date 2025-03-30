
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PurchaseScreen from './screens/PurchaseScreen';
import SalesScreen from './screens/SalesScreen';
import ChartScreen from './screens/ChartScreen';
import ProfitScreen from './screens/ProfitScreen';
import FilterScreen from './screens/FilterScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Purchase" component={PurchaseScreen} />
        <Tab.Screen name="Sales" component={SalesScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="Profit" component={ProfitScreen} />
        <Tab.Screen name="Filter" component={FilterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
