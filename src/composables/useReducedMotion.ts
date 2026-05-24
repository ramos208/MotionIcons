import { ref, onMounted, onUnmounted } from "vue";

export function useReducedMotion() {
  const prefersReducedMotion = ref(false);

  let mediaQueryList: MediaQueryList | null = null;

  const updatePreference = (event: MediaQueryListEvent | MediaQueryList) => {
    prefersReducedMotion.value = event.matches;
  };

  onMounted(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      mediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)");
      updatePreference(mediaQueryList);
      mediaQueryList.addEventListener("change", updatePreference);
    }
  });

  onUnmounted(() => {
    if (mediaQueryList) {
      mediaQueryList.removeEventListener("change", updatePreference);
    }
  });

  return {
    prefersReducedMotion,
  };
}
