import { Button } from '@react-navigation/elements';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CatalogItem from '../components/Catalogitem';
import { items } from '../data';


export default function CatalogScreen() {


  return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, padding: 20}}>
           {items.map(item => (
                <CatalogItem key={item.id} {...item} />
           )) }
            
        </View>
  );

}

