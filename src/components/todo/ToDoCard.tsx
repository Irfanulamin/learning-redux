import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { removeTodo, toggleComplete } from "@/redux/feature/toDoSlice";

type TTodoCard = {
  id: string;
  task: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const ToDoCard = ({
  task,
  description,
  id,
  isCompleted,
  priority,
}: TTodoCard) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 ">
      <input
        className="mr-3"
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p className="font-semibold flex-1">{task}</p>
      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-3 rounded-full ${
            priority === "high" ? "bg-red-500" : null
          } 
          ${priority === "medium" ? "bg-yellow-500" : null}
          ${priority === "easy" ? "bg-green-500" : null}
          `}
        ></div>
        <p>{priority}</p>
      </div>
      {isCompleted ? (
        <p className="text-green-500 flex-1">Done</p>
      ) : (
        <p className="text-yellow-500 flex-1">Pending</p>
      )}
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          <Trash2 />
        </Button>
        <Button className="bg-green-500">
          <FilePenLine />
        </Button>
      </div>
    </div>
  );
};

export default ToDoCard;
