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
      <path d="M0 8.144v6.023h2.006V8.144Zm2.324 0v1.203h1.488v1.285H2.324v1.048h1.488v1.284H2.324v1.203h2.328l1.207-1.203V11.78l-.603-.604.603-.603V9.347L4.652 8.144Zm5.569 1.203L6.69 10.55v2.414l1.203 1.203H9.24v-1.125h-.522V10.55h.522V9.347Zm1.665 0v1.203h.5v2.492h-.5v1.125h1.344l1.202-1.203V10.55l-1.202-1.203Zm3.454 0v4.82h2.006v-4.82Zm3 0-.672.676v.527h.854v1.171h2.01v-1.248l-.975-1.126Zm3.971 0-1.202 1.203v2.414l1.202 1.203h1.094l.6-.594v-.531h-.89V9.347Zm1.121 0v1.203h.89v4.253h-2.446v.444l.603.609h2.646L24 14.644V10.55l-1.203-1.203Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: borgbackup
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for borgbackup (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-borgbackup {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-borgbackup {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-borgbackup 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-borgbackup 3s ease-in-out infinite alternate;
}
</style>