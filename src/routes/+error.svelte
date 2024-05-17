<script>
import { UserStore } from "$/lib/user";
import { page } from "$app/stores";

const user = UserStore();

</script>

<div>
    <a href="/">Back Home</a>
</div>
<button on:click={() => user.logout()}>Logout</button>
<pre>{JSON.stringify($page,null,2)}</pre>
