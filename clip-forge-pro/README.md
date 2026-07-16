# 🎬 ClipForge PRO

ระบบสร้างและแก้ไขคลิปวิดีโอระดับมืออาชีพ พัฒนาด้วย React + TypeScript + Vite

## ✨ ฟีเจอร์หลัก

### 📁 การจัดการสื่อ
- อัปโหลดรูปภาพ, วิดีโอ, และไฟล์เสียง
- แสดงตัวอย่างสื่อพร้อม thumbnail
- รองรับหลายรูปแบบไฟล์

### 🎥 ไทม์ไลน์แบบมืออาชีพ
- หลายแทร็ก (วิดีโอ, เสียง)
- ลากวางคลิปได้ง่าย
- แก้ไขระยะเวลาและตำแหน่ง
- ลบคลิปที่ไม่ต้องการ

### 🎨 เอฟเฟกต์และฟิลเตอร์
- **Transitions**: เฟด, เลื่อน, ซูม, เบลอ, แฟลช
- **Filters**: ขาวดำ, ซีเปีย, วินเทจ, สว่าง, คอนทราสต์
- **Caption Styles**: โมเดิร์น, คลาสสิก, หนา, หรูหรา, สนุกสนาน

### 📐 อัตราส่วนภาพ
- 9:16 (แนวตั้ง - TikTok, Reels, Shorts)
- 16:9 (แนวนอน - YouTube)
- 4:3 (มาตรฐาน)
- 1:1 (สี่เหลี่ยมจัตุรัส)

### ⚙️ การตั้งค่าโปรเจกต์
- ปรับความกว้างและความสูง
- ตั้งค่า FPS
- เลือกสีพื้นหลัง

### 📤 ส่งออก
- ส่งออกเป็นวิดีโอ
- ส่งออกเป็นรูปภาพ
- บันทึกโปรเจกต์
- ส่งออกเป็นรายการฉาก

### ⌨️ ปุ่มลัด
- `Space` - เล่น/หยุด
- `←` - ย้อนกลับ
- `→` - ไปข้างหน้า
- `Delete` - ลบคลิปที่เลือก

## 🚀 การติดตั้งและใช้งาน

```bash
# ติดตั้ง dependencies
npm install

# รันในโหมดพัฒนา
npm run dev

# สร้าง production build
npm run build

# พรีวิว build
npm run preview
```

## 🛠️ เทคโนโลยีที่ใช้

- **React 19** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Canvas API** - Rendering

## 📂 โครงสร้างโปรเจกต์

```
clip-forge-pro/
├── src/
│   ├── App.tsx          # Component หลัก
│   ├── App.css          # Styles
│   ├── types.ts         # TypeScript types
│   ├── useVideoEditor.ts # Custom hook
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 แผนการพัฒนาต่อไป

- [ ] WebCodecs API สำหรับการเรนเดอร์วิดีโอจริง
- [ ] FFmpeg.wasm สำหรับการส่งออกวิดีโอ
- [ ] Drag & drop ในไทม์ไลน์
- [ ] Keyframe animation
- [ ] Audio waveform visualization
- [ ] Template ระบบ
- [ ] Cloud storage integration

## 📄 License

MIT
