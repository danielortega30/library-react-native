import { Book, BookStatus } from '../types/book';
import { useEffect, useState } from 'react';

import { bookService } from '../services/bookService';

export const useBookDetails = (bookId: number) => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadBookDetails = async (): Promise<void> => {
    try {
      const data = await bookService.getBookById(bookId);
      setBook(data);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Failed to load book details';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookDetails();
  }, [bookId]);

  return {
    book,
    loading,
    error,
  };
};
