import { Text, HStack, VStack, Box } from '@gluestack-ui/themed';
import React from 'react';

export function Graph({ data }: { data: any }) {
  const colorMap: any = {
    'gluestack-ui v1': '#0077E6',
    'React Native': '#61dafb',
    'gluestack-ui v2': '#eab308',
  };

  const maxValue = Math.max(...Object.values(data).map((stat: any) => stat));

  return (
    <VStack
      space="sm"
      pl="$12"
      pr="$4"
      py="$12"
      bg="#fbfbfb"
      rounded="$md"
      sx={{
        _dark: {
          bg: '$backgroundDark800',
        },
      }}
      mb="$8"
    >
      {Object.keys(data).map((key) => {
        const width = `${Math.round((data[key] / maxValue) * 100)}%`;

        return (
          <HStack w="$full" space="md" alignItems="center">
            <VStack>
              <Text
                sx={{
                  color: '$text900',
                  _dark: {
                    color: '$text50',
                  },
                  _web: { whiteSpace: 'nowrap' },
                  w: 130,
                  fontSize: '$sm',
                  textAlign: 'right',
                  fontWeight: key === 'gluestack-ui' ? '$semibold' : '$normal',
                }}
              >
                {key}
              </Text>
            </VStack>
            <HStack space="md" alignItems="center" flex={0.7}>
              <Box
                h={'$5'}
                w={width}
                borderRadius={'$sm'}
                bgColor={colorMap[key] ?? '$primary500'}
              />
              <Text
                fontSize="$xs"
                flex={1}
                sx={{
                  color: '$text900',
                  _dark: {
                    color: '$text50',
                  },
                  _web: {
                    whiteSpace: 'nowrap',
                  },
                }}
              >
                {data[key]} ms
              </Text>
            </HStack>
          </HStack>
        );
      })}
    </VStack>
  );
}
