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
      <path d="M22.329 5.04v9.034l1.666.964V6.004l-1.666-.964ZM0 15.038l1.666-.964V5.04L0 6.004v9.034Zm8.165-.089 7.665 4.424V17.45l-7.176-4.142-.489.282v1.359Zm8.105 6.989-8.105-4.681v1.923l2.164 1.25-2.604 1.503a.263.263 0 0 0 0 .454l1.27.737 3-1.73 3 1.73 1.27-.737c.178-.093.178-.35.005-.449Zm6.059-11.511v8.012c0 .202.218.331.396.227l1.142-.657a.267.267 0 0 0 .133-.228V9.468l-1.671.959Zm-3.271 10.354 1.072-.623a.39.39 0 0 0 .198-.341v-8.233l-1.666.963v8.012c0 .198.218.326.396.222Zm-4.063 2.348 1.537-.885a.265.265 0 0 0 .134-.227v-8.318l-1.671.964v8.466Zm-7.532-.89L9 23.124v-8.461l-1.666-.964v8.313c0 .094.05.183.129.227Zm-3.598-2.076 1.072.623a.265.265 0 0 0 .396-.227v-8.017l-1.666-.963v8.238c0 .144.074.277.198.346ZM.198 18.048l1.072.623a.265.265 0 0 0 .396-.228v-8.016L0 9.468v8.239c0 .138.074.267.198.341ZM23.995 6.004l-1.666-.964-3 1.73-1.996-1.152 2.604-1.502a.264.264 0 0 0 0-.455l-1.077-.623a.403.403 0 0 0-.395 0l-2.803 1.616-1.996-1.151L16.27 2a.263.263 0 0 0 0-.454L15.193.923a.405.405 0 0 0-.396 0l-2.802 1.616L9.193.923a.405.405 0 0 0-.396 0l-1.077.623a.263.263 0 0 0 0 .454l14.6 8.432 1.665-.964-3-1.73 3.01-1.734ZM5.135 3.038l-1.072.623a.264.264 0 0 0 0 .455l14.599 8.431 1.666-.963L5.53 3.038a.403.403 0 0 0-.395 0ZM0 6.004l3 1.729-3 1.735 1.671.959 2.995-1.73 2.001 1.157-3 1.73 1.666.963 3-1.734 1.996 1.156-3 1.73L9 14.663l2.995-1.735 3 1.735 1.666-.964L1.666 5.04 0 6.004Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: linkerd
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for linkerd (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-linkerd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-linkerd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-linkerd 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-linkerd 3s ease-in-out infinite alternate;
}
</style>