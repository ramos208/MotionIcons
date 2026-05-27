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
      <path d="M21.458 20.15v3.453s-.007.206-.087.283a.382.382 0 0 1-.294.113c-3.859-.005-7.718-.01-11.577-.003-1.576-.005-3.25-.173-4.532-1.117-.074-.08-.485-.289-.188-.259a91.722 91.722 0 0 0 14.367-1.92 92.308 92.308 0 0 0 2.31-.55zm-18.186.814c.206.302.36.766.71.898 5.88-.29 11.76-1.083 17.476-2.536v-3.391c-2.437 1.16-4.983 2.097-7.558 2.87a64.756 64.756 0 0 1-10.628 2.16zm-.66-1.886c.06.387.158.751.299 1.127 6.167-.726 12.276-2.236 17.925-4.864.207-.098.414-.198.62-.298v-3.278c-4.392 2.987-9.392 4.986-14.503 6.329-1.438.363-2.876.74-4.341.984zm10.85-6.692c-3.178 1.803-6.578 3.195-10.067 4.238-.257.14-.734.086-.732.469a5.21 5.21 0 0 0-.12 1.18c5.668-1.085 11.252-2.89 16.283-5.793a34.33 34.33 0 0 0 2.632-1.685V5.899c-2.213 2.657-5.019 4.774-7.997 6.487zM20.905.126c-.963.413-4.859 2.33-5.443 4.875-.236.323-.596-.08-.854-.163-2.209-1.091-5.008-.736-6.9.872C5.82 7.238 4.782 9.976 5.65 12.348c.136.279.277.653-.018.883-.35.243-.743.419-1.05.728-.625.527-1.17 1.204-1.5 1.926 5.184-1.574 10.26-3.834 14.504-7.283 1.423-1.183 2.757-2.503 3.87-3.982V.083c-.073-.154-.296-.067-.551.043z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: opennebula
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for opennebula (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-opennebula {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-opennebula {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-opennebula 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-opennebula 3s ease-in-out infinite alternate;
}
</style>