<script>
    import Post from '$lib/Post.svelte'
    import posts from '../data/posts.json';

    posts.forEach(post => {
        post.id = btoa(post.author.username + post.image);
    });

    // console.log(posts[0]);
</script>

<div class="Feed">
    {#each posts as post}
        <Post data={post} />
    {/each}
</div>