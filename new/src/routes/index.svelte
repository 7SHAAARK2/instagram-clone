<svelte:head>
    <title>Instagram</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import Header from '$lib/Header.svelte';
    import Stories from '$lib/Stories.svelte';
    import Feed from '$lib/Feed.svelte';
</script>

<main>
    <Header />
    <Stories />
    <Feed />
    <h1>brr</h1>
</main>

<style>
    :global(*){
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body,main){
        font-family: 'Roboto', sans-serif;
    }
</style>