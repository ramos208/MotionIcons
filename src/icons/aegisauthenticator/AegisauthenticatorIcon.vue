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
      <path d="m6.9487 19.8732-.0074.0133a1.483 1.483 0 0 0-.0013 1.469l.3165.5565c.2639.4638.7563.75 1.2897.75h.0163c1.139 0 1.853-1.2301 1.2883-2.219l-.325-.5697c-.5693-.9974-2.0074-.9974-2.577-.0002m3.4905-6.1074a1.483 1.483 0 0 0-.0013 1.4688l3.7964 6.6769c.2639.4638.756.7503 1.2897.7503h.0156c1.139 0 1.853-1.2301 1.2883-2.219l-3.8118-6.677c-.5693-.9974-2.0077-.9974-2.5768 0m.3275-11.692L.1972 20.4648c-.5618.9775.1438 2.1969 1.2713 2.1969a1.467 1.467 0 0 0 1.2734-.7393l7.9513-13.9285c.5632-.9867 1.9861-.9855 2.548.0026l7.9175 13.9239a1.466 1.466 0 0 0 1.2746.7416h.0982c1.1255 0 1.8313-1.2152 1.2736-2.193L13.3116 2.0776c-.5616-.9844-1.98-.9867-2.5448-.0039"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aegisauthenticator
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aegisauthenticator (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aegisauthenticator {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aegisauthenticator {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aegisauthenticator 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aegisauthenticator 3s ease-in-out infinite alternate;
}
</style>