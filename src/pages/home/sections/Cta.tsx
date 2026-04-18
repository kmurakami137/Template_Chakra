/**
 * Cta Section
 *
 * CTA セクション（締め）
 */

import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";

export function Cta() {
	return (
		<Box as="section" bg="gray.900" color="white" py={28}>
			<Container maxW="breakpoint-lg" textAlign="center">
				<Heading as="h2" mb={4}>
					今すぐ、理解する学習を始めよう。
				</Heading>
				<Text variant="bodyLg" mb={8}>
					無料でダウンロード。中学社会の学習が変わります。
				</Text>
				<HStack justify="center" gap={4}>
					<Box bg="gray.500" w={10} h={10} borderRadius="md" />
					<Box bg="gray.500" w={10} h={10} borderRadius="md" />
					<Box bg="gray.500" w={10} h={10} borderRadius="md" />
				</HStack>
			</Container>
		</Box>
	);
}
