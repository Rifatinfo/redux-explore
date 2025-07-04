import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/hooks";
import { addUser } from "@/redux/user/userSlice";
import type { IUser } from "@/types/types";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const AddUserModal = () => {
    const dispatch = useAppDispatch();
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Form Data:", data);
        dispatch(addUser(data as IUser));
    };
    return (
        <div>
            
                <Dialog>
                <DialogTrigger asChild>

                    <Button variant="outline">Add Task Module</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>User</DialogTitle>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter name" {...field} value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
                </Dialog>
        </div>
    );
};

export default AddUserModal;