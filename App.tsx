import { Book } from './src/types/book';
import BookDetailsScreen from './src/screens/BookDetailsScreen';
import BookListScreen from './src/screens/BookListScreen';
import EditBookScreen from './src/screens/EditBookScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegisterBookScreen from './src/screens/RegisterBookScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  RegisterBook: undefined;
  BookList: undefined;
  BookDetails: { bookId: number };
  EditBook: { book: Book };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Biblioteca Pública de México',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterBook"
          component={RegisterBookScreen}
          options={{ title: 'Registrar Libro' }}
        />
        <Stack.Screen
          name="BookList"
          component={BookListScreen}
          options={{ title: 'Catálogo de Libros' }}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetailsScreen}
          options={{ title: 'Detalles del Libro' }}
        />
        <Stack.Screen
          name="EditBook"
          component={EditBookScreen}
          options={{ title: 'Edit Book' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
