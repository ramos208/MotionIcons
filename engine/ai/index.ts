import fs from 'fs/promises';
import path from 'path';
import { GeometryMetrics } from '../analyzer';

const OLLAMA_BASE_URL = 'http://127.0.0.1:11434';
const OLLAMA_MODEL = 'qwen2.5:3b';
const CACHE_DIR = path.resolve(process.cwd(), '.cache/ai');

export interface AiMotionProfile {
  motionType: string;
  idleAnimation: {
    name: string;
    rotation?: number[] | null;
    scale?: number[] | null;
    translate?: number[] | null;
    duration: number;
    easing: string;
  };
  hoverAnimation: {
    name: string;
    rotation?: number[] | null;
    scale?: number[] | null;
    translate?: number[] | null;
    skew?: number[] | null;
    duration: number;
    easing: string;
    spring: boolean;
  };
  clickAnimation: {
    name: string;
    vibration: boolean;
    ripple: boolean;
  };
  particles: string[];
  shader: string;
  physics: {
    inertia: number;
    elasticity: number;
    mass: number;
    tension: number;
    friction: number;
    damping: number;
    stiffness: number;
  };
  motionPhilosophy: string;
}

export class AiEngine {
  /**
   * Initializes local file cache directories.
   */
  static async initCache(): Promise<void> {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    await fs.mkdir(path.join(CACHE_DIR, 'prompts'), { recursive: true });
    await fs.mkdir(path.join(CACHE_DIR, 'responses'), { recursive: true });
  }

