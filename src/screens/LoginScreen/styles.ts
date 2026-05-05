import { StyleSheet } from 'react-native';

const COLORS = {
  white: '#fff',
  lightGray: '#f5f5f5',
  borderGray: '#e0e0e0',
  textGray: '#999',
  primary: '#00bcd4',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  tabSwitcher: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: COLORS.primary,
  },
  tabLabel: {
    fontSize: 16,
    color: COLORS.textGray,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  tabContent: {
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 16,
    backgroundColor: COLORS.lightGray,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 25,
  },
  submitButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPassword: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export { COLORS };
