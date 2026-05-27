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
      <path d="M6.3415 0C2.845 0 0 2.8445 0 6.3415v11.3166C0 21.155 2.8449 24 6.3415 24h11.317C21.155 24 24 21.155 24 17.658V6.3416C24 2.845 21.155 0 17.6585 0Zm0 2.1493h11.317c2.3117 0 4.1922 1.8805 4.1922 4.1922v11.3166c0 2.3118-1.8805 4.1923-4.1922 4.1923H6.3415c-2.3117 0-4.1922-1.8802-4.1922-4.1923V6.3415c0-2.3117 1.8805-4.1922 4.1922-4.1922zM7.06 5.638c-.7632 0-1.3842.6211-1.3842 1.3843v10.0035c0 .7629.621 1.384 1.3842 1.384h10.0047c.7628 0 1.3835-.6208 1.3835-1.3836V7.022c0-.37-.1443-.7174-.4057-.9788a1.3745 1.3745 0 0 0-.9786-.405Zm.765 2.1493h8.474v8.4735H7.825Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smoothcomp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smoothcomp (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smoothcomp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smoothcomp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smoothcomp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smoothcomp 3s ease-in-out infinite alternate;
}
</style>