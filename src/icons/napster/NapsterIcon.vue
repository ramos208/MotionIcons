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
      <path d="M20.495 4.543c-.22 0-.438 0-.657.03h-.031l-.032-.03C17.93 2.21 15.02.798 12.015.798c-3.004 0-5.945 1.412-7.76 3.775l-.031.03h-.031c-.22-.03-.439-.03-.658-.03H2.16v2.394l-.032.03A3.628 3.628 0 0 0 0 10.282c0 1.412.844 2.701 2.127 3.284h.063v.062c.031 5.278 4.443 9.575 9.825 9.575s9.794-4.297 9.825-9.575v-.062l.032-.03C23.155 12.92 24 11.632 24 10.25c0-1.412-.845-2.7-2.128-3.284l-.032-.03V4.542zM6.821 5.34a7.443 7.443 0 0 1 5.194-2.117c1.94 0 3.818.767 5.195 2.117l.062.062-.094.061c-.375.215-.72.43-1.064.675l-.03.031-.032-.03c-.908-.461-2.347-.983-4.005-.983s-3.098.522-4.006.982l-.03.031-.032-.03a10.22 10.22 0 0 0-1.064-.676l-.188-.061zm12.329 8.195c0 3.866-3.223 7.027-7.166 7.027-3.942 0-7.134-3.16-7.134-7.027V7.458l.094.03c1.252.308 2.44 1.658 2.722 1.996.313-.338 1.784-1.658 4.35-1.658 2.565 0 4.036 1.35 4.35 1.658.28-.338 1.438-1.688 2.721-1.995l.094-.031v6.077z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: napster
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for napster (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-napster {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-napster {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-napster 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-napster 3s ease-in-out infinite alternate;
}
</style>