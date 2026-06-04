import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export type ParallaxOptions = {
	/**
	 * 視差の強度（viewport height の割合）。
	 * 0.4 = 画面高さの 40% 分だけ要素が移動。大きいほど効果が強い。
	 */
	speed?: number;
	/**
	 * スクロール追従の遅延（秒）。
	 * true = 即時追従（奥行き感薄め）
	 * 数値 = その秒数だけ遅れて追いかける（大きいほど浮遊感・奥行き感が強い）
	 */
	scrub?: boolean | number;
	/** スクロール開始位置 (ScrollTrigger start) */
	start?: string;
	/** スクロール終了位置 (ScrollTrigger end) */
	end?: string;
};

/**
 * 絶対配置した背景レイヤーに適用するパララックスフック。
 * backgroundPosition ではなく y トランスフォームで動かすため、
 * background-size:cover や Chakra のスタイル競合を回避できる。
 *
 * 使い方:
 *   const bgRef = useParallax({ speed: 0.2 });
 *   <Box position="relative" overflow="hidden">
 *     <Box ref={bgRef} position="absolute" inset="-20%" backgroundImage="..." backgroundSize="cover" />
 *     <Box position="relative" zIndex={1}>{children}</Box>
 *   </Box>
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
	options: ParallaxOptions = {},
) {
	const { speed = 0.4, scrub = 1, start = "top bottom", end = "bottom top" } = options;

	const ref = useRef<T>(null);

	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;

		// y トランスフォームで動かす。
		// -move → +move の範囲でスクロールに追従するため、
		// 親側は overflow:hidden + 背景レイヤーを inset でオーバーサイズにしておく必要がある。
		// scrub に秒数を指定することで、背景がスクロールを「追いかける」遅延が生まれ、
		// 奥行き感・浮遊感の演出になる。
		const ctx = gsap.context(() => {
			const move = Math.round(window.innerHeight * speed);

			// 上下を move px ずつはみ出させる。
			// これにより y が ±move しても常にセクションが完全に覆われてフラッシュが起きない。
			// gsap.set 内で管理するため ctx.revert() 時に自動クリーンアップされる。
			gsap.set(el, { top: -move, bottom: -move, left: 0, right: 0 });

			gsap.fromTo(
				el,
				{ y: -move },
				{
					y: move,
					ease: "none",
					scrollTrigger: {
						trigger: el.parentElement ?? el,
						start,
						end,
						scrub,
					},
				},
			);
		});

		return () => ctx.revert();
	}, [speed, scrub, start, end]);

	return ref;
}

// ScrollTrigger の refresh を外部から呼べるようにするユーティリティ
export function refreshScrollTrigger() {
	ScrollTrigger.refresh();
}
