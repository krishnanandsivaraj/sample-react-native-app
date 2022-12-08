import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './screens/Dasboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
  },
});
