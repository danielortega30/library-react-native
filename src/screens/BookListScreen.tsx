import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getStatusColor, getStatusText } from '../utils/statusHelper';

import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../App';
import ScreenLayout from 'src/components/ScreenLayout';
import { TextInput } from 'react-native';
import { formatDate } from '../utils/dateFormatter';
import { useBookList } from '../hooks/useBookList';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'BookList'>;
};

const BookListScreen: React.FC<Props> = ({ navigation }) => {
  const { books, loading, error, searchQuery, handleSearch } = useBookList();

  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <ScreenLayout onBack={handleBack}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearch}
            placeholder="Buscar libros..."
            placeholderTextColor="#666"
          />
        </View>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={() => (
            <View style={styles.listLoader}>
              {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
              ) : error ? (
                <Text style={styles.error}>{error}</Text>
              ) : (
                <View style={styles.emptyState}>
                  <Icon name="book-outline" size={48} color="#666" />
                  <Text style={styles.emptyText}>No se encontraron libros</Text>
                </View>
              )}
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BookDetails', { bookId: item.id })
              }
              style={styles.bookItem}
            >
              <View style={styles.bookContent}>
                <View style={styles.bookHeader}>
                  <Text style={styles.title}>{item.name}</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusColor(item.status) },
                    ]}
                  >
                    <Text style={styles.statusText}>
                      {getStatusText(item.status)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.isbn}>ISBN: {item.isbn}</Text>
                <Text style={styles.date}>
                  Agregado: {formatDate(item.createdAt)}
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  listContainer: {
    padding: 16,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookContent: {
    flex: 1,
  },
  bookHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    flex: 1,
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 10,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  isbn: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  listLoader: {
    padding: 40,
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  error: {
    color: '#F44336',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default BookListScreen;
