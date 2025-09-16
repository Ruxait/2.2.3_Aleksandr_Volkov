import { useState, KeyboardEvent } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleClick(index: number) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, index: number) {
    if (event.key === 'Enter') {
      handleClick(index);
    }

    if (event.key === 'Tab') {
      event.preventDefault();

      const circles = document.querySelectorAll<HTMLDivElement>('.circle');
      const currentIndex = Array.from(circles).indexOf(event.currentTarget);

      const nextIndex = event.shiftKey
        ? (currentIndex - 1 + circles.length) % circles.length
        : (currentIndex + 1) % circles.length;

      circles[nextIndex]?.focus();
    }
  }

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          color="red"
          onClick={() => handleClick(0)}
          active={activeIndex === 0}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          tabIndex={0}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          color="orange"
          onClick={() => handleClick(1)}
          active={activeIndex === 1}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          tabIndex={0}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          color="green"
          onClick={() => handleClick(2)}
          active={activeIndex === 2}
          onKeyDown={(e) => handleKeyDown(e, 2)}
          tabIndex={0}
        />
      </div>
    </div>
  );
}

export default App;
