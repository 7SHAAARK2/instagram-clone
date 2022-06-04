<script>
    import Post from '$lib/Post.svelte'

    let postDataTemplate = {
        author: {
            username: 'feli________________',
            pfp: 'pfp.webp'
        },
        image: 'posts/post.jpg',
        likes: 658,
        comments: {
            quantity: 6,
            contents: [
                {
                    author: 'duki',
                    content: 'yo'
                },
                {
                    author: 'kendricklamar',
                    content: 'this shit hard'
                }
            ] 
        }
    }
</script>

<div class="Feed">
    <Post data={postDataTemplate} />
</div>