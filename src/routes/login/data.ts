import { Create } from "@sinclair/typebox/value"
import { Object, String } from "@sinclair/typebox"
import { get, writable } from "svelte/store";
import { applyAction } from "$app/forms";
import { page } from "$app/stores";
import { PUBLIC_API_URL } from "$env/static/public";

const LOGIN_URL = PUBLIC_API_URL + "/auth/v1/login/cookie";
const USER_CTX = "USER_CTX";

export const LoginStore = () => {
    const store = writable(Create(LoginRequest));

    return {
        ...store,
        async submit() {
            const pageData = get(page);
            try {
                if (pageData.status == 10) {
                    return console.warn("Other submission is in progress");
                }
                await applyAction({ type: "success", status: 10 });

                const response = await fetch(LOGIN_URL, {
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    body: JSON.stringify(get(store))
                });

                const data = await response.json();

                if (response.status >= 400) {
                    return await applyAction({ type: "failure", status: response.status, data, });
                }

                const { token } = data;
                const [_head, body, _sign] = token.split(".");

                localStorage.setItem(USER_CTX, atob(body));

                const user = JSON.parse(atob(body));

                await applyAction({ type: "success", status: response.status, data: { message: "Login Success as " + user.name } });

                await applyAction({ type: "redirect", status: 302, location: "/" });
            } catch (error) {
                await applyAction({ type: "error", status: 500, error, });
            }
        }
    };
}


export const LoginRequest = Object({
    phone: String(),
    password: String(),
})

