<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M9.191 6.777a1.409 1.409 0 0 0-1.384 1.41v7.62a1.406 1.406 0 0 0 2.109 1.218l6.633-3.832a1.38 1.38 0 0 0 0-2.392L9.916 6.969a1.39 1.39 0 0 0-.725-.192zm.381 1.33a.895.895 0 0 1 .602.106l5.22 3.014a.896.896 0 0 1 0 1.546l-5.22 3.014a.894.894 0 0 1-1.342-.773V8.986a.895.895 0 0 1 .74-.878zM8.154.633C3.414 2.233 0 6.716 0 12c0 6.626 5.374 12 12 12 5.161 0 9.568-3.266 11.258-7.84l-3.838-.844-5.148 5.149-8.465-2.272-2.272-8.465 5.059-5.056zM12 0c-.471 0-.929.025-1.387.076l.412 3.801 7.168 1.924 1.91 7.101 3.774.832c.084-.567.123-1.14.123-1.734 0-6.626-5.374-12-12-12z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gradleplaypublisher
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for gradleplaypublisher (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gradleplaypublisher {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gradleplaypublisher {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gradleplaypublisher 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gradleplaypublisher 3s ease-in-out infinite alternate;
}
</style>