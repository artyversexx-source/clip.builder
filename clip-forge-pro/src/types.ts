export interface MediaClip {
  id: string;
  type: 'image' | 'video' | 'audio';
  src: string;
  name: string;
  duration: number;
  thumbnail?: string;
}

export interface TimelineTrack {
  id: string;
  type: 'video' | 'audio' | 'text';
  clips: TimelineClip[];
}

export interface TimelineClip {
  id: string;
  mediaId: string;
  startTime: number;
  duration: number;
  effects: Effect[];
  caption?: CaptionConfig;
}

export interface Effect {
  id: string;
  type: 'transition' | 'filter' | 'animation';
  name: string;
  value: string | number;
  startTime: number;
  duration: number;
}

export interface CaptionConfig {
  text: string;
  style: CaptionStyle;
  position: { x: number; y: number };
  startTime: number;
  duration: number;
}

export interface CaptionStyle {
  fontSize: number;
  fontFamily: string;
  color: string;
  backgroundColor: string;
  bold: boolean;
  italic: boolean;
}

export interface ProjectConfig {
  aspectRatio: '9:16' | '16:9' | '4:3' | '1:1';
  width: number;
  height: number;
  fps: number;
  bgColor: string;
}

export const ASPECT_RATIOS: Record<string, { width: number; height: number }> = {
  '9:16': { width: 1080, height: 1920 },
  '16:9': { width: 1920, height: 1080 },
  '4:3': { width: 1440, height: 1080 },
  '1:1': { width: 1080, height: 1080 },
};

export const TRANSITIONS = [
  { id: 'fade', name: 'เฟด (Fade)' },
  { id: 'slide-left', name: 'เลื่อนซ้าย (Slide Left)' },
  { id: 'slide-right', name: 'เลื่อนขวา (Slide Right)' },
  { id: 'zoom-in', name: 'ซูมเข้า (Zoom In)' },
  { id: 'zoom-out', name: 'ซูมออก (Zoom Out)' },
  { id: 'blur', name: 'เบลอ (Blur)' },
  { id: 'flash', name: 'แฟลช (Flash)' },
];

export const FILTERS = [
  { id: 'none', name: 'ปกติ (None)' },
  { id: 'grayscale', name: 'ขาวดำ (Grayscale)' },
  { id: 'sepia', name: 'ซีเปีย (Sepia)' },
  { id: 'vintage', name: 'วินเทจ (Vintage)' },
  { id: 'bright', name: 'สว่าง (Bright)' },
  { id: 'contrast', name: 'คอนทราสต์ (Contrast)' },
  { id: 'saturate', name: 'อิ่มตัว (Saturate)' },
  { id: 'warm', name: 'โทนอุ่น (Warm)' },
  { id: 'cool', name: 'โทนเย็น (Cool)' },
];

export const CAPTION_STYLES = [
  { id: 'modern', name: 'โมเดิร์น (Modern)', fontFamily: 'Sarabun' },
  { id: 'classic', name: 'คลาสสิก (Classic)', fontFamily: 'Times New Roman' },
  { id: 'bold', name: 'หนา (Bold)', fontFamily: 'Arial Black' },
  { id: 'elegant', name: 'หรูหรา (Elegant)', fontFamily: 'Georgia' },
  { id: 'playful', name: 'สนุกสนาน (Playful)', fontFamily: 'Comic Sans MS' },
];
