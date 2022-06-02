<script>
    export let pfp;
    export let username;
</script>

<div class="Story">
    <img src={pfp} alt="pfp">
    <p>{username}</p>
</div> 

<style>
    .Story{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 4px;
        margin-left: 9px;
    }

    .Story img{
        width: 56px;
        margin-top: 4px;
        margin-bottom: 8px;
        padding: 1px;
        border: 2px solid #DFDFDF;
        border-radius: 50%;
    }

    .Story p{
        margin: 0;
        font-size: 12px;
        color: #8E8E8E;
    }
</style>