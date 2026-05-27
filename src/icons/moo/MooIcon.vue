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
      <path d="M11.964 24c-2.525 0-4.801-1.107-6.34-3.138-1.109-1.417-1.661-3.078-1.661-4.86 0-.555.06-1.109.185-1.602.299-1.785 1.59-4.678 3.93-8.678C9.805 2.767 11.215.554 11.289.554c.123-.246.308-.554.675-.554.372 0 .555.308.741.555 0 0 1.477 2.215 3.199 5.168 2.342 4 3.631 6.893 3.939 8.678.131.492.193 1.045.193 1.6 0 1.785-.555 3.445-1.65 4.861C16.766 22.834 14.424 24 11.964 24zm0-2.092c1.905 0 3.629-.861 4.801-2.341.799-1.044 1.229-2.337 1.229-3.69 0-.432-.059-.801-.123-1.229-.246-1.354-1.293-3.692-3.074-6.833-1.357-2.399-2.525-4.121-2.525-4.121l-.31-.433-.254.37s-1.171 1.785-2.521 4.125c-1.843 3.149-2.893 5.474-3.072 6.839-.061.431-.123.8-.123 1.229 0 1.355.429 2.587 1.229 3.693 1.11 1.538 2.831 2.399 4.74 2.399l.003-.008z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: moo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for moo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-moo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-moo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-moo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-moo 3s ease-in-out infinite alternate;
}
</style>