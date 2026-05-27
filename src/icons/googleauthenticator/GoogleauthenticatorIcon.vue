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
      <path d="M6.957 1.3379A2.0133 2.0133 0 0 0 6 1.6074c-.967.5583-1.2985 1.7947-.7402 2.7617L8.498 9.9785H2.0215C.9049 9.9785 0 10.8835 0 12c0 1.1166.905 2.0215 2.0215 2.0215H8.498l-3.2382 5.6094c-.5583.967-.2268 2.2034.7402 2.7617.967.5582 2.2034.2267 2.7617-.7403L12 16.045l3.2383 5.6074c.5583.967 1.7947 1.2985 2.7617.7403.967-.5583 1.2985-1.7947.7402-2.7617l-3.2382-5.6094h6.4765C23.0951 14.0215 24 13.1165 24 12c0-1.1166-.905-2.0215-2.0215-2.0215H15.502l3.2382-5.6094c.5583-.967.2268-2.2034-.7402-2.7617-.967-.5582-2.2034-.2267-2.7617.7403L12 7.955 8.7617 2.3477C8.378 1.6829 7.674 1.3193 6.957 1.3379Zm9.959 1.0058c.1932-.0127.3928.0317.5781.1387.4944.2854.6565.8866.3711 1.3809l-4.1132 7.125h8.2265c.5709 0 1.0117.4408 1.0117 1.0117s-.4408 1.0117-1.0117 1.0117H14.92l-1.168-2.0234-1.168-2.0235 3.5294-6.1113c.1783-.3089.4808-.4885.8027-.5098zm-9.9336.004c.3587-.0093.7081.166.9043.5058l3.5293 6.1113-1.168 2.0235-1.168 2.0234H2.0216c-.5709 0-1.0117-.4408-1.0117-1.0117s.4408-1.0117 1.0117-1.0117h8.2265l-4.1132-7.125c-.2854-.4943-.1233-1.0955.371-1.3809a.9891.9891 0 0 1 .4766-.1347ZM9.666 14.0215h4.668l3.5312 6.1152c.2854.4943.1233 1.0955-.371 1.3809-.4942.2852-1.0956.1231-1.381-.3711L12 14.0254l-4.1133 7.121c-.2853.4943-.8867.6564-1.3808.3712-.4944-.2854-.6565-.8866-.3711-1.3809Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googleauthenticator
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googleauthenticator (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googleauthenticator {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googleauthenticator {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googleauthenticator 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googleauthenticator 3s ease-in-out infinite alternate;
}
</style>