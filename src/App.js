import { useState } from 'react';
import './App.css';  // เราจะใส่ CSS ที่นี่

function App() {
  const [level, setLevel] = useState(0);  // เก็บค่าระดับ Level ของน้องหมู
  const [imageSize, setImageSize] = useState(150);  // ขนาดของรูปน้องหมูเริ่มต้น
  const [pigImage, setPigImage] = useState('/moo.png');  // รูปน้องหมูเริ่มต้น

  // ฟังก์ชันสำหรับให้อาหาร
  const feedPig = (amount) => {
    const newLevel = level + amount;
    setLevel(newLevel);
    setImageSize(imageSize + amount * 2);  // เพิ่มขนาดรูปหมูตามจำนวนอาหาร

    // เปลี่ยนรูปน้องหมูเมื่อเลเวลเกิน 100
    if (newLevel >= 100) {
      setPigImage('/mysalf.jpg');  // รูปหมูตัวใหญ่
    }
  };

  return (
    <div className="game-container">
      <h1 className="level-display">Level {level}</h1>
      <img
        src={pigImage}
        alt="Pig"
        className="pig-image"
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
      />
      <div className="food-buttons">
        <button className="food-button" onClick={() => feedPig(5)}>
          <img src="/tangmo.jpg" alt="Watermelon" className="food-icon" />
          ให้อาหาร: แตงโม (+5 Level)
        </button>
        <button className="food-button" onClick={() => feedPig(10)}>
          <img src="/pumpkin.jpg" alt="Pumpkin" className="food-icon" />
          ให้อาหาร: ฟักทอง (+10 Level)
        </button>
        <button className="food-button" onClick={() => feedPig(20)}>
          <img src="/gass.jpg" alt="Grass" className="food-icon" />
          ให้อาหาร: หญ้า (+20 Level)
        </button>
      </div>
    </div>
  );
}

export default App;
