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
      <path d="M.868 13.054v-2.108h.677v2.108zm1.29.19v-2.488a.346.346 0 0 0-.338-.337H0v.527h.254v2.108H0v.527h1.841a.33.33 0 0 0 .318-.337zm1.905-.78v.59h-.72v-.864h.953v-.527h-.952v-.717h.72v.442h.592v-.97H2.497v.528h.233v2.108h-.233v.527h2.16v-1.117zm1.778-.801v-.717h.699v.717zm1.334 1.391v-.759a.334.334 0 0 0-.339-.337c.19 0 .339-.148.339-.338v-.843c0-.169-.149-.337-.318-.337H4.974v.527h.275v2.108h-.275v.506h1.121v-.527h-.233v-.864h.699v.864h-.254v.527h1.1v-.527zm4.507-1.391v-.717h.72v.717zm1.334.19v-1.097a.334.334 0 0 0-.339-.337h-1.862v.527h.254v2.108h-.254v.527h1.1v-.527h-.233v-.864h.995c.19 0 .339-.148.339-.338zm1.08 1.201v-2.108h.253v-.527h-1.1v.527h.254v2.108h-.254v.527h1.1v-.527zm2.094-.59v.59h-.72v-.864h.953v-.527h-.952v-.717h.72v.442h.613v-.97h-2.18v.528h.233v2.108h-.233v.527h2.18v-1.117zm1.736-.801v.527h.487v.864h-.72v-2.108h.72v.442h.634v-.632a.334.334 0 0 0-.338-.337h-1.27a.325.325 0 0 0-.212.084c-.063.063-.127.148-.127.253v2.488a.3.3 0 0 0 .127.253.32.32 0 0 0 .233.084h1.587v-1.918zm2.984.8v.591h-.72v-.864h.953v-.527h-.953v-.717h.72v.442h.614v-.97h-2.18v.528h.233v2.108h-.233v.527h2.18v-1.117zm2.476 0v.591h-.698v-2.108h.254v-.527H21.82v.527h.254v2.108h-.254v.527H24v-1.117zm-12.846.8v-1.592H9.227v-.722h.699v.446h.635v-.637c0-.204-.19-.34-.381-.34H8.931a.335.335 0 0 0-.338.34v1.444h1.312v.87h-.699v-.594h-.613v.764c0 .19.148.34.338.34h1.249c.195 0 .36-.128.36-.319Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: derspiegel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for derspiegel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-derspiegel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-derspiegel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-derspiegel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-derspiegel 3s ease-in-out infinite alternate;
}
</style>