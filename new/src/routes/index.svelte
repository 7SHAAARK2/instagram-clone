<svelte:head>
    <title>Instagram</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import Header from '$lib/feed/Header.svelte';
    import Stories from '$lib/feed/Stories.svelte';
    import Feed from '$lib/feed/Feed.svelte';
    import FollowSuggestions from '$lib/feed/FollowSuggestions.svelte';
</script>

<main>
    <Header />
    <Stories />
    <Feed />
    <FollowSuggestions />
</main>

<style>
    /* I'm having a hard time with setting these styles, i really dont know how to do it or if what im doing even actually works */
    /* I mean, it does... sometimes, its really confusing */


    /* Ok nevermind i think i got it, i wrote the 2 comments above like 15 minutes ago */

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