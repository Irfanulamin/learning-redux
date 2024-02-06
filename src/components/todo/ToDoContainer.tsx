import { useAppSelector } from "@/redux/hook";
import AddToDoModal from "./AddToDoModal";
import ToDoCard from "./ToDoCard";
import ToDoCardDefault from "./ToDoCardDefault";
import ToDoFilter from "./ToDoFilter";

const ToDoContainer = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <AddToDoModal />
          <ToDoFilter />
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-3">
          <ToDoCardDefault></ToDoCardDefault>
          {todos.map((item) => (
            <ToDoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
