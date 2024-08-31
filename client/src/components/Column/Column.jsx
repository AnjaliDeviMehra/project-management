import { useDroppable, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import delete_icon from "../../assets/icons/delete.png";
import "./Column.scss";
import edit from "../../assets/icons/edit.png";
import { Link } from "react-router-dom";

const KanbanItem = ({ title, index, parent, item, userId, projectId }) => {
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
      <h2 className="task__heading">{title}</h2>
      <section className="task__body">
        <p className="task__due">Due : {item.due_date}</p>
        <div className="task__buttons">
          <Link
            to={`/delete/${userId}/${projectId}/${item.id}`}
            className="task__button"
          >
            <img src={delete_icon} alt="delete icon" className="task__icon" />
          </Link>
          <Link
            to={`/edit/${userId}/${projectId}/${item.id}`}
            className="task__button"
          >
            <img src={edit} alt="edit icon" className="task__icon" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const Column = ({ title, items, id, userId, projectId }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });

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
              userId={userId}
              projectId={projectId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
