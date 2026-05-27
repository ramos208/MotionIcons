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
      <path d="M1.64 0C.735 0 0 .736 0 1.64v20.72C0 23.265.736 24 1.64 24h20.72c.904 0 1.64-.736 1.64-1.64V1.64C24 .735 23.264 0 22.36 0Zm8.56 2.42h3.6v3.6h1.912L12 10.22l-3.713-4.2H10.2Zm1.331 8.4h1.313c.103 0 .169.177.169.394v1.368c.417.096.81.266 1.162.488l.975-.975c.153-.153.32-.223.394-.15l.918.919c.074.073.004.24-.15.393l-.975.975c.223.352.393.745.488 1.163h1.369c.217 0 .394.065.394.169v1.312c0 .104-.177.169-.394.169h-1.369a3.74 3.74 0 0 1-.487 1.162l.974.975c.154.154.224.32.15.394l-.918.919c-.074.073-.24.003-.394-.15l-.975-.975a3.74 3.74 0 0 1-1.163.487v1.37c0 .216-.065.393-.168.393H11.53c-.103 0-.169-.177-.169-.394v-1.369a3.74 3.74 0 0 1-1.162-.487l-.975.975c-.153.153-.32.223-.394.15l-.918-.919c-.074-.073-.004-.24.15-.394l.974-.975a3.74 3.74 0 0 1-.487-1.162H7.181c-.217 0-.393-.065-.393-.169v-1.312c0-.104.176-.17.393-.17H8.55a3.74 3.74 0 0 1 .487-1.162l-.974-.975c-.154-.153-.224-.32-.15-.393l.918-.92c.074-.072.24-.002.394.15l.975.976a3.74 3.74 0 0 1 1.163-.488v-1.368c0-.217.065-.394.168-.394zm.656 3.731c-.917 0-1.668.752-1.668 1.669s.751 1.669 1.669 1.669c.917 0 1.668-.752 1.668-1.67 0-.916-.751-1.668-1.669-1.668z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: appimage
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for appimage (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-appimage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-appimage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-appimage 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-appimage 3s ease-in-out infinite alternate;
}
</style>