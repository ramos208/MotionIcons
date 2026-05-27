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
      <path d="M24 13.455h-.689l-.288-.739h-1.2l-.289.739h-.644l1.233-2.96h.666zm-1.16-1.233l-.411-1.044-.411 1.044zm-4.315 1.233h.66v-2.438h.995v-.51h-2.644v.51h.989zm-3.826 0h1.927v-.511H15.36v-2.438h-.661zm-3.282-2.438h1.416v-.51h-2.077v2.948h2.121v-.511h-1.46v-.766h1.25v-.511h-1.25zm-4.981 2.438h1.038c1.072 0 1.71-.555 1.71-1.472 0-.916-.638-1.471-1.71-1.471H6.436zm.655-2.438h.383c.694 0 1.044.344 1.044.96 0 .617-.344.961-1.044.961h-.383zm-2.277 2.155a.15.15 0 0 1 .15.15.15.15 0 0 1-.15.15.15.15 0 0 1-.15-.15.15.15 0 0 1 .15-.15m0 .277a.13.13 0 0 0 .134-.127c0-.073-.056-.128-.134-.128a.126.126 0 0 0-.127.128c0 .072.055.127.127.127m-.033-.039H4.76v-.177h.067c.038 0 .055.016.055.05 0 .033-.022.044-.044.05l.055.077h-.028l-.05-.077h-.033zm0-.1h.028c.022 0 .05 0 .05-.027 0-.022-.022-.028-.039-.028h-.039zM0 13.85h4.626l-2.31-.978zm.172-.395l2.144-1.033 2.143 1.033-2.143-3.304Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: delta
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for delta (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-delta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-delta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-delta 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-delta 3s ease-in-out infinite alternate;
}
</style>