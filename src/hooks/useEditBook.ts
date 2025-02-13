import { Book, BookStatus } from '../types/book';

import { Alert } from 'react-native';
import { bookService } from '../services/bookService';
import { useState } from 'react';

export const useEditBook = (book: Book, onSuccess: () => void) => {
  const [bookName, setBookName] = useState<string>(book.name);
  const [isbn, setIsbn] = useState<string>(book.isbn);
  const [status, setStatus] = useState<BookStatus>(book.status);
  const [isPickerVisible, setPickerVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const statusOptions: Record<BookStatus, string> = {
    [BookStatus.AVAILABLE]: 'Available',
    [BookStatus.BORROWED]: 'Borrowed',
    [BookStatus.LOST]: 'Lost',
  };

  const handleUpdate = async (): Promise<void> => {
    if (!bookName.trim() || !isbn.trim()) {
      Alert.alert('Ciudado', 'Porfavor rellena todos los campos.');
      return;
    }

    setIsLoading(true);
    try {
      const updatedBook = {
        name: bookName.trim(),
        isbn: isbn.trim(),
        status: status,
      };

      await bookService.updateBook(book.id, updatedBook);
      Alert.alert('Bien hecho', 'El libro se actualizo correctamente.', [
        { text: 'OK', onPress: onSuccess },
      ]);
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
    handleUpdate,
  };
};
