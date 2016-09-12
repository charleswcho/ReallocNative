import { StyleSheet } from 'react-native'

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  },
  sub: {
    color: '#686868',
    fontSize: 12,
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    width: 150,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 30,
    borderRadius: 3,
    backgroundColor: '#1689e5'
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  }
});
