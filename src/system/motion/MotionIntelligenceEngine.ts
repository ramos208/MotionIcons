export interface IconAnalysis {
  name: string;
  category: string;
  geometry: string;
  directionality: boolean;
  symmetry: boolean;
  motionPotential: string[];
}

export interface MotionProfile {
  idleAnimation: string;
  hoverAnimation: string;
  clickAnimation: string;
  particles: boolean;
  shaders: string | null;
  easing: string;
  physics: Record<string, any>;
  interactionLogic: string;
}

const semanticCategories: Record<string, string[]> = {
  notification: ['bell', 'alert', 'alarm', 'message', 'inbox'],
  weather: ['cloud', 'sun', 'moon', 'rain', 'snow'],
  loading: ['loader', 'refresh', 'sync', 'rotate', 'spinner'],
  mechanical: ['settings', 'gear', 'cog', 'wrench'],
  search: ['search', 'find', 'lens', 'zoom', 'magnify'],
  directional: ['arrow', 'chevron', 'caret', 'play', 'forward'],
  ai: ['cpu', 'network', 'ai', 'bot', 'sparkle', 'magic']
};

export class MotionIntelligenceEngine {
  /**
   * Scans icon string and detects category
   */
  static detectCategory(iconName: string): string {
    const name = iconName.toLowerCase();
    for (const [category, keywords] of Object.entries(semanticCategories)) {
      if (keywords.some(k => name.includes(k))) {
        return category;
      }
    }
    return 'generic';
  }

  /**
   * Generates a unique motion profile based on semantic category and icon shape analysis.
   */
  static generateMotion(icon: IconAnalysis): MotionProfile {
    switch (icon.category) {
      case 'notification':
        return {
          idleAnimation: 'breathing',
          hoverAnimation: 'pendulum-swing',
          clickAnimation: 'elastic-rebound',
          particles: true, // sound ripple
          shaders: null,
          easing: 'spring(stiffness: 400, damping: 10)',
          physics: { tension: 120, friction: 14, mass: 1.5 },
          interactionLogic: 'delayed-clapper'
        };
      case 'weather':
        return {
          idleAnimation: 'atmospheric-floating',
          hoverAnimation: 'turbulence',
          clickAnimation: 'particle-burst',
          particles: true, // mist/rain
          shaders: 'distortion-flow',
          easing: 'ease-in-out(0.4, 0, 0.2, 1)',
          physics: { buoyancy: 1.2, wind: 0.5 },
          interactionLogic: 'fluid-reaction'
        };
      case 'loading':
        return {
          idleAnimation: 'magnetic-rotation',
          hoverAnimation: 'acceleration',
          clickAnimation: 'energy-pulse',
          particles: true,
          shaders: 'cyber-glow',
          easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
          physics: { momentum: 0.9, angularVelocity: 4 },
          interactionLogic: 'segmented-motion'
        };
      case 'mechanical':
        return {
          idleAnimation: 'gear-synchronization',
          hoverAnimation: 'mechanical-inertia',
          clickAnimation: 'friction-slowdown',
          particles: false,
          shaders: 'metallic-reflection',
          easing: 'linear',
          physics: { weight: 5, friction: 0.8 },
          interactionLogic: 'weighted-acceleration'
        };
      case 'search':
        return {
          idleAnimation: 'lens-focus',
          hoverAnimation: 'radar-scanning',
          clickAnimation: 'pulse-sweep',
          particles: false,
          shaders: 'magnification-distortion',
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          physics: { tracking: true },
          interactionLogic: 'reactive-tracking'
        };
      case 'directional':
        return {
          idleAnimation: 'subtle-drift',
          hoverAnimation: 'anticipation-spring',
          clickAnimation: 'velocity-burst',
          particles: true, // kinetic trail
          shaders: 'motion-blur',
          easing: 'spring(stiffness: 300, damping: 20)',
          physics: { inertia: 0.6, velocity: 10 },
          interactionLogic: 'momentum'
        };
      case 'ai':
        return {
          idleAnimation: 'neural-pulse',
          hoverAnimation: 'flowing-nodes',
          clickAnimation: 'holographic-distortion',
          particles: true,
          shaders: 'neon-plasma',
          easing: 'ease-in-out',
          physics: { energy: 100, connectionStrength: 0.9 },
          interactionLogic: 'node-communication'
        };
      default:
        return {
          idleAnimation: 'ambient-floating',
          hoverAnimation: 'elastic-scale',
          clickAnimation: 'ripple',
          particles: false,
          shaders: null,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          physics: { mass: 1 },
          interactionLogic: 'standard'
        };
    }
  }

  /**
   * Helper to perform static analysis on the icon name
   */
  static analyzeIcon(iconName: string): IconAnalysis {
    const category = this.detectCategory(iconName);
    return {
      name: iconName,
      category,
      geometry: category === 'mechanical' ? 'circular' : 'variable',
      directionality: category === 'directional',
      symmetry: category !== 'directional',
      motionPotential: [category + '-specific']
    };
  }
}
