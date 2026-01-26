import {StyleSheet} from 'react-native'

export const colors = {
  white: '#fff',
  background: '#F9FAFB',
}; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    boxShadow: [{offsetX: 2, offsetY: 3, blurRadius: 4, colors: 'rgba(200, 200, 200, 0.53)' }],
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor:'#edf2f7',
    borderRadius: 15,
    width: '90%',
    padding: 10,

  },
  header: {

  },

  heading: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },

  endSection: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#edf2f7',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,

  }
});