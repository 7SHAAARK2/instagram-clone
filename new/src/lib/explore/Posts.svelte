<script>
    import PostRow from '$lib/explore/PostRow.svelte';
</script>

<div class="Posts">
    <!-- Each row has either 6 normal posts or 2 normal posts and a big one -->
    <PostRow bigOne={true} />
    <PostRow /> 
    <PostRow bigOne={true} bigOneLeft={true} />
</div>

<style>
    .Posts{
        display: flex;
        width: 100vw;
        height: auto;
        overflow: scroll;
        align-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #fff;
    }
</style>