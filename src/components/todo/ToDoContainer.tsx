// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddToDoModal from "./AddToDoModal";
import ToDoCard from "./ToDoCard";
import ToDoCardDefault from "./ToDoCardDefault";
import ToDoFilter from "./ToDoFilter";
import { useGetToDosQuery } from "@/redux/api/api";

const ToDoContainer = () => {
  // * From Local State
  // const todos = useAppSelector((state) => state.todos.todos);

  // * From Server

  const [priority, setPriority] = useState("");

  const { data: todos, isLoading, isError, error } = useGetToDosQuery(priority);

  if (isLoading) {
    return <p>loading</p>;
  }
  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <AddToDoModal />
          <ToDoFilter priority={priority} setPriority={setPriority} />
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-3">
          <ToDoCardDefault></ToDoCardDefault>
          {todos?.data?.map((item) => (
            <ToDoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoContainer;
