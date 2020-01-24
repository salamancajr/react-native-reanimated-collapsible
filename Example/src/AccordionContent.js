import React, { useState } from 'react';
import AccordionContent from './AccordionWrapper';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  itemContainer: {
    marginBottom: moderateScale(50),
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'blue',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    height: 100,
    zIndex: 100,
    width: Dimensions.get('screen').width * 0.9,
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
  },
  textContainer: {
    width: Dimensions.get('screen').width * 0.8,
    paddingTop: moderateScale(20),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 40,
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(Platform.OS === 'ios' ? 20 : 7),
  },
  submitButton: {
    backgroundColor: '#eaea',
    borderWidth: 1,
    borderRadius: 40,
    marginVertical: moderateScale(20),
    paddingVertical: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AccordionItem = () => {
  const [title, updateTitle] = useState(1);
  const [expand, updateExpand] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => updateExpand(expand ? false : true)}
        style={styles.button}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>

      <AccordionContent {...{ expand }} {...this.props}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>State update counter: {title}</Text>
          <Text>
            Ipsum adipisicing Lorem anim ut ea do dolore anim nisi. Duis
            incididunt qui velit in occaecat duis ullamco id Lorem laboris
            reprehenderit eiusmod. Ullamco est anim enim ut est occaecat sint
            culpa anim officia.Ipsum adipisicing Lorem anim ut ea do dolore anim
            nisi. Duis incididunt qui velit in occaecat duis ullamco id Lorem
            laboris reprehenderit eiusmod. Ullamco est anim enim ut est occaecat
            sint culpa anim officia.
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                paddingLeft: 20,
              }}
              placeholder="Enter value"
            />
          </View>

          <TouchableOpacity
            onPress={() => updateTitle(title + 1)}
            style={styles.submitButton}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
            }}
            style={styles.image}
          />
        </View>
      </AccordionContent>
    </View>
  );
};

export default AccordionItem;
