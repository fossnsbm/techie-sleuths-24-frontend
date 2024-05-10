'use client';
import React from 'react';

interface CoinsRowProps {
    centerCount: number;
    sideCount: number;
}

const CoinsRow: React.FC<CoinsRowProps> = ({ centerCount, sideCount }) => {
    const totalImages = centerCount + 2 * sideCount;
    const images = Array(totalImages).fill({ src: "/assets/coin.png", alt: "Coin" });

    const centerStartIndex = sideCount;
    const centerEndIndex = centerStartIndex + centerCount;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'visible' }}>
            {images.map((image, index) => {
                let opacity = 0.2;

                if (index >= centerStartIndex && index < centerEndIndex) {
                    opacity = 1;
                } else if (index < centerStartIndex) {
                    const distanceFromCenter = centerStartIndex - index;
                    opacity = 1 - ((distanceFromCenter - 1) * (1 / sideCount));
                    opacity = Math.max(opacity, 0.1);
                } else {
                    const distanceFromCenter = index - centerEndIndex;
                    opacity = 1 - (distanceFromCenter * (1 / sideCount));
                    opacity = Math.max(opacity, 0.1);
                }

                return (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        style={{
                            opacity,
                            transition: 'opacity 0.5s',
                            margin: '0 10px',
                        }}
                    />
                );
            })}
        </div>
    );
};

export default CoinsRow;
