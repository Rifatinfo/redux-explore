import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Nav = () => {
    return (
        <div className="flex items-center justify-center mt-10 gap-2">
            <ModeToggle/>
            <div>
                <Button><Link to="/tasks">tasks</Link></Button>
            </div>
        </div>
    );
};

export default Nav;