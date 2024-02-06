import { Button } from "../ui/button";
import ToDoCard from "./ToDoCard";
import ToDoCardDefault from "./ToDoCardDefault";

const ToDoContainer = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <Button className="bg-primary-gradient text-cl font-semibold text-white">
            Add ToDo
          </Button>
          <button>Filter</button>
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-3">
          <ToDoCardDefault></ToDoCardDefault>
          <ToDoCard></ToDoCard>
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
