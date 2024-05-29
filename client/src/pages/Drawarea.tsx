import React, { useRef, useState, useEffect } from "react";

const DrawArea: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState("black");
  const [penSize, setPenSize] = useState(5);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setPenSize;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    if (context) {
      context.scale(1, 1);
      context.lineCap = "round";
      context.strokeStyle = penColor;
      context.lineWidth = penSize;
      contextRef.current = context;
    }
  }, [penColor, penSize]);

  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;
    if (!contextRef.current) return;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX / scale, offsetY / scale);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (!contextRef.current) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }: React.MouseEvent) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    if (!contextRef.current) return;
    contextRef.current.lineTo(offsetX / scale, offsetY / scale);
    contextRef.current.stroke();
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev * 1.2, 5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev * 0.8, 0.5));
  };

  return (
    <div className="relative w-full h-screen bg-white">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        className="border border-gray-300"
      />
      <div className="absolute top-4 left-4 flex space-x-2 bg-gray-100 p-2 rounded-md shadow-lg">
        {penColor == "black" ? (
          <>
            <button
              onClick={() => setPenColor("white")}
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              Eraser
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setPenColor("black")}
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              Pen
            </button>
          </>
        )}
        <button
          onClick={() => setPenColor("white")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          clear
        </button>
        <button
          onClick={handleZoomIn}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Zoom In
        </button>
        <button
          onClick={handleZoomOut}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Zoom Out
        </button>
      </div>
    </div>
  );
};

export default DrawArea;
