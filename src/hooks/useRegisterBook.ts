import { Alert } from 'react-native';
import { BookStatus } from '../types/book';
import { bookService } from '../services/bookService';
import { useState } from 'react';

export const useRegisterBook = (onSuccess: () => void) => {
  const [bookName, setBookName] = useState<string>('');
  const [isbn, setIsbn] = useState<string>('');
  const [status, setStatus] = useState<BookStatus>(BookStatus.AVAILABLE);
  const [isPickerVisible, setPickerVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const statusOptions: Record<BookStatus, string> = {
    [BookStatus.AVAILABLE]: 'Disponible',
    [BookStatus.BORROWED]: 'Prestado',
    [BookStatus.LOST]: 'Perdido',
  };

  const handleSubmit = async (): Promise<void> => {
    if (!bookName.trim() || !isbn.trim()) {
      Alert.alert('Oye!', 'Llena todos los campos por favor.');
      return;
    }

    setIsLoading(true);
    try {
      const bookData = {
        name: bookName.trim(),
        isbn: isbn.trim(),
        status: status,
      };

      await bookService.createBook(bookData);
      Alert.alert('Así se hace', 'Libro nuevo registrado!', [
        { text: 'OK', onPress: onSuccess },
      ]);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Failed to register book';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
    handleSubmit,
  };
};
