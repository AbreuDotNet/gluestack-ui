import { CodePreviewer } from '@/components/custom/code-previewer';
import { Box } from '@/components/ui/box';
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab';
import { AddIcon, EditIcon, SearchIcon, CheckIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from '@/components/ui/checkbox';
import { Image } from '@/components/ui/image';
import { Link } from '@/components/ui/link';
import { ShoppingCartIcon } from 'lucide-react-native';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function Example() {
  return (
    <Box className="h-[360px] w-80 bg-background-50 rounded-md">
      <Fab
        size="{{size}}"
        placement="{{placement}}"
        isHovered={ {{isHovered}} }
        isDisabled={ {{isDisabled}} }
        isPressed={ {{isPressed}} }
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Quick start</FabLabel>
      </Fab>
    </Box>
  )
}`}
  argTypes={{
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
  },
  "placement": {
    "control": {
      "type": "select"
    },
    "options": [
      "top left",
      "top center",
      "top right",
      "bottom left",
      "bottom center",
      "bottom right"
    ],
    "defaultValue": "bottom right"
  },
  "isHovered": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isPressed": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}
  reactLive={{ Box, Fab, FabIcon, FabLabel, AddIcon }}
/>

<CodePreviewer
  code={`function Example() {
  const data = [
    {
      uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Kevin James',
      msg: "Hi Rachel, What's up",
    },
    {
      uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Jacob Jones',
      msg: 'Good Morning!',
    },
    {
      uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Albert Flores',
      msg: 'Coffee?',
    },
  ];
  return (
    <Box className='border rounded-lg border-outline-200 p-6 bg-background-100 min-w-[240px] sm:min-w-[360px] md:min-w-[476px]'>
      <VStack space='md'>
        {data.map((chatData, index) => {
          return (
            <HStack space='sm' className='items-center' key={index}>
              <Avatar size='sm'>
                <AvatarImage
                  source=\\{{
                    uri: chatData.uri,
                  }}
                  alt="image"
                />
              </Avatar>
              <VStack>
                <Heading size='xs'>
                  {chatData.name}
                </Heading>
                <Text size='xs'>
                  {chatData.msg}
                </Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
      <Fab size='lg' className='bg-primary-600 hover:bg-primary-700 active:bg-primary-800'>
        <FabIcon as={EditIcon} color="white"/>
      </Fab>
    </Box>
  );
}`}
  argTypes={{}}
  reactLive={{ Fab, FabIcon, Box, VStack, HStack, Avatar, AvatarImage, Heading, Text, EditIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Box className='max-w-96 border rounded-lg border-outline-200 py-[56px] px-6 mx-5 bg-background-100'>
      <Fab className="top-4 h-10 bg-primary-600 hover:bg-primary-700 active:bg-primary-900 py-2">
        <FabIcon as={SearchIcon} />
        <FabLabel>Search</FabLabel>
      </Fab>
      <VStack space='lg'>
        <Box>
          <Text className='text-xs text-primary-600 font-bold'>
            HEALTH
          </Text>
          <Heading size='sm'>
            Benefits of Oranges
          </Heading>
          <Text size='xs' className='mt-1.5'>
            Oranges are a great source of vitamin C, which is essential for a healthy immune system.
          </Text>
          <HStack space='sm' className='mt-3 h-5'>
            <Text size='xs'>
              Wade Warrem
            </Text>
            <Divider orientation='vertical' className='bg-background-300' />
            <Text size='xs'>
              6th Oct, 2019
            </Text>
            <Divider orientation='vertical' className='bg-background-300' />
            <Text size='xs'>
              5 mins read
            </Text>
          </HStack>
        </Box>
        <Divider />
        <Box>
          <Text className='text-xs text-primary-600 font-bold'>
            TECHNOLOGY
          </Text>
          <Heading size='sm'>
            How AI can benefit your business
          </Heading>
          <Text size='xs' className='mt-1.5'>
            AI can automate tasks and processes, allowing for increasing efficiency and productivity.
          </Text>
          <HStack space='sm' className='mt-3 h-5'>
            <Text size='xs'>
              Wade Warrem
            </Text>
            <Divider orientation='vertical' className='bg-background-300' />
            <Text size='xs'>
              6th Oct, 2019
            </Text>
            <Divider orientation='vertical' className='bg-background-300' />
            <Text size='xs'>
              5 mins read
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}`}
  argTypes={{}}
  reactLive={{ Fab, FabIcon, FabLabel, Box, VStack, HStack, Heading, Text, Divider, SearchIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Box className='border rounded-lg border-outline-300 py-4 bg-background-0 mx-5'>
      <VStack space='lg' className='mb-2 px-6 py-2'>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size='sm'>
              Prepare any feedback or updates.
            </Text>
          </CheckboxLabel>
        </Checkbox>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size='sm'>
              Review progress on goals and projects.
            </Text>
          </CheckboxLabel>
        </Checkbox>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size='sm'>
              Ask challenges and discuss.
            </Text>
          </CheckboxLabel>
        </Checkbox>
      </VStack>
      <Fab size='sm' placement='bottom center' className='top-0 relative'>
        <FabIcon as={AddIcon} size='sm'/>
      </Fab>
    </Box>
  );
}`}
  argTypes={{}}
  reactLive={{ Fab, FabIcon, Box, VStack, Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon, Text, AddIcon, CheckIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Box className='max-w-96 border rounded-lg border-outline-200 overflow-hidden mx-5 bg-background-100'>
      <Box>
        <Image
          className='h-[185px] w-[416px]'
          source=\\{{
            uri: 'https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          fallbackSource=\\{{
            uri: 'https://drive.google.com/uc?export=view&id=1h1e89BtQCp6JdGiKo92dlf5bjHC8hLjt',
          }}
          alt="image"
        />
      </Box>
      <VStack className='px-6 pt-4 pb-6'>
        <Heading size='sm'>
          Fresh Orange - Imported (Loose)
        </Heading>
        <Text className='my-1.5 text-sm'>
          Rs 146(Rs.24.33/pc)
        </Text>
        <Text className='text-xs'>
          DETAILS
        </Text>
        <Text className='my-1.5 text-xs'>
          Oranges are a great source of vitamin C, which is essential for a healthy immune system. Oranges are a great source of vitamin C, which is important for maintaining a healthy immune system. Vitamin C also helps with the absorption of iron and the production of collagen, which supports healthy skin, teeth, and bones.
        </Text>
        <Link href="https://gluestack.io/" isExternal>
          <Text className='text-xs text-primary-600'>
            READ MORE
          </Text>
        </Link>
      </VStack>
      <Fab size='lg' className='bg-primary-600 right-4 bottom-16 hover:bg-primary-700 active:bg-primary-800'>
        <FabIcon as={ShoppingCartIcon} className='h-4 w-4'/>
      </Fab>
    </Box>
  );
}`}
  argTypes={{}}
  reactLive={{ Fab, FabIcon, Box, VStack, Heading, Text, Image, Link, ShoppingCartIcon }}
/>
    </div>
  );
}