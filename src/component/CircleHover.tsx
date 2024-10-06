import React, { useState } from "react";
import styles from "./CircleHover.module.css";

interface ItemData {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  type: string;
  imageUrl?: string; // Used for default arrow image
  hoverImageUrl?: string; // Used for hover arrow image
}

interface CircleHoverProps {
  items: ItemData[];
}

const CircleHover: React.FC<CircleHoverProps> = ({ items }) => {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  return (
    <div className={styles["circle-container"]}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${styles.item} ${hoveredItemId === item.id ? styles.glow : ""}`}
          style={{
            top: `${item.y}px`,
            left: `${item.x}px`,
            width: `${item.width}px`,
            height: `${item.height}px`,
          }}
          onMouseEnter={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          {item.type === "circle" && (
            <div className={styles["circle"]}></div> // Circle div with border and box-shadow
          )}

          {item.type === "arrow" && (
            <div className={styles["arrow"]}>
              <img
                src={item.imageUrl}
                alt=""
                className={`${styles.defaultArrow} ${hoveredItemId === item.id ? styles.hidden : ""}`}
              />
              <img
                src={item.hoverImageUrl}
                alt=""
                className={`${styles.hoverArrow} ${hoveredItemId === item.id ? styles.visible : ""}`}
              />
            </div>
          )}
        </div>
      ))}

      {hoveredItemId !== null && (
        <div className={styles["hover-text"]}>
          {items.find((item) => item.id === hoveredItemId)?.text}
        </div>
      )}
    </div>
  );
};

export default CircleHover;
