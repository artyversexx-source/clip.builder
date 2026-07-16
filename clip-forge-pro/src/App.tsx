import { useVideoEditor } from './useVideoEditor';
import { TRANSITIONS, FILTERS, CAPTION_STYLES } from './types';
import './App.css';

function App() {
  const {
    mediaLibrary,
    tracks,
    currentTime,
    isPlaying,
    projectConfig,
    canvasRef,
    handleFileUpload,
    addToTimeline,
    removeClip,
    togglePlay,
    seek,
    getTotalDuration,
    changeAspectRatio,
    setSelectedClip,
    setProjectConfig,
  } = useVideoEditor();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>🎬 ClipForge PRO</h1>
        <p className="subtitle">ระบบสร้างคลิปวิดีโอระดับมืออาชีพ</p>
      </header>

      <div className="main-content">
        {/* Left Panel - Media Library */}
        <aside className="media-panel">
          <h2>📁 คลังสื่อ</h2>
          <div className="upload-area">
            <input
              type="file"
              id="file-upload"
              multiple
              accept="image/*,video/*,audio/*"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              style={{ display: 'none' }}
            />
            <label htmlFor="file-upload" className="upload-btn">
              📤 อัปโหลดสื่อ
            </label>
            <p className="upload-hint">ลากวาง หรือคลิกเพื่ออัปโหลด</p>
          </div>

          <div className="media-grid">
            {mediaLibrary.map((media) => (
              <div key={media.id} className="media-item">
                {media.thumbnail ? (
                  <img src={media.thumbnail} alt={media.name} />
                ) : (
                  <div className="media-placeholder">🎵</div>
                )}
                <div className="media-info">
                  <span className="media-name">{media.name}</span>
                  <span className="media-duration">{formatTime(media.duration)}</span>
                </div>
                <div className="media-actions">
                  <button onClick={() => addToTimeline(media.id, 'video-1')}>
                    + เพิ่มในไทม์ไลน์
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Aspect Ratio Selector */}
          <div className="aspect-ratio-section">
            <h3>📐 อัตราส่วนภาพ</h3>
            <div className="ratio-buttons">
              {(['9:16', '16:9', '4:3', '1:1'] as const).map((ratio) => (
                <button
                  key={ratio}
                  className={`ratio-btn ${projectConfig.aspectRatio === ratio ? 'active' : ''}`}
                  onClick={() => changeAspectRatio(ratio)}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          {/* Effects & Filters */}
          <div className="effects-section">
            <h3>✨ เอฟเฟกต์และฟิลเตอร์</h3>
            <div className="effect-categories">
              <div className="effect-category">
                <h4>Transition</h4>
                <div className="effect-list">
                  {TRANSITIONS.map((t) => (
                    <button key={t.id} className="effect-btn">{t.name}</button>
                  ))}
                </div>
              </div>
              <div className="effect-category">
                <h4>Filter</h4>
                <div className="effect-list">
                  {FILTERS.map((f) => (
                    <button key={f.id} className="effect-btn">{f.name}</button>
                  ))}
                </div>
              </div>
              <div className="effect-category">
                <h4>Caption Style</h4>
                <div className="effect-list">
                  {CAPTION_STYLES.map((s) => (
                    <button key={s.id} className="effect-btn">{s.name}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Center - Preview */}
        <main className="preview-panel">
          <h2>🖥️ พรีวิว</h2>
          <div className="canvas-container">
            <canvas
              ref={canvasRef}
              width={projectConfig.width / 4}
              height={projectConfig.height / 4}
              className="preview-canvas"
            />
          </div>

          {/* Playback Controls */}
          <div className="playback-controls">
            <button onClick={() => seek(0)} className="control-btn">⏮</button>
            <button onClick={togglePlay} className="control-btn play-btn">
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button onClick={() => seek(getTotalDuration())} className="control-btn">⏭</button>
            <span className="time-display">
              {formatTime(currentTime)} / {formatTime(getTotalDuration())}
            </span>
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            <h3>📊 ไทม์ไลน์</h3>
            <div className="timeline-tracks">
              {tracks.map((track) => (
                <div key={track.id} className="timeline-track">
                  <div className="track-header">
                    <span>{track.type === 'video' ? '🎬 วิดีโอ' : '🎵 เสียง'}</span>
                  </div>
                  <div className="track-content">
                    {track.clips.map((clip) => {
                      const media = mediaLibrary.find((m) => m.id === clip.mediaId);
                      return (
                        <div
                          key={clip.id}
                          className="timeline-clip"
                          style={{
                            left: `${(clip.startTime / Math.max(getTotalDuration(), 60)) * 100}%`,
                            width: `${(clip.duration / Math.max(getTotalDuration(), 60)) * 100}%`,
                          }}
                          onClick={() => setSelectedClip(clip)}
                        >
                          {media?.thumbnail && (
                            <img src={media.thumbnail} alt="" className="clip-thumbnail" />
                          )}
                          <span className="clip-name">{media?.name || 'คลิป'}</span>
                          <button
                            className="remove-clip-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeClip(clip.id);
                            }}
                          >
                            ✕
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Panel - Properties */}
        <aside className="properties-panel">
          <h2>⚙️ คุณสมบัติ</h2>
          <div className="property-section">
            <h3>การตั้งค่าโปรเจกต์</h3>
            <div className="property-group">
              <label>ความกว้าง:</label>
              <input
                type="number"
                value={projectConfig.width}
                onChange={(e) => setProjectConfig({ ...projectConfig, width: Number(e.target.value) })}
              />
            </div>
            <div className="property-group">
              <label>ความสูง:</label>
              <input
                type="number"
                value={projectConfig.height}
                onChange={(e) => setProjectConfig({ ...projectConfig, height: Number(e.target.value) })}
              />
            </div>
            <div className="property-group">
              <label>FPS:</label>
              <input
                type="number"
                value={projectConfig.fps}
                onChange={(e) => setProjectConfig({ ...projectConfig, fps: Number(e.target.value) })}
              />
            </div>
            <div className="property-group">
              <label>สีพื้นหลัง:</label>
              <input
                type="color"
                value={projectConfig.bgColor}
                onChange={(e) => setProjectConfig({ ...projectConfig, bgColor: e.target.value })}
              />
            </div>
          </div>

          <div className="export-section">
            <h3>📤 ส่งออก</h3>
            <button className="export-btn">🎬 ส่งออกเป็นวิดีโอ</button>
            <button className="export-btn">🖼️ ส่งออกเป็นรูปภาพ</button>
            <button className="export-btn">💾 บันทึกโปรเจกต์</button>
            <button className="export-btn">📋 ส่งออกเป็นรายการฉาก</button>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="shortcuts-section">
            <h3>⌨️ ปุ่มลัด</h3>
            <div className="shortcut-list">
              <div className="shortcut-item">
                <kbd>Space</kbd>
                <span>เล่น/หยุด</span>
              </div>
              <div className="shortcut-item">
                <kbd>←</kbd>
                <span>ย้อนกลับ</span>
              </div>
              <div className="shortcut-item">
                <kbd>→</kbd>
                <span>ไปข้างหน้า</span>
              </div>
              <div className="shortcut-item">
                <kbd>Delete</kbd>
                <span>ลบคลิปที่เลือก</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
