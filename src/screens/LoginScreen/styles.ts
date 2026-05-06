import { StyleSheet } from 'react-native';

const COLORS = {
  white: '#fff',
  black: '#000',
  lightGray: '#f5f5f5',
  bgGray: '#fafafa',
  borderGray: '#e8e8e8',
  textGray: '#666',
  lightText: '#999',
  primary: '#00bcd4',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 40,
    textAlign: 'center',
    color: COLORS.black,
    letterSpacing: -0.5,
  },
  tabSwitcher: {
    flexDirection: 'row',
    marginBottom: 28,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.borderGray,
    gap: 0,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 2.5,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: COLORS.primary,
  },
  tabLabel: {
    fontSize: 16,
    color: COLORS.lightText,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  tabContent: {
    paddingHorizontal: 4,
    marginBottom: 24,
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
  forgotPassword: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export { COLORS };
