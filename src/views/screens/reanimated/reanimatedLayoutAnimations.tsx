import React, {useCallback} from 'react';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

const LIST_ITEM_COLOR = '#ba68c8';

interface Item {
  id: number;
}

export default function ReanimatedLayoutAnimations() {
  // [new Array(10).fill(0).map((_, index) => ({id: index})),
  const [items, setItems] = useState<Item[]>([]);

  const onAdd = useCallback(() => {
    setItems(currentItems => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1;
      return [...currentItems, {id: nextItemId}];
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {items.map((item, index) => {
          return <View key={item.id} style={styles.listItem} />;
        })}
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton} onPress={onAdd}>
        <Text style={styles.floatingButtonText}>{'+'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: LIST_ITEM_COLOR,
    height: 100,
    width: '90%',
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
  },
  floatingButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
