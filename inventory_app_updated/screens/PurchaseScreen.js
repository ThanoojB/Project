
// Purchase Screen with category & product dropdown and price filter
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

export default function PurchaseScreen() {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View>
      <Text>Select Category</Text>
      <Picker selectedValue={category} onValueChange={setCategory}>
        <Picker.Item label="Vegetables" value="vegetables" />
        <Picker.Item label="Fruits" value="fruits" />
      </Picker>

      <Text>Select Product</Text>
      <Picker selectedValue={product} onValueChange={setProduct}>
        <Picker.Item label="Tomato" value="Tomato" />
        <Picker.Item label="Potato" value="Potato" />
      </Picker>

      <Text>Quantity</Text>
      <TextInput value={quantity} onChangeText={setQuantity} keyboardType="numeric" />

      <Text>Price</Text>
      <TextInput value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Button title="Add Purchase" onPress={() => {}} />
    </View>
  );
}
