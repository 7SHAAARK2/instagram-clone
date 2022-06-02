<script>
    import Post from '$lib/Post.svelte'

    let authorTemplate = {
        username: 'feli________________'
    }
</script>

<div class="Feed">
    <Post author={authorTemplate} />
</div>