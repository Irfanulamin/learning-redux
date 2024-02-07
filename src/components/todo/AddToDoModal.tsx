import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddToDosMutation } from "@/redux/api/api";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { FormEvent, useState } from "react";

const AddToDoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const [addToDos, { data, isLoading, isError, isSuccess }] =
    useAddToDosMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      task: task,
      description: description,
      isCompleted: false,
      priority: priority,
    };

    addToDos(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-cl font-semibold text-white">
          Add ToDo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="priority" />
                </SelectTrigger>
                <SelectContent className="p-2 bg-white border border-slate-500 rounded-md">
                  <SelectGroup>
                    <div
                      className="p-2 text-lg font-semibold"
                      onClick={() => setPriority("high")}
                    >
                      High
                    </div>
                    <hr className="border border-slate-500" />
                    <div
                      className="p-2 text-lg font-semibold"
                      onClick={() => setPriority("medium")}
                    >
                      Medium
                    </div>
                    <hr className="border border-slate-500" />
                    <div
                      className="p-2 text-lg font-semibold"
                      onClick={() => setPriority("easy")}
                    >
                      Easy
                    </div>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddToDoModal;
