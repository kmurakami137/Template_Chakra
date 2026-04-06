import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";

function App() {
  return (
    <Box minH="100vh" bg="gray.50" p={8}>
      <VStack gap={8} maxW="container.md" mx="auto">
        <Heading as="h1" size="2xl">
          Template Chakra
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Chakra UI v3 + Vite + React + TypeScript
        </Text>

        {/* Box の例 */}
        <Box bg="white" p={6} borderRadius="lg" shadow="md" w="full">
          <Heading as="h2" size="lg" mb={4}>
            Box Component
          </Heading>
          <Text>
            Props ベースでスタイリングできます。bg, p, borderRadius, shadow
            など。
          </Text>
        </Box>

        {/* Flex の例 */}
        <Box bg="white" p={6} borderRadius="lg" shadow="md" w="full">
          <Heading as="h2" size="lg" mb={4}>
            Flex Component
          </Heading>
          <Flex gap={4} wrap="wrap">
            <Box bg="blue.100" p={4} borderRadius="md">
              Item 1
            </Box>
            <Box bg="blue.200" p={4} borderRadius="md">
              Item 2
            </Box>
            <Box bg="blue.300" p={4} borderRadius="md">
              Item 3
            </Box>
          </Flex>
        </Box>

        {/* Button の例 */}
        <Flex gap={4}>
          <Button colorPalette="blue">Primary</Button>
          <Button colorPalette="gray" variant="outline">
            Secondary
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}

export default App;
