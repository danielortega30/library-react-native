import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Biblioteca Pública{'\n'}de México</Text>
        <Text style={styles.subtitle}>Sistema de Gestión de Libros</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RegisterBook')}
        >
          <Icon
            name="add-circle-outline"
            size={24}
            color="#fff"
            style={styles.buttonIcon}
          />
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Registrar Libro</Text>
            <Text style={styles.buttonSubtext}>
              Agregar un nuevo libro al catálogo
            </Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.catalogButton]}
          onPress={() => navigation.navigate('BookList')}
        >
          <Icon
            name="library-outline"
            size={24}
            color="#fff"
            style={styles.buttonIcon}
          />
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Ver Catálogo</Text>
            <Text style={styles.buttonSubtext}>Explorar todos los libros</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1a1a1a',
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  buttonContainer: {
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  catalogButton: {
    backgroundColor: '#5856D6',
  },
  buttonIcon: {
    marginRight: 16,
  },
  buttonContent: {
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  buttonSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
});

export default HomeScreen;
