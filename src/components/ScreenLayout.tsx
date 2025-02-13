import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';

import FloatingBackButton from './FloatingBackButton';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
  isLoading?: boolean;
  error?: string | null;
};

const ScreenLayout: React.FC<Props> = ({
  children,
  showBackButton = true,
  onBack,
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.error}>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {children}
      {showBackButton && <FloatingBackButton onPress={onBack} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default ScreenLayout;
