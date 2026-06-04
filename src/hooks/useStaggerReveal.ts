import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

type FromDirection = "bottom" | "top" | "left" | "right";

export type StaggerRevealOptions = {
	/** アニメーション開始方向 */
	from?: FromDirection;
	/** 移動距離 (px) */
	distance?: number;
	/** 各アイテムのアニメーション時間 (秒) */
	duration?: number;
	/** 子要素間のディレイ (秒) */
	stagger?: number;
	/** 最初の要素の開始遅延 (秒) */
	delay?: number;
	/** イージング */
	ease?: string;
	/** ScrollTrigger の start 位置 */
	start?: string;
	/** 逆スクロール時にアニメーションを巻き戻すか */
	reverse?: boolean;
};

const DIRECTION_MAP: Record<FromDirection, { x?: number; y?: number }> = {
	bottom: { y: 40 },
	top: { y: -40 },
	left: { x: -40 },
	right: { x: 40 },
};

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
	options: StaggerRevealOptions = {},
) {
	const {
		from = "bottom",
		distance = 30,
		duration = 0.6,
		stagger = 0.08,
		delay = 0,
		ease = "power3.out",
		start = "top 85%",
		reverse = true,
	} = options;

	const ref = useRef<T>(null);

	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;

		const children = Array.from(el.children) as HTMLElement[];
		if (children.length === 0) return;

		const fromVars = DIRECTION_MAP[from];
		const offset = {
			x: fromVars.x != null ? (fromVars.x / 40) * distance : 0,
			y: fromVars.y != null ? (fromVars.y / 40) * distance : 0,
		};

		const toggleActions = reverse ? "play none none reverse" : "play none none none";

		const ctx = gsap.context(() => {
			gsap.fromTo(
				children,
				{ opacity: 0, x: offset.x, y: offset.y },
				{
					opacity: 1,
					x: 0,
					y: 0,
					duration,
					delay,
					ease,
					stagger,
					scrollTrigger: {
						trigger: el,
						start,
						toggleActions,
					},
				},
			);
		});

		return () => ctx.revert();
	}, [from, distance, duration, stagger, delay, ease, start, reverse]);

	return ref;
}
