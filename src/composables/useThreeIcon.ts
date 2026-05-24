import { ref, onMounted, onUnmounted, watch, type Ref } from "vue";
import { useReducedMotion } from "./useReducedMotion";

interface ThreeIconOptions {
  container: Ref<HTMLElement | null>;
  lighting?: boolean;
  shadows?: boolean;
  bloom?: boolean;
  interactive?: boolean;
  physics?: boolean;
}

export function useThreeIcon(options: ThreeIconOptions) {
  const { prefersReducedMotion } = useReducedMotion();
  const isReady = ref(false);

  // In a real TresJS setup, the Vue components (<TresCanvas>, <TresMesh>) handle the heavy lifting.
  // This composable acts as a bridge for logical interactions (mouse tracking, physics adjustments).
  const rotationParams = ref({ x: 0, y: 0, z: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    if (
      !options.interactive ||
      prefersReducedMotion.value ||
      !options.container.value
    )
      return;
    const { left, top, width, height } =
      options.container.value.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;

    // Slight rotation based on mouse
    rotationParams.value.x = y * Math.PI * 0.2;
    rotationParams.value.y = x * Math.PI * 0.2;
  };

  onMounted(() => {
    if (options.container.value) {
      options.container.value.addEventListener("mousemove", handleMouseMove);
      options.container.value.addEventListener("mouseleave", () => {
        rotationParams.value.x = 0;
        rotationParams.value.y = 0;
      });
    }
    isReady.value = true;
  });

  onUnmounted(() => {
    if (options.container.value) {
      options.container.value.removeEventListener("mousemove", handleMouseMove);
    }
  });

  return {
    isReady,
    rotationParams,
  };
}
