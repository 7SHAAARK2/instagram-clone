<script>
    import Story from '$lib/feed/Story.svelte';
</script>

<div class="Stories">
    <Story pfp="pfp.webp" username="Your Story"/>
    <Story pfp="default.webp" username="NotYourStory"/>
</div>

<style>
    .Stories{
        box-sizing: border-box;
        display: flex;
        width: 100vw;
        height: 104px;
        background-color: #FAFAFA;
        border-bottom: 1px solid rgba(219,219,219);
        padding: 12px 0 12px 0;
    }
</style>