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
      <path d="M13.953 11.462H9.088v2.34h4.748c.281 0 .538-.118.749-.305.187-.187.304-.468.304-.819a1.404 1.404 0 0 0-.257-.842c-.188-.234-.398-.374-.679-.374zm.164-2.83c.21-.14.304-.445.304-.843 0-.35-.094-.608-.257-.771a.935.935 0 0 0-.608-.234H9.088v2.105h4.374c.234 0 .468-.117.655-.257zM21.251 0H2.89c-.585 0-1.053.468-1.053 1.03v18.385c0 .562.468.912 1.03.912H5.58V24l3.368-3.65h12.304c.562 0 .913-.35.913-.935V1.053c0-.562-.351-1.03-.936-1.03zm-3.087 14.9a2.827 2.827 0 0 1-1.006 1.03c-.445.28-.936.538-1.497.655-.562.14-1.17.257-1.801.257H5.579v-13.1h9.403c.468 0 .866.094 1.24.305.351.187.679.444.936.748.524.64.806 1.443.795 2.27 0 .608-.164 1.192-.468 1.754a2.924 2.924 0 0 1-1.403 1.263c.748.21 1.333.585 1.778 1.123.42.561.631 1.286.631 2.199 0 .584-.117 1.076-.35 1.497z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: storyblok
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for storyblok (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-storyblok {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-storyblok {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-storyblok 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-storyblok 3s ease-in-out infinite alternate;
}
</style>