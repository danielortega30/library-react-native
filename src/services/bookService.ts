import { Book } from '../types/book';
import { apiBooks } from '../config/api';

export const bookService = {
  searchBooks: async (query: string = ''): Promise<Book[]> => {
    try {
      const response = await apiBooks.get(
        `/books/search?query=${encodeURIComponent(query)}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getBookById: async (id: number): Promise<Book> => {
    try {
      const response = await apiBooks.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createBook: async (bookData: Partial<Book>): Promise<Book> => {
    try {
      const response = await apiBooks.post('/books', bookData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateBook: async (id: number, bookData: Partial<Book>): Promise<Book> => {
    try {
      const response = await apiBooks.patch(`/books/${id}`, bookData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteBook: async (id: number): Promise<void> => {
    try {
      await apiBooks.delete(`/books/${id}`);
    } catch (error) {
      throw error;
    }
  },
};
