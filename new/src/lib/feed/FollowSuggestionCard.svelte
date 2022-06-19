<script>
    export let pfp, name, desc;
</script>

<article class="FollowSuggestion">
    <img src={pfp} alt="{name}'s Profile Picture">

    <a href="/{name}">
        <h3>{name}</h3>
    </a>
    <p class="suggestion__desc">{desc}</p>

    <button class="suggestion__follow">Follow</button>
</article>

<style>
    .FollowSuggestion{
        position: relative;
        display: flex;
        min-width: 161px;
        height: 216px;
        margin: 15px 0;
        margin-right: 5px;
        padding: 16px;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        border: 1px solid rgb(219,219,219);
        background-color: #fff;
        scroll-snap-align: center;
        text-align: center;
    }

    .FollowSuggestion img{
        width: 77px;
        height: 77px;
        margin-top: 2px;
        border-radius: 75px;
    }

    .FollowSuggestion a{
        text-decoration: none;
    }

    .FollowSuggestion h3{
        margin-top: 8px;
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
        color: #262626;
    }

    .FollowSuggestion p{
        margin-top: 4px;
        font-size: 13px;
        font-weight: 400;
        color: #8E8E8E;
    }

    .suggestion__follow{
        position: absolute;
        left: calc(50% - 30.5px);
        bottom: 8px;
        width: 61px;
        height: 30px;
        padding: 5px 9px;
        font-size: 13px;
        font-weight: bold;
        line-height: 18px;
        border: none;
        border-radius: 4px;
        background-color: #0095f6;
        color: #fff;
    }
</style>