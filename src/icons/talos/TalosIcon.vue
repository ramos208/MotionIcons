<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M9.678 11.98c0-2.664-1.13-6.896-2.867-10.804a12 12 0 0 0-1.585.917c1.608 3.668 2.647 7.553 2.647 9.886 0 2.254-1.08 6.145-2.735 9.865a12 12 0 0 0 1.576.93c1.79-3.976 2.964-8.229 2.964-10.795m6.442 0c0-2.336 1.042-6.22 2.646-9.89a12 12 0 0 0-1.608-.922c-1.756 3.957-2.843 8.166-2.843 10.816 0 2.564 1.177 6.819 2.965 10.797a12 12 0 0 0 1.575-.931c-1.655-3.723-2.735-7.616-2.735-9.87m5.45 6.525.31.307a12 12 0 0 0 .936-1.612c-1.866-1.893-3.457-3.938-3.47-5.233-.012-1.264 1.57-3.308 3.446-5.222a12 12 0 0 0-.945-1.603l-.259.258c-2.739 2.766-4.063 4.92-4.047 6.583.016 1.662 1.332 3.81 4.028 6.522M2.411 5.405l-.26-.259a12 12 0 0 0-.946 1.608c3.123 3.173 3.452 4.704 3.448 5.217-.012 1.3-1.603 3.34-3.47 5.229a12 12 0 0 0 .939 1.608c.106-.106.207-.204.31-.308 2.694-2.711 4.01-4.842 4.026-6.516s-1.308-3.809-4.047-6.58M12.002 24c.303 0 .602-.016.898-.037V.037A12 12 0 0 0 12 0c-.304 0-.605.015-.905.037v23.925q.448.035.903.038z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: talos
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for talos (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-talos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-talos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-talos 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-talos 3s ease-in-out infinite alternate;
}
</style>