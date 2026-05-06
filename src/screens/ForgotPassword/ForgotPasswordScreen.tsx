import React, { useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from './styles';

type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
};

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { flex: 1, backgroundColor: '#fff' }]}
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          hitSlop={10}
        >
          <Text style={{ fontSize: 28, fontWeight: '300' }}>{'<'}</Text>
        </Pressable>
        <Text style={styles.title}>Reset Password</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {!submitted ? (
          <>
            <Text style={styles.description}>
              Enter your email address and we'll send you instructions to reset
              your password.
            </Text>

            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              mode="outlined"
              outlineColor="#f0f0f0"
              activeOutlineColor="#00bcd4"
              keyboardType="email-address"
              left={<TextInput.Affix text="✉️ " />}
              style={styles.input}
              contentStyle={{ fontSize: 16 }}
            />

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.submitButton}
              labelStyle={styles.submitButtonLabel}
            >
              Send Reset Link
            </Button>
          </>
        ) : (
          <>
            <Text style={styles.description}>
              ✓ Check your email for a password reset link. If you don't see it
              in the next few minutes, check your spam folder.
            </Text>

            <Button
              mode="contained"
              onPress={() => navigation.navigate('Login')}
              style={styles.submitButton}
              labelStyle={styles.submitButtonLabel}
            >
              Back to Login
            </Button>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
