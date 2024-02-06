import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { removeTodo, toggleComplete } from "@/redux/feature/toDoSlice";

type TTodoCard = {
  id: string;
  task: string;
  description: string;
  isCompleted?: boolean;
};

const ToDoCard = ({ task, description, id, isCompleted }: TTodoCard) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 ">
      <input
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p className="font-semibold">{task}</p>
      {isCompleted ? (
        <p className="text-green-500">Done</p>
      ) : (
        <p className="text-yellow-500">Pending</p>
      )}
      <p>{description}</p>
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
