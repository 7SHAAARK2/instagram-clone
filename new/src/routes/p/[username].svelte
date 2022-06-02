<script context="module">
    export function load(data){
        console.log(data.params.username);

        return {
            props: {
                username: data.params.username,
                origin: data.url.origin
            }
        }
    }
</script>

<script>
    export let username, origin;
</script>

<div class="Profile">
    <h1>{username}</h1>
</div>