import { loadUser } from "$/lib/user"
import { error } from "@sveltejs/kit";

export const load = () => {
    const user = loadUser();
    if (!user) {
        error(401, { message: "Authentication Required" });
    }

    if (user.role !== "Sales") {
        error(403, { message: "You are not allowed to access this resource" });
    }
}
