import { useDroppable, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import "./Column.scss";

const KanbanItem = ({ title, index, parent, item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      item,
      index,
      parent,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      className="task"
      style={style}
    >
      <h2 className="task__heading">{title.toUpperCase()}</h2>
      <p className="task__description">Description</p>
    </div>
  );
};

const Column = ({ title, items, id }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  console.log(items, id);
  return (
    <>
      <div className="column">
        <h3 className="column__heading">{title}</h3>
        <div ref={setNodeRef} className="column__list">
          {items.map((item, key) => (
            <KanbanItem
              title={item.task_title}
              item={item}
              key={key}
              index={key}
              parent={title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
