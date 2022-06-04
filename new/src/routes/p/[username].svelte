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
    import ProfileHeader from '$lib/ProfileHeader.svelte';
    export let username, origin;
</script>

<div class="Profile">
    <ProfileHeader {username} {origin} />
</div>

<style>
    .Profile{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>