  /**
   * Performs a rapid pre-flight check to see if Ollama service is responsive.
   */
  static async checkOllama(): Promise<boolean> {
    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`);
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Generates a premium dynamic kinetic profile adapted to the icon's exact geometry and semantic meaning.
   */
  static generateDynamicProfile(
    name: string,
    library: string,
    category: string,
    geometry: GeometryMetrics
  ): AiMotionProfile {
    // 1. Determine motion type
    let motionType = 'dynamic-pop';
    if (category === 'notification') {
      motionType = 'pendulum';
    } else if (category === 'weather') {
      motionType = 'turbulence';
    } else if (category === 'loading') {
      motionType = 'rotate';
    } else if (category === 'directional') {
      motionType = 'kinetic-trail';
    } else if (category === 'mechanical') {
      motionType = 'mechanical';
    } else if (category === 'ai') {
      motionType = 'neural-pulse';
    } else if (geometry.curves > 8) {
      motionType = 'radar';
    } else if (geometry.lines > 10) {
      motionType = 'tectonic-glide';
    }

    // 2. Build Idle Animation
    let idleName = 'ambient-floating';
    let idleRotation: number[] | null = null;
    let idleScale: number[] | null = null;
    let idleTranslate: number[] | null = null;
    let idleDuration = 3.0;
    let idleEasing = 'ease-in-out';

    if (motionType === 'rotate') {
      idleName = 'gear-sync';
      idleRotation = [0, 360];
      idleDuration = 4.0;
      idleEasing = 'linear';
    } else if (motionType === 'pendulum') {
      idleName = 'subtle-drift';
      idleRotation = [-6, 6];
      idleDuration = 2.5;
      idleEasing = 'ease-in-out';
    } else if (motionType === 'neural-pulse' || category === 'ai') {
      idleName = 'neural-pulse';
      idleScale = [0.96, 1.04];
      idleDuration = 2.0;
      idleEasing = 'ease-in-out';
    } else if (geometry.complexity === 'simple') {
      idleName = 'subtle-drift';
      idleTranslate = [0, -1];
      idleDuration = 3.5;
    } else {
      idleScale = [0.98, 1.02];
      idleTranslate = [0, -1.5];
    }

    // 3. Build Hover Animation
    let hoverName = 'elastic-scale';
    let hoverRotation: number[] | null = null;
    let hoverScale: number[] | null = null;
    let hoverTranslate: number[] | null = null;
    let hoverSkew: number[] | null = null;
    let hoverDuration = 0.35;
    let hoverEasing = 'cubic-bezier(0.34, 1.56, 0.64, 1)'; // Gorgeous elastic ease-out
    let spring = true;

    if (motionType === 'kinetic-trail' || geometry.directionality) {
      hoverName = 'kinetic-push';
      // Push based on direction in name
      if (name.includes('right')) hoverTranslate = [4, 0];
      else if (name.includes('left')) hoverTranslate = [-4, 0];
      else if (name.includes('up')) hoverTranslate = [0, -4];
      else if (name.includes('down')) hoverTranslate = [0, 4];
      else hoverTranslate = [3, 0];
      hoverDuration = 0.25;
      hoverEasing = 'cubic-bezier(0.25, 1, 0.5, 1)';
      spring = false;
    } else if (motionType === 'mechanical') {
      hoverName = 'gear-rotate';
      hoverRotation = [0, 90];
      hoverDuration = 0.45;
      hoverEasing = 'cubic-bezier(0.76, 0, 0.24, 1)';
    } else if (motionType === 'pendulum') {
      hoverName = 'bell-ring';
      hoverRotation = [-15, 15];
      hoverDuration = 0.5;
      hoverEasing = 'cubic-bezier(0.36, 0.07, 0.19, 0.97)';
    } else {
      // General pop
      hoverScale = [1.15, 1.15];
      if (geometry.complexity === 'complex') {
        hoverRotation = [0, 5];
      }
    }

    // 4. Click Animation
    const clickAnimation = {
      name: motionType === 'kinetic-trail' ? 'vibrate' : 'ripple',
      vibration: motionType === 'kinetic-trail' || category === 'notification',
      ripple: true
    };

    // 5. Particles
    let particles = ['mist'];
    if (category === 'ai' || motionType === 'neural-pulse') {
      particles = ['glow-sparks', 'quantum-dust'];
    } else if (category === 'notification') {
      particles = ['sound-wave'];
    } else if (category === 'weather') {
      particles = ['mist', 'rain-droplet'];
    } else if (geometry.complexity === 'complex') {
      particles = ['light-trail'];
    }

    // 6. Shader
    let shader = 'none';
    if (category === 'ai') {
      shader = 'cyberGlitch';
    } else if (geometry.curves > 10 && geometry.complexity === 'complex') {
      shader = 'neonPlasma';
    } else if (geometry.lines > 12) {
      shader = 'metallicGlow';
    }

    // 7. Physics
    const physics = {
      inertia: parseFloat((0.75 + (geometry.lines * 0.01)).toFixed(2)),
      elasticity: parseFloat((0.65 + (geometry.curves * 0.01)).toFixed(2)),
      mass: parseFloat((0.9 + (geometry.complexity === 'complex' ? 0.3 : 0)).toFixed(2)),
      tension: 120 - (geometry.curves * 2),
      friction: 18 + (geometry.lines * 0.5),
      damping: 14 + (geometry.curves * 0.2),
      stiffness: 220 + (geometry.curves * 5)
    };

    // 8. Philosophy
    const motionPhilosophy = `Dynamic kinetic adaptation for ${name} (${library}). Selected semantic motion: ${motionType} with custom idle (${idleName}) and interaction profile (${hoverName}) matched to SVG complexity (${geometry.complexity}) and flow geometry.`;

    return {
      motionType,
      idleAnimation: {
        name: idleName,
        rotation: idleRotation,
        scale: idleScale,
        translate: idleTranslate,
        duration: idleDuration,
        easing: idleEasing
      },
      hoverAnimation: {
        name: hoverName,
        rotation: hoverRotation,
        scale: hoverScale,
        translate: hoverTranslate,
        skew: hoverSkew,
        duration: hoverDuration,
        easing: hoverEasing,
        spring
      },
      clickAnimation,
      particles,
      shader,
      physics,
      motionPhilosophy
    };
  }

  /**
   * Fetches or generates AI motion profile from local Ollama model.
   * Utilizes file-based cache to eliminate redundant API requests.
   */
  static async generateMotionProfile(
    name: string,
    library: string,
    category: string,
    geometry: GeometryMetrics,
    isOllamaActive = false,
    retries = 1,
    delay = 500
  ): Promise<AiMotionProfile> {
    await this.initCache();
    
    const cacheKey = `${library}_${name}`;
    const cachePath = path.join(CACHE_DIR, 'responses', `${cacheKey}.json`);
    
    // Check local cache first
    try {
      const cached = await fs.readFile(cachePath, 'utf8');
      return JSON.parse(cached);
    } catch {
      // Not cached, proceed to generate
    }

    // If Ollama is not active, run our gorgeous high-fidelity dynamic custom engine instantly!
    if (!isOllamaActive) {
      const dynamicProfile = this.generateDynamicProfile(name, library, category, geometry);
      await fs.writeFile(cachePath, JSON.stringify(dynamicProfile, null, 2));
      return dynamicProfile;
    }

    const prompt = `
You are an elite motion designer and professional animation engineer.
Analyze the following SVG icon parameters and generate a highly custom, semantic, physically believable motion profile.

ICON NAME: ${name}
LIBRARY: ${library}
CATEGORY: ${category}
SVG GEOMETRY METRICS:
- Curves count: ${geometry.curves}
- Corners count: ${geometry.corners}
- Circles count: ${geometry.circles}
- Lines count: ${geometry.lines}
- Complexity: ${geometry.complexity}
- Directional Flow: ${geometry.directionality ? 'Yes' : 'No'}
- Symmetry: ${geometry.symmetry ? 'Yes' : 'No'}
- Detected Motion Opportunities: ${geometry.motionPotential.join(', ')}

Your task is to design a unique kinetic experience for this specific icon.
Return ONLY a valid JSON object matching the TypeScript interface below. Do NOT wrap inside markdown block. Do NOT include any additional chat or output explanation.

Interface:
{
  "motionType": string, // e.g. pendulum, turbulence, pulse, radar, mechanical, dynamic-pop
  "idleAnimation": {
    "name": string, // e.g. neural-pulse, floating, subtle-drift, gear-sync
    "rotation": [number, number] | null,
    "scale": [number, number] | null,
    "translate": [number, number] | null,
    "duration": number,
    "easing": string
  },
  "hoverAnimation": {
    "name": string,
    "rotation": [number, number] | null,
    "scale": [number, number] | null,
    "translate": [number, number] | null,
    "skew": [number, number] | null,
    "duration": number,
    "easing": string,
    "spring": boolean
  },
  "clickAnimation": {
    "name": string,
    "vibration": boolean,
    "ripple": boolean
  },
  "particles": string[], // e.g. ["sound-wave", "glow-sparks", "mist"]
  "shader": string, // e.g. "metallicGlow", "neonPlasma", "cyberGlitch", "none"
  "physics": {
    "inertia": number, // 0.0 to 1.0
    "elasticity": number, // 0.0 to 1.0
    "mass": number,
    "tension": number,
    "friction": number,
    "damping": number,
    "stiffness": number
  },
  "motionPhilosophy": string // Description of the motion behavior design and reasoning
}
`.trim();

    // Cache prompt request
    const promptPath = path.join(CACHE_DIR, 'prompts', `${cacheKey}.txt`);
    await fs.writeFile(promptPath, prompt);

    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: OLLAMA_MODEL,
          prompt: prompt,
          stream: false,
          format: 'json'
        })
      });

      if (!response.ok) {
        throw new Error(`Ollama Server returned HTTP ${response.status}`);
      }

      const body = await response.json();
      const rawText = body.response.trim();
      const parsed: AiMotionProfile = JSON.parse(rawText);

      // Write response to cache
      await fs.writeFile(cachePath, JSON.stringify(parsed, null, 2));
      return parsed;

    } catch (err: any) {
      if (retries > 0) {
        console.warn(`    ⚠️ Ollama generation failed for ${name}. Retrying in ${delay}ms... (${retries} retries left)`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.generateMotionProfile(name, library, category, geometry, isOllamaActive, retries - 1, delay * 1.5);
      }
      
      // Fallback Profile if Ollama is unresponsive
      console.error(`    ✗ Ollama failed completely for ${name}. Loading high-fidelity safe fallback...`);
      const fallback = this.generateDynamicProfile(name, library, category, geometry);
      await fs.writeFile(cachePath, JSON.stringify(fallback, null, 2));
      return fallback;
    }
  }
}
