import {View, Text, TextInput} from 'react-native';
import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

const initalData = {};
export const MainContext = createContext(initalData);

export const ContextWrapper = ({children}) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <MainContext.Provider value={{showChildren, setShowChildren}}>
      {children}
    </MainContext.Provider>
  );
};

const CustomInputField = forwardRef(
  (
    {
      wrapperStyles,
      titleStyles,
      placeholder,
      onChangeText,
      onSubmitEditing,
      inputStyles,
      blurOnSubmit,
      title,
      placeholderTextColor,
      returnKeyType,
      children,
      childrenStyles,
      editable = true,
      value = '',
    },
    ref,
  ) => {
    const fnOnChangeText = text => {
      onChangeText(text);
    };
    return (
      <View style={wrapperStyles}>
        <Text style={titleStyles}>{title}</Text>
        <TextInput
          editable={editable}
          ref={ref}
          placeholder={placeholder}
          onChangeText={fnOnChangeText}
          onSubmitEditing={onSubmitEditing}
          style={inputStyles}
          blurOnSubmit={blurOnSubmit}
          placeholderTextColor={placeholderTextColor}
          returnKeyType={returnKeyType}
          value={value}
        />
        {<View style={childrenStyles}>{children}</View>}
      </View>
    );
  },
);

export default CustomInputField;
