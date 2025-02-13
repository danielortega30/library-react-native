import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { BookStatus } from '../types/book';
import FloatingBackButton from '../components/FloatingBackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';
import ScreenLayout from '../components/ScreenLayout';
import { useEditBook } from '../hooks/useEditBook';

type Props = {
  route: RouteProp<RootStackParamList, 'EditBook'>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const EditBookScreen: React.FC<Props> = ({ route, navigation }) => {
  const { book } = route.params;
  const {
    bookName,
    setBookName,
    isbn,
    setIsbn,
    status,
    setStatus,
    isPickerVisible,
    setPickerVisible,
    isLoading,
    statusOptions,
    handleUpdate,
  } = useEditBook(book, () => navigation.navigate('BookList'));

  return (
    <ScreenLayout isLoading={isLoading}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="create"
            size={40}
            color="#007AFF"
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Editar Libro</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.formSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre del Libro</Text>
              <TextInput
                style={styles.input}
                value={bookName}
                onChangeText={setBookName}
                placeholder="Ingrese el nombre del libro"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>ISBN</Text>
              <TextInput
                style={styles.input}
                value={isbn}
                onChangeText={setIsbn}
                placeholder="Ingrese el ISBN"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Estado del Libro</Text>
              <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setPickerVisible(true)}
              >
                <Text style={styles.pickerText}>{statusOptions[status]}</Text>
                <Icon name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.submitButton, isLoading && styles.buttonDisabled]}
              onPress={handleUpdate}
              disabled={isLoading}
            >
              <Icon
                name="save-outline"
                size={20}
                color="#FFF"
                style={styles.submitIcon}
              />
              <Text style={styles.submitButtonText}>
                {isLoading ? 'Actualizando...' : 'Actualizar Libro'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          visible={isPickerVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <TouchableOpacity
                  onPress={() => setPickerVisible(false)}
                  style={styles.doneButton}
                >
                  <Text style={styles.doneButtonText}>Listo</Text>
                </TouchableOpacity>
              </View>
              <Picker
                selectedValue={status}
                onValueChange={(itemValue: BookStatus) => setStatus(itemValue)}
                style={styles.picker}
                itemStyle={{
                  color: '#333',
                  fontWeight: 'bold',
                }}
              >
                <Picker.Item label="Disponible" value={BookStatus.AVAILABLE} />
                <Picker.Item label="Prestado" value={BookStatus.BORROWED} />
                <Picker.Item label="Perdido" value={BookStatus.LOST} />
              </Picker>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  card: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formSection: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  pickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  pickerText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitIcon: {
    marginRight: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 16,
    alignItems: 'flex-end',
  },
  doneButton: {
    padding: 4,
  },
  doneButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  picker: {
    height: 215,
  },
});

export default EditBookScreen;
