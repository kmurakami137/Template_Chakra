import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type SectionProps = BoxProps & {
	children: ReactNode;
};

export function Section({ children, py = 20, ...rest }: SectionProps) {
	return (
		<Box as="section" py={py} {...rest}>
			{children}
		</Box>
	);
}
