<script>
    import FollowSuggestionCard from "$lib/feed/FollowSuggestionCard.svelte";
</script>

<div class="FollowSuggestions">
    <FollowSuggestionCard pfp="default.webp" name="bigcat" desc="Suggested" />
    <FollowSuggestionCard pfp="pfp.webp" name="bigcat2" desc="Followed by lorem.ipsum + 5 more" />
    <FollowSuggestionCard pfp="default.webp" name="epicgamer" desc="Epic Gamer" />
</div>

<style>
    .FollowSuggestions{
        display: flex;
        box-sizing: border-box;
        width: 100vw;
        height: 272px;
        margin: 15px 0;
        padding-left: 19px;
        justify-content: space-between;
        border: 1px solid rgb(219,219,219);
        background-color: rgb(250,250,250);
        overflow-x: scroll;
        overscroll-behavior-x: contain;
        scroll-snap-type: x proximity;
    }
</style>