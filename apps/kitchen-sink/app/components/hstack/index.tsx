import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
        <ScrollView>
      <ComponentPreviewer props={{
  "space": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl"
    ],
    "defaultValue": "md"
  },
  "isReversed": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}} title={undefined}>
  {props => {
  return (
    <HStack space={props.space} reversed={props.isReversed}>
      <Box className="h-20 w-20 bg-primary-300" />
      <Box className="h-20 w-20 bg-primary-400" />
      <Box className="h-20 w-20 bg-primary-500" />
    </HStack>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={undefined}>
  {props => {
  return (
    <HStack space="md" reversed>
      <Box className="w-20 h-20 bg-primary-300"/>
      <Box className="w-20 h-20 bg-primary-400"/>
      <Box className="w-20 h-20 bg-primary-500"/>
    </HStack>
  );}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}