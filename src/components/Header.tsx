import { CloseButton, Drawer, Flex, Icon, Link, Portal, Separator, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import LynxLogo from "../assets/Lynx-Logo.svg?react";
import { NAV_ITEMS } from "../data/site";

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	return (
		<Drawer.Root
			open={open}
			onOpenChange={(e) => !e.open && onClose()}
			placement="end"
			initialFocusEl={() => closeButtonRef.current}
		>
			<Portal>
				{/* <Drawer.Backdrop /> */}
				<Drawer.Positioner pl="20dvw" pb={4}>
					<Drawer.Content
						bg="blue.800/80"
						backdropFilter="blur(12px)"
						color="white"
						p={8}
						roundedBottomLeft={8}
					>
						<Drawer.Header pb={4}>
							<Drawer.Title fontSize="lg" color="white">
								Menu
							</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body>
							<Separator borderColor="white/40" />
							<Flex direction="column" gap={6} pt={12}>
								{NAV_ITEMS.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										textDecoration="none"
										color="white"
										_hover={{ color: "blue.200" }}
										onClick={onClose}
									>
										<Flex direction="column" gap={1.5}>
											<Text
												fontFamily="en.poppins"
												fontSize="xl"
												fontWeight="semibold"
												letterSpacing="wider"
												lineHeight={1.2}
											>
												{item.labelEn}
											</Text>
											<Text
												fontSize="13px"
												letterSpacing="wide"
												opacity={0.6}
												lineHeight={1}
											>
												{item.labelJa}
											</Text>
										</Flex>
									</Link>
								))}
							</Flex>
						</Drawer.Body>
						<Drawer.CloseTrigger asChild>
							<CloseButton ref={closeButtonRef} size="md" color="white" />
						</Drawer.CloseTrigger>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
}

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			// const isSm = window.matchMedia("(min-width: 640px)").matches;
			const threshold = 100; //isSm ? 800 : 700;
			setScrolled(window.scrollY > threshold);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<Flex
				as="header"
				position={scrolled ? "fixed" : "absolute"}
				top={0}
				left={0}
				right={0}
				zIndex={100}
				h={scrolled ? "52px" : "72px"}
				align="center"
				px={scrolled ? 6 : 8}
				bg={scrolled ? "white/55" : "transparent"}
				backdropFilter={scrolled ? "blur(40px) brightness(1.55)" : undefined}
				transition="0.3s"
				color={scrolled ? "blue.700" : "white"}
				shadow={scrolled ? "xxs" : undefined}
				justifyContent="space-between"
			>
				{/* ロゴ */}
				<Flex align="center">
					<Text
						fontWeight="bold"
						letterSpacing={0.8}
						mr={scrolled ? "8px" : "10px"}
						fontSize={scrolled ? "12px" : "13px"}
					>
						中学社会
					</Text>
					<Icon
						h="auto"
						w={scrolled ? "70px" : "80px"}
						color="inherit"
						asChild
						aria-label="LYNX"
					>
						<LynxLogo />
					</Icon>
				</Flex>

				{/* 右側: デスクトップ ナビ + モバイル ハンバーガー */}

				{/* デスクトップ ナビ */}
				<Flex display={{ base: "none", md: "flex" }} gap={4.5} align="center">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							color="inherit"
							textDecoration="none"
							_hover={{ color: "blue.200" }}
						>
							<Flex direction="column" gap={1}>
								{/* 日本語ラベル */}
								<Text
									fontSize={scrolled ? "12px" : "13px"}
									letterSpacing="wide"
									opacity={1}
									lineHeight={1}
								>
									{item.labelJa}
								</Text>
								{/* 英語ラベル */}
								{/* <Text
									fontFamily="en.poppins"
									fontSize={scrolled ? "12px" : "13px"}
									fontWeight="semibold"
									letterSpacing="wider"
									lineHeight={1.2}
								>
									{item.labelEn}
								</Text> */}
							</Flex>
						</Link>
					))}
				</Flex>

				{/* モバイル ハンバーガー */}
				<Flex
					display={{ base: "flex", md: "none" }}
					as="button"
					aria-label="メニューを開く"
					onClick={() => setDrawerOpen(true)}
					cursor="pointer"
					color="inherit"
					align="center"
					justify="center"
				>
					<MdMenu size="24px" />
				</Flex>
			</Flex>

			<MobileNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
		</>
	);
}
