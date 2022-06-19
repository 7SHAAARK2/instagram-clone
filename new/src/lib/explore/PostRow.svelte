<script>
    import Post from '$lib/explore/Post.svelte';

    export let bigOne = false;
    export let bigOneLeft = false;
</script>

<div class="PostRow" style="flex-direction:{bigOneLeft ? 'row' : 'row-reverse'};">
    {#if bigOne}
        <h1>{bigOneLeft}</h1>
    {:else}
        <h1>a</h1>
    {/if}
</div>

<style>
    .PostRow{
        display: flex;
        width: 100%;
        height: 212.66px;
        margin-top: 2px;
        flex-direction: row-reverse;
    }
</style>