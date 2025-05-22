import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { BadgeCheckIcon } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-50">
        <ScrollView>
      <ComponentPreviewer props={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline"
    ],
    "defaultValue": "solid"
  },
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "error",
      "warning",
      "success",
      "info",
      "muted"
    ],
    "defaultValue": "muted"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  }
}}>
  {props => {
  return (
    <Badge size={props.size} variant={props.variant} action={props.action}>
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}}>
  {props => {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <HStack>
            <Heading size="sm">Ronald Richards</Heading>
            <Badge size="sm" variant="solid" action="success" className='ml-1'>
              <BadgeText>Verified</BadgeText>
              <BadgeIcon as={BadgeCheckIcon} className='ml-1'/>
            </Badge>
          </HStack>
          <Text size='sm'>Nursing Assistant</Text>
        </VStack>
      </HStack>
    </VStack>
  );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}}>
  {props => {
  return (
    <Box className='items-center'>
      <VStack>
        <Badge  
          className='z-10 self-end h-[22px] w-[22px] bg-red-600 rounded-full -mb-3.5 -mr-3.5'
          variant="solid"
        >
          <BadgeText className='text-white'>2</BadgeText>
        </Badge>
        <Button>
          <ButtonText>
            Notifications
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}