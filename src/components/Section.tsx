import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type SectionProps = BoxProps & {
	children: ReactNode;
};

export function Section({ children, pt = 20, pb = 24, ...rest }: SectionProps) {
	return (
		<Box as="section" {...rest} pt={pt} pb={pb}>
			{children}
		</Box>
	);
}
