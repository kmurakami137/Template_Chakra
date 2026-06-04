import { Flex, Icon, ProgressCircle } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import LynxLogo from "../assets/Lynx-Logo.svg?react";
import { gsap } from "../lib/gsap";

type Props = {
	isReady: boolean;
	onExitComplete: () => void;
};

// HomePage の minDelay（800ms）に合わせて 90% まで進行する時間
const PROGRESS_DURATION = 0.8;

export function LoadingScreen({ isReady, onExitComplete }: Props) {
	const overlayRef = useRef<HTMLDivElement>(null);
	const [progress, setProgress] = useState(0);
	const progressRef = useRef({ value: 0 });

	// マウント時に 0 → 90% まで自動進行（小数値のまま渡すことで60fps の滑らかな描画を維持）
	useEffect(() => {
		const tween = gsap.to(progressRef.current, {
			value: 90,
			duration: PROGRESS_DURATION,
			ease: "none",
			onUpdate: () => setProgress(progressRef.current.value),
		});
		return () => { tween.kill(); };
	}, []);

	// isReady になったら 100% まで完了させてからフェードアウト
	useEffect(() => {
		if (!isReady || !overlayRef.current) return;

		const overlay = overlayRef.current;

		gsap.to(progressRef.current, {
			value: 100,
			duration: 0.25,
			ease: "power2.out",
			onUpdate: () => setProgress(progressRef.current.value),
			onComplete: () => {
				gsap.to(overlay, {
					opacity: 0,
					duration: 0.5,
					ease: "power2.inOut",
					onComplete: onExitComplete,
				});
			},
		});
	}, [isReady, onExitComplete]);

	return (
		<Flex
			ref={overlayRef}
			position="fixed"
			inset={0}
			zIndex={9999}
			bg="white"
			direction="column"
			align="center"
			justify="center"
			gap={6}
		>
			<Icon w={{ base: 120, md: 160 }} h="auto" color="gray.200" asChild aria-label="LYNX">
				<LynxLogo />
			</Icon>
			<ProgressCircle.Root value={progress} size="xs" colorPalette="gray">
				<ProgressCircle.Circle>
					<ProgressCircle.Track />
					<ProgressCircle.Range />
				</ProgressCircle.Circle>
			</ProgressCircle.Root>
		</Flex>
	);
}
