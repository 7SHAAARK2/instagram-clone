<script context="module">
    export function load(data) {
        console.log(data);

        return {
            props: {
                code: data.status,
            }
        }
    }
</script>

<script>
    export let code;
</script>

<div class="Error">
    <img src="https://http.cat/{code}" alt="{code}">
</div>

<style>
    .Error{
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .Error img{
        width: 100vw;
        height: 100vh;
    }
</style>