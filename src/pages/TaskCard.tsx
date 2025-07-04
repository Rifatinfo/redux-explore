import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/task/taskSlice";
import { selectUsers } from "@/redux/user/userSlice";
import type { ITask } from "@/types/types";

interface IProps {
    task : ITask;
}

const TaskCard = ({task} : IProps) => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    const assignedUser = users.find((user) => user.id === task.assignedTo);
    // console.log(assignedUser);
    
    return (
        <div>
            <div className="bg-zinc-900 text-white p-4 rounded-md flex justify-between items-start shadow-md">
                <div>
                    <div className="flex items-center gap-2 text-white">
                        <span className={cn("h-2 w-2 rounded-full", {
                            "bg-green-500" : task.isCompleted === "High" ,
                            "bg-red-500" : task.isCompleted === "Low" ,
                        })}></span>
                        <h3 className={cn({"text-sm font-medium line-through" : task.isTask})}>{task.title}</h3>
                    </div>
                    <p className="text-xs  mt-1 text-white">{task.description}</p>
                    <p className="text-xs  mt-1 text-white">Assigned To - {assignedUser ? assignedUser.name : "No One"}</p>
                    {/* <p className="text-xs  mt-1 text-white">Assigned To - {task.assignedTo || "not Found"}</p> */}
                </div>
                <button className="text-white hover:white not-odd:transition font-bold flex items-center">
                    <input checked={task.isTask} type="checkbox" onClick={() => dispatch(toggleCompleteState(task.id))} />
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> dispatch(deleteTask(task.id))} className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;