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
      <path d="M13.1286 17.5084h-8.072a.187.187 0 0 1-.187-.187v-.4442a.187.187 0 0 1 .187-.187h8.0721a.187.187 0 0 1 .187.187v.4442a.1872.1872 0 0 1-.1871.187zm5.6234-12.195c-1.4233.0033-4.2184-.0098-5.6414-.0065a.4035.4035 0 0 0-.4035.4035v3.6061c0 .2229.1807.4035.4035.4035h1.7475v8.19a1.8275 1.8275 0 0 1-.9112 1.5761 1.8277 1.8277 0 0 1-1.8224 0 1.8276 1.8276 0 0 1-.9113-1.5784H6.941c0 2.1705 1.1677 4.193 3.0473 5.2782.9398.5428 1.9936.8141 3.0474.8141s2.1076-.2713 3.0474-.8139c1.8795-1.0837 3.0444-3.1089 3.0473-5.274V5.692a.3785.3785 0 0 0-.3784-.3786zM7.4546 15.2306h3.276a.6403.6403 0 0 0 .6403-.6403V.6403A.6403.6403 0 0 0 10.7306 0h-3.276a.6403.6403 0 0 0-.6403.6403v13.95c0 .3536.2867.6403.6403.6403z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: imagej
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for imagej (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-imagej {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-imagej {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-imagej 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-imagej 3s ease-in-out infinite alternate;
}
</style>