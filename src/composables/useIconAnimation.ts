import { ref, watch, onMounted, onUnmounted, type Ref } from "vue";
import gsap from "gsap";
import { useReducedMotion } from "./useReducedMotion";
import { EasingPresets } from "../animations/presets";

interface IconAnimationOptions {
  element: Ref<HTMLElement | SVGElement | null>;
  hover: Ref<boolean>;
  active: Ref<boolean>;
  duration?: number;
  loop?: boolean;
  morph?: boolean;
  physics?: boolean;
}

export function useIconAnimation(options: IconAnimationOptions) {
  const { prefersReducedMotion } = useReducedMotion();
  const timeline = ref<gsap.core.Timeline | null>(null);

  const initAnimations = () => {
    if (!options.element.value || prefersReducedMotion.value) return;

    // Hover effect
    const hoverAnim = gsap.to(options.element.value, {
      scale: options.physics ? 1.15 : 1.1,
      rotation: options.physics ? 5 : 0,
      duration: options.duration || 0.3,
      ease: options.physics ? EasingPresets.elastic : EasingPresets.smooth,
      paused: true,
    });

    watch(options.hover, (isHovered) => {
      if (prefersReducedMotion.value) return;
      if (isHovered) {
        hoverAnim.play();
      } else {
        hoverAnim.reverse();
      }
    });

    // Active (Click) effect
    watch(options.active, (isActive) => {
      if (prefersReducedMotion.value || !options.element.value) return;
      if (isActive) {
        gsap.to(options.element.value, {
          scale: 0.9,
          duration: 0.1,
          ease: EasingPresets.smooth,
          yoyo: true,
          repeat: 1,
        });
      }
    });

    // Morph/Loop effect if enabled
    if (options.loop) {
      timeline.value = gsap.timeline({ repeat: -1, yoyo: true });
      timeline.value.to(options.element.value, {
        y: options.physics ? -5 : -2,
        duration: (options.duration || 1) * 2,
        ease: "sine.inOut",
      });
    }
  };

  onMounted(() => {
    initAnimations();
  });

  onUnmounted(() => {
    if (timeline.value) {
      timeline.value.kill();
    }
    gsap.killTweensOf(options.element.value);
  });

  return {
    timeline,
  };
}
