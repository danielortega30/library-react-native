# Library Management App

A mobile application built with React Native and Expo for managing a library's book collection. This app allows users to view, search, add, edit, and manage books in the library system.

## Features

- View all books in the library
- Search books by name or ISBN
- Add new books to the library
- Edit existing book details
- View book status (Available, Borrowed, Lost)
- Real-time status updates

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Expo Go app on your mobile device

## Project Setup

```bash
$ npm install
```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

````plaintext
EXPO_PUBLIC_API_URL=https://library-nest-d6uq.onrender.com/api




## Compile and run the project

```bash
# development
$ npm run start


## Dependencies

### Main Dependencies
```json
{
  "@react-native-picker/picker": "^2.4.10",
  "@react-navigation/native": "^6.1.7",
  "@react-navigation/native-stack": "^6.9.13",
  "axios": "^1.4.0",
  "expo": "~49.0.8",
  "react": "18.2.0",
  "react-native": "0.72.4",
  "react-native-safe-area-context": "^4.7.1",
  "react-native-screens": "^3.24.0",
  "react-native-vector-icons": "^10.0.0"
}
```

### Dev Dependencies
```json
{
  "@babel/core": "^7.20.0",
  "@types/react": "~18.2.14",
  "typescript": "^5.1.3"
}
```


#### Project Structure

library-front/
├── src/
│   ├── components/     # Reusable components
│   ├── screens/        # Screen components
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files
│   └── types/          # TypeScript type definitions
├── App.tsx            # Root component
└── package.json       # Project dependencies


## Environment Variables
The application uses the following environment variables:

- EXPO_PUBLIC_API_URL : The base URL for the API server
## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License && Daniel Ortega.
````
