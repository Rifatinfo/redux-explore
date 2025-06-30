import { cn } from "@/lib/utils";
import type { ITask } from "@/types/types";

interface IProps {
    task : ITask;
}

const TaskCard = ({task} : IProps) => {
    return (
        <div>
            <div className="bg-zinc-900 text-white p-4 rounded-md flex justify-between items-start shadow-md">
                <div>
                    <div className="flex items-center gap-2">
                        <span className={cn("h-2 w-2 rounded-full", {
                            "bg-green-500" : task.isCompleted === "High" ,
                            "bg-red-500" : task.isCompleted === "Low" ,
                        })}></span>
                        <h3 className="text-sm font-medium">{task.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{task.description}</p>
                </div>
                <button className="text-white hover:white not-odd:transition font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default TaskCard;