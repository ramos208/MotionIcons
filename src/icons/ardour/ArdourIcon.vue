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
      <path d="M12 1.606L0 22.394c1.45 0 .832-.885 1.565-.93.703 0 .559.44 1.044.44.846 0 .273-2.82 1.043-2.82.665 0 .48 2.038 1.044 2.038.288 0 .521-.811.521-1.81v-.945c0-1.304.234-2.364.522-2.364.288 0 .522 1.066.522 2.005 0 1.178.233 2.43.522 2.43.288 0 .521-1.263.521-2.805v-.44c0-1.69.234-3.065.522-3.065.288 0 .522 1.369.522 2.967 0 1.661.233 3.098.522 3.098.288 0 .521-1.437.521-3.18 0-1.737.234-3.146.522-3.146.288 0 .522 1.424.522 3.277 0 1.786.233 3.147.522 3.147.288 0 .521-1.367.521-2.87 0-1.386.234-2.657.522-2.657.288 0 .522 1.271.522 2.837v.472c0 1.415.233 2.56.521 2.56.289 0 .522-1.152.522-2.299 0-.973.234-1.989.522-1.989.288 0 .522 1.01.522 2.25v.57c0 1.058.233 1.908.521 1.908.289 0 .522-.84.522-1.614 0-.589.234-1.304.522-1.304.288 0 .522.709.522 1.581v.538c0 .696.233 1.272.521 1.272.595 0 .45-1.728 1.044-1.728.288 0 .522.43.522.962v.456c0 .385.233.685.521.685.59 0 .462-.782 1.044-.782.76 0 .197 1.076 1.043 1.076.512 0 .426-.18 1.044-.18.563 0 .493.359 1.565.359z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ardour
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ardour (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ardour {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ardour {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ardour 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ardour 3s ease-in-out infinite alternate;
}
</style>