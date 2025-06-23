import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
        flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 20,
    },
  input: {
   flex: 1,
   color: '#fff',
   paddingLeft  : 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    width: '100%',
    height: 300,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },

});
