/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AccordionItem from './AccordionItem';
import { ScrollView, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
        <ScrollView style={{ paddingTop: 20 }}>
          {[0, 1].map(i => (
            <AccordionItem key={i} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
