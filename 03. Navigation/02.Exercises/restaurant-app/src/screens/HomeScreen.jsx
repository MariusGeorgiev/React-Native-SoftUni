import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { featuredItems } from '../data/menuItems';
import Card from '../components/Card';

export default function HomeScreen() {

    return (
      <ScrollView>
            <View style={styles.header}>
                <Text style={styles.restaurantName}>Tasty Bites</Text>
                <View style={styles.headerInfo}>
                    <Text style={styles.infoText}>⭐ 4.8 Rating</Text>
                    <Text style={styles.infoDot}>●</Text>
                    <Text style={styles.infoText}>⏱️ 25-35 min</Text>
                </View>
                <Text style={styles.tagline}>Fresh & Delicious Food Delivered Fast</Text>
            </View>

            {/* Featured Section */}
       

            {/* Category Section */}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 24,
    paddingTop: 16,
    borderBottom: 28,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,

  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  infoDot: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.6,
    marginHorizontal: 8,
  },
  tagline: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },

});