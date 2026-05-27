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
      <path d="M2.0084 0C.8992 0 0 .8992 0 2.0084v19.9832C0 23.1006.8992 24 2.0084 24h19.9832C23.1006 24 24 23.1007 24 21.9916V2.0084C24 .8992 23.1007 0 21.9916 0Zm9.9624 3.84c3.4303 0 6.2108 2.7626 6.2108 6.1709v6.4875a.2688.2688 0 0 1-.2697.2681c-1.3425 0-2.4306-1.0811-2.4306-2.415v-4.3409c0-1.9265-1.572-3.488-3.5105-3.488s-3.424 1.562-3.424 3.488v1.608a.2633.2633 0 0 0 .259.2681h1.5394a.2693.2693 0 0 0 .2753-.263V9.9453c0-.7412.6044-1.3414 1.3503-1.3414s1.3502.6002 1.3502 1.3414V20.029a.2747.2747 0 0 1-.2807.2682c-1.3362 0-2.4198-1.0766-2.4198-2.4043v-3.2307a.2747.2747 0 0 0-.2753-.268H8.8114a.2637.2637 0 0 0-.2646.263v1.0789c0 1.3338-1.1746 2.4152-2.517 2.4152a.2688.2688 0 0 1-.2698-.268v-7.8724c0-3.4083 2.7805-6.1709 6.2108-6.1709Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: haystack
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for haystack (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-haystack {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-haystack {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-haystack 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-haystack 3s ease-in-out infinite alternate;
}
</style>