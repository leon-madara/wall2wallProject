import React, { useState, useRef } from 'react';
import { Stage, Layer, Image, Circle } from 'react-konva';
import Konva from 'konva';
import Header from './Header';
import HeroSection from './HeroSection';
import './App.css';

function App() {
  const [showVisualizer, setShowVisualizer] = useState(false);
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState([]);
  const [resultImage, setResultImage] = useState(null);
  const stageRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new window.Image();
        img.src = reader.result;
        img.onload = () => {
          setImage(img);
          setPoints([]);
        };
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleStageClick = (e) => {
    if (points.length < 4) {
      const point = e.target.getStage().getPointerPosition();
      setPoints([...points, point]);
    }
  };

  const handleVisualize = async () => {
    if (points.length !== 4) {
      alert('Please select 4 points on the image.');
      return;
    }

    const formData = new FormData();
    const file = document.querySelector('input[type="file"]').files[0];
    formData.append('image', file);
    formData.append('points', JSON.stringify(points));

    try {
      const response = await fetch('http://localhost:8000/visualize', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const imageBlob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          const img = new window.Image();
          img.src = reader.result;
          img.onload = () => {
            setResultImage(img);
          };
        };
        reader.readAsDataURL(imageBlob);
      } else {
        console.error('Failed to visualize image.');
      }
    } catch (error) {
      console.error('Error visualizing image:', error);
    }
  };

  return (
    <div className="App">
      <Header onStartVisualizer={() => setShowVisualizer(true)} />
      {!showVisualizer ? (
        <HeroSection
          onTryVisualizer={() => setShowVisualizer(true)}
          onExploreDesigns={() => alert('Explore Designs clicked!')}
        />
      ) : (
        <>
          <h1>Wall-to-Wall Visualizer</h1>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleVisualize} disabled={points.length !== 4}>
            Visualize
          </button>
          <div className="stage-container">
            <Stage
              width={window.innerWidth * 0.8}
              height={window.innerHeight * 0.7}
              onClick={handleStageClick}
              ref={stageRef}
            >
              <Layer>
                {image && <Image image={image} />}
                {points.map((point, i) => (
                  <Circle key={i} x={point.x} y={point.y} radius={5} fill="red" />
                ))}
              </Layer>
            </Stage>
          </div>
          {resultImage && (
            <div>
              <h2>Result</h2>
              <div className="stage-container">
                <Stage
                  width={window.innerWidth * 0.8}
                  height={window.innerHeight * 0.7}
                >
                  <Layer>
                    <Image image={resultImage} />
                  </Layer>
                </Stage>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
