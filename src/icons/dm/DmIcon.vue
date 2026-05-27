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
      <path d="M12.142 15.057c-.556-.281-1.02-.54-1.32-.755 2.364.36 5.9.71 11.603-.18 0 0 .415.638.648 1.624-.046.034-.087.064-.14.1-.718.472-1.948 1.035-3.738 1.035-.755 0-1.554-.1-2.373-.301-.307-.077-.6-.154-.885-.237a39.766 39.766 0 0 1-2.608-.868c-.394-.142-.79-.281-1.187-.417zm-5.67 1.192a11.45 11.45 0 0 0-1.414.28c-1.927.497-3.377 1.107-3.392 1.113l-.402.17L.9 16.757l-.9.309s1.134 1.313 1.333 1.746l.28.745s3.6-1.926 8.836-1.635c1.188.066 2.231.4 2.231.4s-2.133-1.352-2.561-1.483c-1.2-.285-2.42-.482-3.649-.589zm17.487-.735s-.264.3-.8.653c-1.056.695-3.172 1.588-6.438.789-.3-.075-.6-.155-.897-.24-2.978-.85-4.748-1.949-8.743-2.425-2.707.064-5.276.324-6.726.821 0 0 .41.409.531.578.06.127.203.392.336.775.147.42.284.822.284.822s1.465-.622 3.448-1.133c.93-.243 1.928-.403 2.841-.351 3.047.185 5.507 1.717 8.233 2.962 1.891.513 6.506.903 7.807.333 0 0 .264-1.214.124-3.584zM8.11 8.784c.25 0 .443.04.615.078l-.061.315c-.234 1.218-1.415 3.17-2.115 3.17-.264 0-.39-.216-.39-.703 0-1.18.724-2.86 1.951-2.86zm3.294-4.33c-1.094-.038-2.031.029-2.946.116l-.253 1.196c.384.026.819.077 1.11.129v.012L9.021 7.38a3.696 3.696 0 0 0-.565-.05c-2.892 0-4.183 2.21-4.183 4.623 0 1.372.525 2.026 1.568 2.026 1.02 0 1.824-.885 2.39-1.807h.028c-.251.68-.407 1.193-.486 1.652H9.57l1.833-9.37zm9.738 4.968c.238-1.193-.023-2.091-1.304-2.091-1.16 0-1.895.782-2.502 1.846l-.014-.012c.066-.257.106-.421.106-.577 0-.86-.506-1.257-1.285-1.257-1.161 0-1.796.759-2.39 1.747l-.027-.001c.225-.565.398-1.142.502-1.641a18.892 18.892 0 0 0-2.839.115l-.251 1.195c.384.026.819.078 1.11.129v.037l-.965 4.913 1.783.002.343-1.75c.293-1.513 1.36-3.053 1.969-3.053.303 0 .394.243.262.884l-.667 3.917h1.785l.285-1.711c.25-1.529 1.349-3.09 1.957-3.09.301 0 .396.243.263.884l-.649 3.917h1.788z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dm
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dm (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dm 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dm 3s ease-in-out infinite alternate;
}
</style>