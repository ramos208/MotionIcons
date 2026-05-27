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
      <path d="M18.951 7.598v6.713h1.463v-1.69l1.61 1.69H24v-.08l-2.123-2.153 2.002-1.846v-.07H21.95l-1.537 1.496v-4.06zm-2.93 2.41a2.626 2.626 0 00-1.787.635 2.049 2.049 0 00-.703 1.556c-.002.75.311 1.287.7 1.643.526.478 1.221.626 1.767.623.666 0 1.34-.195 1.805-.62.521-.483.713-1.029.713-1.607 0-.73-.31-1.247-.71-1.603-.553-.475-1.202-.628-1.785-.627zm-9.062.039c-1.188-.005-2.1.977-2.104 2.25-.004 1.296.908 2.108 2.032 2.096.664.002.983-.244 1.308-.541v1.193h-1.37l-1.03 1.158v.2H9.66v-6.24H8.195v.435c-.381-.408-.772-.542-1.236-.551zm-4.805.11l-.691.786v-.771H0v4.15h1.463v-2.799c.547.002 1.023-.002 1.49-.003v2.802h1.465v-2.595c-.004-.547-.1-.819-.307-1.061a1.431 1.431 0 00-.914-.51zm8.114.005v4.15h1.468l.002-2.779h1.065l1.164-1.314v-.057h-1.598l-.635.715v-.715zm-2.946 1.115c.504 0 .96.444.948.948a.956.956 0 01-.948.945c-.523 0-.931-.403-.947-.945-.002-.52.443-.94.947-.948zm8.703.001c.525 0 .94.434.944.95-.027.544-.42.95-.944.95s-.934-.417-.95-.95a.955.955 0 01.95-.95z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ngrok
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ngrok (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ngrok {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ngrok {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ngrok 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ngrok 3s ease-in-out infinite alternate;
}
</style>