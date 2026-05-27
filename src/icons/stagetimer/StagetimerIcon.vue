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
      <path d="M12.127 2.639c0 .821.662 1.475 1.464 1.644a7.832 7.832 0 0 1 6.201 7.666c0 4.326-3.499 7.833-7.815 7.833a7.767 7.767 0 0 1-3.932-1.062c-.716-.419-1.66-.372-2.207.253l-.794.906c-.549.625-.491 1.586.196 2.053A11.946 11.946 0 0 0 11.977 24C18.617 24 24 18.605 24 11.949 24 5.86 19.495.826 13.644.013c-.829-.116-1.517.571-1.517 1.411v1.215ZM2.01 15.376c-.8.27-1.236 1.135-.866 1.886.255.518.546 1.016.871 1.492.473.693 1.449.752 2.085.202l.921-.797c.636-.551.686-1.502.26-2.224l-.035-.06c-.419-.726-1.277-1.158-2.077-.889l-1.159.39Zm-.322-1.384c-.807.162-1.6-.369-1.658-1.198-.04-.571-.04-1.143 0-1.714.058-.829.851-1.36 1.658-1.198l1.168.233c.807.162 1.316.957 1.312 1.788v.068c.004.831-.505 1.626-1.312 1.787l-1.168.234Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stagetimer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stagetimer (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stagetimer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stagetimer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stagetimer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stagetimer 3s ease-in-out infinite alternate;
}
</style>