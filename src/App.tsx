import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, createNavigationContainerRef, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import GetStarted from './pages/getStarted';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './slice/store';
import { Routes } from './route';
import { GraphQLClient,ClientContext } from 'graphql-hooks';

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();
export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}
export function onAddSuccess() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: Routes.TaskList,
          },
        ],
      })
    );
  }
}
export function onEditSuccess(name: string, index: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: name, params: { index }
          },
        ],
      }),
    );
  }
}

const client = new GraphQLClient({
  url:"https://admin-dev.deshabhimani.info/api/graphql"
})
function App(): JSX.Element {
  return (
    <ClientContext.Provider value={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName={Routes?.GetStarted}>
            <Stack.Screen options={{ headerShown: false }} name={Routes?.GetStarted} component={GetStarted} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    </ClientContext.Provider>
  );
}

export default App;
