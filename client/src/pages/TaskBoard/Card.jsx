import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import "./Card.scss";

export default function Cards({ cards }) {
  return (
    <div className="cards">
      {cards.map(({ title }, key) => (
        <Card title={title} key={key} index={key} />
      ))}
    </div>
  );
}

export const Card = ({ title, index }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <>
      <div
        {...attributes}
        {...listeners}
        ref={setNodeRef}
        style={style}
        className="task-card"
      >
        <h2>{title}</h2>
      </div>
    </>
  );
};
