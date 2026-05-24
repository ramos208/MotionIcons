import gsap from "gsap";

export type AnimationPreset =
  | "bounce"
  | "elastic"
  | "smooth"
  | "snappy"
  | "liquid";

export const EasingPresets = {
  bounce: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
  smooth: "power2.inOut",
  snappy: "power4.out",
  liquid: "sine.inOut",
};

export const MotionPresets = {
  hover: {
    scale: 1.15,
    rotation: 5,
    duration: 0.3,
    ease: EasingPresets.snappy,
  },
  click: {
    scale: 0.9,
    rotation: -5,
    duration: 0.15,
    ease: EasingPresets.smooth,
  },
  loading: {
    rotation: 360,
    duration: 1,
    ease: "linear",
    repeat: -1,
  },
};

export function applyPreset(
  element: HTMLElement | SVGElement | null,
  preset: keyof typeof MotionPresets,
) {
  if (!element) return;
  const config = MotionPresets[preset];
  return gsap.to(element, config);
}
