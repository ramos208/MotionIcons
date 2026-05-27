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
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm-.023.402A11.598 11.598 0 0 1 23.575 12a11.598 11.598 0 0 1-11.598 11.598A11.598 11.598 0 0 1 .378 12 11.598 11.598 0 0 1 11.977.402Zm0 1.776a7.093 7.093 0 0 0-7.092 7.093v1.536a6.395 6.395 0 0 0-.439.33.35.35 0 0 0-.126.27v1.84a.36.36 0 0 0 .126.272c.22.182.722.564 1.504.956v.179c0 .483.31.873.694.873.384 0 .694-.392.694-.873v-4.415c0-.483-.31-.873-.694-.873-.369 0-.67.359-.694.812h-.002v-.91a6.027 6.027 0 1 1 12.054.003v.91c-.025-.454-.326-.813-.695-.813-.384 0-.694.391-.694.873v4.415c0 .483.31.873.694.873.384 0 .695-.392.695-.873v-.179a7.964 7.964 0 0 0 1.503-.956.35.35 0 0 0 .126-.272v-1.843a.342.342 0 0 0-.124-.27 5.932 5.932 0 0 0-.438-.329V9.271a7.093 7.093 0 0 0-7.092-7.093zm-3.34 5.548a.84.84 0 0 0-.84.84v9.405c0 .464.376.84.84.84h.866a.84.84 0 0 0 .84-.84V8.566a.84.84 0 0 0-.84-.84Zm2.905 0a.84.84 0 0 0-.84.84v9.405c0 .464.377.84.84.84h.867a.84.84 0 0 0 .84-.84V8.566a.84.84 0 0 0-.84-.84zm2.908 0a.84.84 0 0 0-.84.84v9.405c0 .464.376.84.84.84h.867a.84.84 0 0 0 .84-.84V8.566a.84.84 0 0 0-.84-.84zM8.112 9.983h1.915v.2H8.112Zm2.906 0h1.915v.2h-1.915Zm2.908 0h1.915v.2h-1.915zm-7.58 9.119a.633.633 0 0 0 0 1.265h11.26a.632.632 0 0 0 0-1.265z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: audiobookshelf
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for audiobookshelf (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-audiobookshelf {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-audiobookshelf {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-audiobookshelf 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-audiobookshelf 3s ease-in-out infinite alternate;
}
</style>