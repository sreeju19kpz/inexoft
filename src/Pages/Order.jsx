import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomInputField from '../Components/InputField.Component.jsx/CustomInputField';
import {names} from '../Values/names';
import {products} from '../Values/products';

const Order = () => {
  const [typedName, setTypedName] = useState('');
  const [typedProduct, setTypedProduct] = useState('');
  const [user, setUser] = useState({});
  const [product, setProduct] = useState();
  const [sortedNames, setSortedNames] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState({});

  const onTypeName = text => {
    setTypedName(prev => {
      if (prev !== text) {
        setSortedNames(
          names?.filter(name => name?.name.includes(text.toLowerCase())),
        );
        return text;
      }
      return prev;
    });
  };
  const onTypeProduct = text => {
    setTypedProduct(prev => {
      if (prev !== text) {
        setSortedProducts(
          products?.filter(product =>
            product?.name.includes(text.toLowerCase()),
          ),
        );
        return text;
      }
      return prev;
    });
  };
  const fnClearNameArray = () => {
    setSortedNames([]);
  };
  const fnClearProductArray = () => {
    setSortedProducts([]);
  };
  const fnSetQuantity = text => {
    setQuantity(() => {
      setTotal(String(Number(text) * Number(price)));
      return Number(text);
    });
  };
  const addToCart = () => {
    setCart();
  };
  const customerNameRef = useRef();
  const productRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const subTotalRef = useRef();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
      contentContainerStyle={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 22,
          marginTop: 20,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Cart
      </Text>

      <Pressable
        style={{
          marginTop: 10,
          height: 20,
          alignSelf: 'flex-end',
          position: 'absolute',
          top: 20,
          right: '5%',
        }}>
        <Text style={{color: 'blue'}}>View Cart</Text>
      </Pressable>
      <CustomInputField
        ref={customerNameRef}
        title={'Customer Name'}
        placeholder={'Enter Username'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        // onSubmitEditing={focusPasswordRef}
        onChangeText={onTypeName}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(0,0,0,.6)'}
        returnKeyType={'next'}
        childrenStyles={styles.childrenStyles}
        value={typedName}>
        {typedName && customerNameRef.current.isFocused() && (
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              position: 'absolute',
              zIndex: 1,
            }}>
            {sortedNames.map(item => {
              return (
                <Pressable
                  style={{height: 30, backgroundColor: 'red'}}
                  onPress={() => {
                    setTypedName(item?.name);
                    setUser(item);
                    fnClearNameArray();
                  }}>
                  <Text>{item?.name}</Text>
                </Pressable>
              );
            })}
          </View>
        )}
      </CustomInputField>
      <CustomInputField
        ref={productRef}
        title={'select product'}
        placeholder={'select product'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        // onSubmitEditing={focusPasswordRef}
        onChangeText={onTypeProduct}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(0,0,0,.6)'}
        returnKeyType={'next'}
        childrenStyles={styles.childrenStyles}
        value={typedProduct}>
        {typedProduct && (
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              alignSelf: 'center',
              position: 'absolute',

              zIndex: 1,
            }}>
            {sortedProducts.map(item => {
              return (
                <Pressable
                  style={{height: 30, backgroundColor: 'red'}}
                  onPress={() => {
                    setTypedProduct(item?.name);
                    setProduct(item);
                    setPrice(() => {
                      setTotal(String(Number(quantity) * Number(item?.rate)));
                      return item?.rate?.toString();
                    });
                    fnClearProductArray();
                  }}>
                  <Text>{item?.name}</Text>
                </Pressable>
              );
            })}
          </View>
        )}
      </CustomInputField>
      <CustomInputField
        ref={priceRef}
        title={'price'}
        placeholder={'price'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        // onSubmitEditing={focusPasswordRef}
        onChangeText={{}}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(0,0,0,.6)'}
        returnKeyType={'next'}
        editable={false}
        value={price}
      />
      <CustomInputField
        ref={quantityRef}
        title={'quantity'}
        placeholder={'quantity'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        // onSubmitEditing={focusPasswordRef}
        onChangeText={fnSetQuantity}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(0,0,0,.6)'}
        returnKeyType={'next'}
        value={quantity}
      />
      <CustomInputField
        ref={subTotalRef}
        title={'sub total'}
        placeholder={'sub total'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        // onSubmitEditing={focusPasswordRef}
        onChangeText={{}}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(0,0,0,.6)'}
        returnKeyType={'next'}
        editable={false}
        value={total}
      />
      <View style={{width: '95%'}}>
        <Pressable
          style={{
            marginTop: 10,
            height: 20,
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: 'blue'}}>add to cart</Text>
        </Pressable>
      </View>
      <Pressable
        style={{
          marginTop: 20,
          height: 40,
          width: '95%',
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>buy</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    paddingHorizontal: 10,
    color: 'black',
    borderRadius: 10,
  },
  wrapperStyles: {
    width: '95%',
    padding: 10,
    elevation: 3,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: 'blue',
  },
  titleStyles: {
    paddingBottom: 10,
    fontSize: 16,
    color: 'black',
    lineHeight: 20,
  },
  childrenStyles: {bottom: 0, zIndex: 1},
});
export default Order;
