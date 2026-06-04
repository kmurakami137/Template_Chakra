import { Box, type BoxProps } from "@chakra-ui/react";
import { forwardRef, type ReactNode } from "react";

type SectionProps = BoxProps & {
	children: ReactNode;
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
	{ children, pt = 20, pb = 24, ...rest },
	ref,
) {
	return (
		<Box as="section" ref={ref} {...rest} pt={pt} pb={pb}>
			{children}
		</Box>
	);
});
