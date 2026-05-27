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
      <path d="M0 6.78v10.438h2.565V12.81c0-.275.165-.47.43-.47.221 0 .371.124.624.511l2.756 4.368h2.798V6.781H6.61v4.465c0 .275-.166.47-.43.47-.222 0-.373-.123-.625-.511L2.798 6.78Zm9.798 0v10.438h4.127c2.982 0 5.393-2.35 5.393-5.226s-2.425-5.211-5.39-5.211zm10.077 0v10.438h2.564V6.781Zm-7.177 2.35h1.066c1.69 0 2.922 1.216 2.922 2.846 0 1.673-1.231 2.89-2.922 2.89h-1.066a.336.336 0 0 1-.335-.336V9.466c0-.185.15-.336.335-.336m10.792 7.068a.513.513 0 0 0-.528.509c0 .286.23.511.528.511a.51.51 0 1 0 0-1.02m0 .082c.24 0 .43.185.43.426 0 .24-.19.425-.43.425a.423.423 0 0 1-.43-.425.42.42 0 0 1 .43-.426m-.17.155v.545h.1v-.222l.177.222h.112l-.14-.173a.06.06 0 0 1-.01-.034q-.002-.028.03-.033h.004a.15.15 0 0 0 .113-.143c0-.095-.08-.162-.188-.162zm.1.086h.094c.053 0 .09.03.09.08 0 .048-.034.075-.09.075h-.094z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ndi
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ndi (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ndi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ndi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ndi 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ndi 3s ease-in-out infinite alternate;
}
</style>