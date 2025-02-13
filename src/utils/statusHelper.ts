export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'available':
      return '#4CAF50';
    case 'borrowed':
      return '#FF9800';
    case 'lost':
      return '#F44336';
    default:
      return '#666666';
  }
};

export const getStatusText = (status: string) => {
  switch (status.toLowerCase()) {
    case 'available':
      return 'Disponible';
    case 'borrowed':
      return 'Prestado';
    case 'lost':
      return 'Perdido';
    default:
      return status;
  }
};
