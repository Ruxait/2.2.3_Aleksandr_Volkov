import { useState, KeyboardEvent, useRef } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  const colors = ["red", "orange", "green"];

  function handleClick(index: number) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, index: number) {
    if (event.key === 'Enter') {
      handleClick(index);
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const currentIndex = index;
      const nextIndex = event.shiftKey
        ? (currentIndex - 1 + colors.length) % colors.length 
        : (currentIndex + 1) % colors.length; 
      circlesRef.current[nextIndex]?.focus();
    }
  }

  return (
    <div className="semaphore-container">
      {colors.map((color, index) => (
        <div className="semaphore-item" key={color}>
          <Circle
            ref={(el) => {
              if (el) circlesRef.current[index] = el;
            }}
            color={color}
            onClick={() => handleClick(index)}
            active={activeIndex === index}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
