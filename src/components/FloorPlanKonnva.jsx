import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Circle, Text } from "react-konva";
import useImage from "use-image";

export default function FloorPlanKonva({ imageSrc, markers = [] }) {
  const boxRef = useRef(null);
  const stageRef = useRef(null);

  const [size, setSize] = useState({ w: 800, h: 500 });
  const [img] = useImage(imageSrc, "anonymous");

  const [view, setView] = useState({ scale: 1, x: 0, y: 0 });

  useEffect(() => {
    const el = boxRef.current;
    
    if (!el) {
      return;
    }

    const ro = new ResizeObserver(() => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    });

    ro.observe(el);

    setSize({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!img || !size.w || !size.h) return;

    const scale = Math.min(size.w / img.width, size.h / img.height);
    const x = (size.w - img.width * scale) / 2;
    const y = (size.h - img.height * scale) / 2;
    const stage = stageRef.current;

    setView({ scale, x, y });

    if (stage) {
      stage.scale({ x: scale, y: scale });
      stage.position({ x, y });
      stage.batchDraw();
    }
  }, [img, size.w, size.h]);

  const handleWheel = (e) => {
    const stage = stageRef.current;
    
    e.evt.preventDefault();
    
    if (!stage) {
      return;
    }

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    
    if (!pointer) {
      return;
    }

    const scaleBy = 1.05;
    const direction = e.evt.deltaY > 0 ? -1 : 1;
    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    stage.position(newPos);

    setView({ scale: newScale, x: newPos.x, y: newPos.y });
    stage.batchDraw();
  };

  return (
    <div ref={boxRef} style={{ width: "100%", height: "100%" }}>
      <Stage
        ref={stageRef}
        width={size.w}
        height={size.h}
        draggable
        onWheel={handleWheel}
        style={{ background: "#fff" }}
      >
        <Layer>
          {img && <KonvaImage image={img} x={0} y={0} />}

          {markers.map((m) => (
            <React.Fragment key={m.id}>
              <Circle
                x={m.x}
                y={m.y}
                radius={8}
                fill={m.type === "forklift" ? "red" : "blue"}
                stroke="#333"
                strokeWidth={1}
              />
              {m.label && (<Text x={m.x + 10} y={m.y - 10} text={m.label} fontSize={42} fill="white" />)}
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </div>
  );
}