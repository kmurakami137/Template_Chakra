import { defineTokens } from "@chakra-ui/react";

export const shadows = defineTokens.shadows({
	insetSm: {
		value: "inset -3px -3px 5px 0px rgba(255, 255, 255, 0.95), inset 3px 3px 5px 0px rgba(0, 0, 0, 0.1)",
	},
	insetMd: { value: "inset 0 4px 8px rgba(0,0,0,0.2)" },
	insetLg: { value: "inset 0 8px 16px rgba(0,0,0,0.25)" },
	neuSm: {
		value: "-3px -3px 5px 0px rgba(255, 255, 255, 0.95), 3px 3px 5px 0px rgba(0, 0, 0, 0.15)",
	},
	neuMd: {
		value: "-6px -6px 10px 0px rgba(255, 255, 255, 0.7), 6px 6px 10px 0px rgba(0, 0, 0, 0.15)",
	},
	neuLg: {
		value: "-6px -6px 10px 0px rgba(255, 255, 255, 0.95), 6px 6px 10px 0px rgba(0, 0, 0, 0.15)",
	},
	neuSmOnDark: {
		value: "-3px -3px 3px 0px rgba(0, 0, 0, 0.03), 3px 3px 3px 0px rgba(0, 0, 0, 0.15)",
	},
	neuMdWithInner: {
		value: "-6px -6px 10px 0px rgba(255, 255, 255, 0.7), 6px 6px 10px 0px rgba(0, 0, 0, 0.15), inset -3px -3px 3px 0px rgba(255, 255, 255, 0.15), inset 3px 3px 3px 0px rgba(0, 0, 0, 0.03)",
	},
	xxs: { value: "3px 3px 5px 0px rgba(0, 0, 0, 0.02)" },
});
