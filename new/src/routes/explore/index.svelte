<svelte:head>
    <title>Instagram</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import Header from '$lib/explore/Header.svelte';
    import Posts from '$lib/explore/Posts.svelte';
</script>

<div class="Explore">
    <header>
        <Header />
    </header>

    <Posts />
</div>

<style>
    :global(*){
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body,main){
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
</style>