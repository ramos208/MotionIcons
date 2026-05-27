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
      <path d="m1.629 5.698 4.275 5.367 4.274-5.367h1.613l-5.089 6.384 4.958 6.219h-1.613L5.903 13.1l-4.142 5.201H.131l4.957-6.219L0 5.698h1.629Zm16.48-.082C21.423 5.616 24 8.632 24 12c0 3.425-2.613 6.331-5.883 6.383-3.301-.1-5.804-2.878-5.911-6.164L12.202 12c0-3.436 2.637-6.384 5.907-6.384Zm0 1.268c-2.59 0-4.639 2.4-4.639 5.116.078 2.736 1.983 4.996 4.444 5.111l.195.004c2.583 0 4.623-2.406 4.623-5.115 0-2.752-2.086-5.116-4.623-5.116Zm.944 3.71c.507 0 1.1.662.702 1.473-.297.605-1.373 1.192-1.609 1.315l-.045.024s-1.32-.658-1.655-1.339c-.397-.811.196-1.473.703-1.473.56 0 .952.535.952.535s.391-.535.952-.535Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: xo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for xo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-xo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-xo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-xo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-xo 3s ease-in-out infinite alternate;
}
</style>