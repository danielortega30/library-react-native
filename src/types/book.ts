export interface Book {
  id: number;
  name: string;
  isbn: string;
  status: BookStatus;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export enum BookStatus {
  AVAILABLE = 'available',
  BORROWED = 'borrowed',
  LOST = 'lost',
}
