import {
  ActivityIndicator,
  ScrollView,
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
import { RouteProp } from '@react-navigation/native';
import ScreenLayout from 'src/components/ScreenLayout';
import { formatDate } from '../utils/dateFormatter';
import { useBookDetails } from '../hooks/useBookDetails';

type Props = {
  route: RouteProp<RootStackParamList, 'BookDetails'>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const BookDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { bookId } = route.params;
  const { book, loading, error } = useBookDetails(bookId);

  const handleEdit = (): void => {
    if (book) {
      navigation.navigate('EditBook', { book });
    }
  };

  if (loading) {
    return (
      <ScreenLayout>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      </ScreenLayout>
    );
  }

  if (!book) return null;

  return (
    <ScreenLayout isLoading={loading}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="book"
            size={40}
            color="#007AFF"
            style={styles.headerIcon}
          />
          <Text style={styles.title}>{book.name}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>ISBN</Text>
              <Text style={styles.value}>{book.isbn}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Estado</Text>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(book.status) },
                ]}
              >
                <Text style={styles.statusText}>
                  {getStatusText(book.status)}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.dateSection}>
            <View style={styles.dateRow}>
              <View style={styles.dateInfo}>
                <Icon name="calendar-outline" size={20} color="#666" />
                <Text style={styles.dateLabel}>Creado</Text>
              </View>
              <Text style={styles.dateValue}>{formatDate(book.createdAt)}</Text>
            </View>

            <View style={styles.dateRow}>
              <View style={styles.dateInfo}>
                <Icon name="time-outline" size={20} color="#666" />
                <Text style={styles.dateLabel}>Última actualización</Text>
              </View>
              <Text style={styles.dateValue}>{formatDate(book.updatedAt)}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Icon
              name="create-outline"
              size={20}
              color="#FFF"
              style={styles.editIcon}
            />
            <Text style={styles.editButtonText}>Editar Libro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 16,
  },
  title: {
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
    overflow: 'hidden',
  },
  infoSection: {
    padding: 20,
  },
  infoRow: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 18,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  dateSection: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  dateValue: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    marginRight: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BookDetailsScreen;
