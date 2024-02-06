import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const ToDoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 ">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <Button className="bg-red-500">
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
