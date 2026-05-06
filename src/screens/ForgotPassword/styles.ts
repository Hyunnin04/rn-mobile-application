import { StyleSheet } from 'react-native';

const COLORS = {
  white: '#fff',
  black: '#000',
  primary: '#00bcd4',
  bgGray: '#fafafa',
  borderGray: '#e8e8e8',
  lightText: '#999',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  },
  backButton: {
    padding: 4,
    marginRight: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.black,
    letterSpacing: -0.5,
  },
  content: {
    padding: 24,
    paddingTop: 80,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: COLORS.bgGray,
    borderRadius: 8,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    marginTop: 28,
    paddingVertical: 12,
    borderRadius: 28,
  },
  submitButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
