import { useCallback, useEffect, useState } from 'react';

import { Book } from '../types/book';
import { bookService } from '../services/bookService';
import debounce from 'lodash/debounce';

export const useBookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchBooks = async (query: string) => {
    try {
      setLoading(true);
      const data = await bookService.searchBooks(query);
      setBooks(data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load books');
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      fetchBooks(query);
    }, 500),
    [],
  );

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    debouncedSearch(text);
  };

  useEffect(() => {
    fetchBooks('');
  }, []);

  return {
    books,
    loading,
    error,
    searchQuery,
    handleSearch,
  };
};
