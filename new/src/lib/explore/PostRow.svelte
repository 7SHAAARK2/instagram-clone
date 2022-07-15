<script>
    import Post from '$lib/explore/Post.svelte';

    export let bigOne = false;
    export let bigOneLeft = false;

    import data from '../../data/posts.json';

    data.forEach(post => {
        post.id = btoa(post.author.username + post.image);
    });
    
</script>

<div class="PostRow" style="flex-direction:{bigOneLeft ? 'row-reverse' : 'row' };">
    {#if bigOne}
        <div class="column">
            <Post img={data[Math.floor(Math.random() * data.length)].image} />
            <Post img={data[Math.floor(Math.random() * data.length)].image} />
        </div>

        <Post isBig={true} img={data[Math.floor(Math.random() * data.length)].image} />
    {:else}
        <!-- https://stackoverflow.com/questions/58213585/svelte-3-how-to-loop-each-block-x-amount-of-times -->
        {#each {length: 3} as _, index}
            <div class="column">
                <Post img={data[Math.floor(Math.random() * data.length)].image} {bigOneLeft} />
                <Post img={data[Math.floor(Math.random() * data.length)].image} {bigOneLeft} />
            </div>
        {/each}
    {/if}
</div>

<style>
    .PostRow{
        display: flex;
        width: 100%;
        height: 212.66px;
        margin-top: 2px;
    }

    .column{
        display: flex;
        flex-direction: column;
    }
</style>