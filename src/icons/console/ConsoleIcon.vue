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
      <path d="M20.6092 18.1054C21.4521 17.4918 22 16.4974 22 15.375C22 13.511 20.489 12 18.625 12H18.375C16.511 12 15 13.511 15 15.375C15 16.4974 15.5479 17.4918 16.3908 18.1054M20.6092 18.1054C20.0523 18.5108 19.3666 18.75 18.625 18.75H18.375C17.6334 18.75 16.9477 18.5108 16.3908 18.1054M20.6092 18.1054L21.192 19.9404C21.4143 20.6403 21.5255 20.9903 21.4951 21.2082C21.4318 21.6617 21.0619 21.9984 20.6252 22C20.4154 22.0008 20.101 21.8358 19.4723 21.5059C19.2027 21.3644 19.0679 21.2936 18.93 21.252C18.649 21.1673 18.351 21.1673 18.07 21.252C17.9321 21.2936 17.7973 21.3644 17.5277 21.5059C16.899 21.8358 16.5846 22.0008 16.3748 22C15.9381 21.9984 15.5682 21.6617 15.5049 21.2082C15.4745 20.9903 15.5857 20.6403 15.808 19.9404L16.3908 18.1054" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11C9 9.89543 9.89543 9 11 9C12.1046 9 13 9.89543 13 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 9.13119C19.1303 5.05749 15.4752 2 11.0982 2C6.0734 2 2 6.02944 2 11C2 15.9706 6.0734 20 11.0982 20C11.5749 20 12.0431 19.9637 12.5 19.8938" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.3633 4.63574L15.242 6.75706" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.75781 15.2422L4.63649 17.3635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: console
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for console (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-console {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-console {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-console 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-console 3s ease-in-out infinite alternate;
}
</style>