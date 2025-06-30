
import { Input as TextInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserInput = () => {
    return (
        <div>
            <div>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <TextInput id="name-1" name="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="username-1">Username</Label>
                        <TextInput id="username-1" name="username" defaultValue="@peduarte" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInput;