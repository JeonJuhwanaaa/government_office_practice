import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Circle, Text, Group } from "react-konva";
import useImage from 'use-image';

export default function FieldSensorKonva({ src, sensors = [] }) {

    const wrapRef = useRef(null);
    const [size, setSize] = useState({w: 0, h: 0});
    const [img] = useImage(src);

    useEffect(() => {
        if (!wrapRef.current) {
            return;
        }
        const ro = new ResizeObserver(([entry]) => {
            const {width, height} = entry.contentRect;
            setSize({w: Math.floor(width), h: Math.floor(height)});
        });

        // console.log('ro: ',ro);
        ro.observe(wrapRef.current);
        return () => ro.disconnect();
    }, []);

    const fit = useMemo(() => {
        if ( !img || size.w === 0 || size.h === 0 ) {
            return { scale: 1, x: 0, y: 0 }
        }

        const iw = img.width;
        const ih = img.height;
        const scale = Math.min(size.w/iw, size.h/ih);
        const x = (size.w - iw * scale) / 2;
        const y = (size.h - ih * scale) / 2;
        
        return {scale, x, y};
    }, [img, size.w, size.h]);

    const getColor = (status) => {
        if (status === "danger") return "red";
        if (status === "warning") return "orange";
        return "green";
    };

    return (
        <div ref={wrapRef} style={{width: '100%', height: '100%'}}>
            <Stage width={size.w} height={size.h}>
                <Layer>
                    {
                        sensors.map((s) => {
                            const px = fit.x + s.x * fit.scale;
                            const py = fit.y + s.y * fit.scale;

                            return (
                                <Group key={s.id} x={px} y={py}>
                                    <Circle radius={7} fill={getColor(s.status)} stroke='white' strokeWidth={2} />
                                    <Text text={s.id} x={10} y={-7} fontSize={12} fill="#111" />
                                </Group>
                            );
                        })
                    }
                </Layer>
            </Stage>
        </div>
    );
};