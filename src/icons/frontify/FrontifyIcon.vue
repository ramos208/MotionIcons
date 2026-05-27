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
      <path d="m23.13 15.777-2.588-1.495a.752.752 0 0 1-.376-.649v-2.989a1.743 1.743 0 0 0-.872-1.508l-2.588-1.494a.755.755 0 0 1-.375-.651V4.002a1.748 1.748 0 0 0-.871-1.511L12 .496 8.54 2.491a1.748 1.748 0 0 0-.868 1.511v2.989a.755.755 0 0 1-.375.65L4.706 9.137a1.746 1.746 0 0 0-.87 1.508v2.99a.75.75 0 0 1-.375.648l-2.59 1.495A1.75 1.75 0 0 0 0 17.287v3.989l3.46 1.994a1.74 1.74 0 0 0 1.741 0l2.589-1.494a.753.753 0 0 1 .75 0l2.589 1.494a1.745 1.745 0 0 0 1.743 0l2.588-1.494a.753.753 0 0 1 .75 0L18.8 23.27a1.74 1.74 0 0 0 1.741 0L24 21.276v-3.99a1.75 1.75 0 0 0-.87-1.51ZM15.343 4.002v2.989a1.748 1.748 0 0 0 .872 1.508l2.588 1.495a.753.753 0 0 1 .376.65v2.99a1.746 1.746 0 0 0 .87 1.507l2.589 1.495a.752.752 0 0 1 .375.65v2.85l-10.517-6.07V1.928l2.468 1.425a.75.75 0 0 1 .38.65zM1.367 16.636l2.589-1.495a1.748 1.748 0 0 0 .871-1.508v-2.989a.752.752 0 0 1 .374-.65L7.79 8.499a1.748 1.748 0 0 0 .871-1.508V4.002a.753.753 0 0 1 .375-.649l2.471-1.425v12.138L.993 20.136v-2.85a.752.752 0 0 1 .374-.65Zm18.677 5.784a.753.753 0 0 1-.75 0l-2.588-1.494a1.74 1.74 0 0 0-1.742 0l-2.588 1.494a.753.753 0 0 1-.75 0l-2.589-1.494a1.743 1.743 0 0 0-1.743 0L4.706 22.42a.753.753 0 0 1-.75 0l-2.468-1.425L12 14.919l10.512 6.07Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: frontify
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for frontify (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-frontify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-frontify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-frontify 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-frontify 3s ease-in-out infinite alternate;
}
</style>