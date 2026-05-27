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
      <path d="M19.802 12.274A3.811 3.811 0 0023.62 8.47c0-2.101-1.71-3.795-3.818-3.795a3.816 3.816 0 00-3.818 3.81 3.817 3.817 0 003.818 3.811zm-8.602.705a3.43 3.43 0 003.435-3.424A3.43 3.43 0 0011.2 6.13a3.44 3.44 0 00-3.436 3.436A3.436 3.436 0 0011.2 13zm-7.8.635c1.71 0 3.093-1.38 3.093-3.081 0-1.704-1.395-3.084-3.105-3.084A3.086 3.086 0 00.3 10.539c0 1.7 1.387 3.078 3.095 3.078zm0 .705c-1.96 0-3.4 1.717-3.4 3.495v1.196c0 .17.138.31.31.31h6.18a.31.31 0 00.309-.31v-1.196c0-1.779-1.437-3.5-3.398-3.5zm7.8-.56c-2.18 0-3.78 1.915-3.78 3.891v1.331c0 .188.156.344.345.344h6.87a.344.344 0 00.342-.344V17.65c0-1.976-1.598-3.891-3.777-3.891zm8.602-.617c-2.422 0-4.197 2.126-4.197 4.323v1.477c0 .21.172.381.382.381h7.63c.21 0 .383-.171.383-.381v-1.477c-.001-2.197-1.776-4.323-4.198-4.323z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: myspace
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for myspace (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-myspace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-myspace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-myspace 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-myspace 3s ease-in-out infinite alternate;
}
</style>