import { useState, useRef, useCallback } from 'react';
import { MediaClip, TimelineTrack, TimelineClip, ProjectConfig, ASPECT_RATIOS } from './types';

export function useVideoEditor() {
  const [mediaLibrary, setMediaLibrary] = useState<MediaClip[]>([]);
  const [tracks, setTracks] = useState<TimelineTrack[]>([
    { id: 'video-1', type: 'video', clips: [] },
    { id: 'audio-1', type: 'audio', clips: [] },
  ]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedClip, setSelectedClip] = useState<TimelineClip | null>(null);
  const [projectConfig, setProjectConfig] = useState<ProjectConfig>({
    aspectRatio: '9:16',
    width: ASPECT_RATIOS['9:16'].width,
    height: ASPECT_RATIOS['9:16'].height,
    fps: 30,
    bgColor: '#000000',
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const handleFileUpload = useCallback((files: FileList) => {
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      const isVideo = file.type.startsWith('video/');
      const isAudio = file.type.startsWith('audio/');
      const isImage = file.type.startsWith('image/');

      if (isVideo || isAudio || isImage) {
        const clip: MediaClip = {
          id: crypto.randomUUID(),
          type: isVideo ? 'video' : isAudio ? 'audio' : 'image',
          src: url,
          name: file.name,
          duration: isImage ? 5 : 0,
        };

        if (isVideo) {
          const video = document.createElement('video');
          video.src = url;
          video.onloadedmetadata = () => {
            clip.duration = video.duration;
            clip.thumbnail = generateThumbnail(video);
            setMediaLibrary((prev) => [...prev, clip]);
          };
        } else if (isImage) {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            clip.thumbnail = url;
            setMediaLibrary((prev) => [...prev, clip]);
          };
        } else {
          setMediaLibrary((prev) => [...prev, clip]);
        }
      }
    });
  }, []);

  const generateThumbnail = (video: HTMLVideoElement): string => {
    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, 160, 90);
      return canvas.toDataURL('image/jpeg');
    }
    return '';
  };

  const addToTimeline = useCallback((mediaId: string, trackId: string) => {
    const media = mediaLibrary.find((m) => m.id === mediaId);
    if (!media) return;

    const newClip: TimelineClip = {
      id: crypto.randomUUID(),
      mediaId,
      startTime: tracks
        .find((t) => t.id === trackId)
        ?.clips.reduce((max, c) => Math.max(max, c.startTime + c.duration), 0) || 0,
      duration: media.duration || 5,
      effects: [],
    };

    setTracks((prev) =>
      prev.map((track) =>
        track.id === trackId
          ? { ...track, clips: [...track.clips, newClip] }
          : track
      )
    );
  }, [mediaLibrary, tracks]);

  const updateClip = useCallback((clipId: string, updates: Partial<TimelineClip>) => {
    setTracks((prev) =>
      prev.map((track) => ({
        ...track,
        clips: track.clips.map((clip) =>
          clip.id === clipId ? { ...clip, ...updates } : clip
        ),
      }))
    );
  }, []);

  const removeClip = useCallback((clipId: string) => {
    setTracks((prev) =>
      prev.map((track) => ({
        ...track,
        clips: track.clips.filter((clip) => clip.id !== clipId),
      }))
    );
    setSelectedClip(null);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    } else {
      setIsPlaying(true);
      startTimeRef.current = performance.now() - currentTime * 1000;
      animate();
    }
  }, [isPlaying, currentTime]);

  const animate = useCallback(() => {
    const elapsed = (performance.now() - startTimeRef.current) / 1000;
    setCurrentTime(elapsed);

    if (canvasRef.current) {
      renderFrame(canvasRef.current, elapsed);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const renderFrame = useCallback((canvas: HTMLCanvasElement, time: number) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = projectConfig.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    tracks.forEach((track) => {
      if (track.type === 'video') {
        track.clips.forEach((clip) => {
          if (time >= clip.startTime && time < clip.startTime + clip.duration) {
            const media = mediaLibrary.find((m) => m.id === clip.mediaId);
            if (media && media.type === 'image') {
              const img = new Image();
              img.src = media.src;
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
          }
        });
      }
    });
  }, [tracks, mediaLibrary, projectConfig]);

  const seek = useCallback((time: number) => {
    setCurrentTime(Math.max(0, time));
    if (!isPlaying && canvasRef.current) {
      renderFrame(canvasRef.current, time);
    }
  }, [isPlaying, renderFrame]);

  const getTotalDuration = useCallback(() => {
    return tracks.reduce(
      (max, track) =>
        Math.max(
          max,
          ...track.clips.map((c) => c.startTime + c.duration)
        ),
      0
    );
  }, [tracks]);

  const changeAspectRatio = useCallback((ratio: '9:16' | '16:9' | '4:3' | '1:1') => {
    const dimensions = ASPECT_RATIOS[ratio];
    setProjectConfig((prev) => ({
      ...prev,
      aspectRatio: ratio,
      width: dimensions.width,
      height: dimensions.height,
    }));
  }, []);

  return {
    mediaLibrary,
    tracks,
    currentTime,
    isPlaying,
    selectedClip,
    projectConfig,
    canvasRef,
    handleFileUpload,
    addToTimeline,
    updateClip,
    removeClip,
    togglePlay,
    seek,
    getTotalDuration,
    changeAspectRatio,
    setSelectedClip,
    setProjectConfig,
  };
}
