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
  error: '#d32f2f',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    padding: 24,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    flexGrow: 1,
  },
  contentWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 0,
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.lightText,
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 0,
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.bgGray,
    borderRadius: 8,
    fontSize: 16,
  },
  genderSection: {
    marginBottom: 24,
  },
  genderOptions: {
    flexDirection: 'row',
    gap: 28,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  genderLabel: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.error,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export { COLORS };
