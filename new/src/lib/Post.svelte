<script>
    export let data;
</script>

<div class="Post">
    <div class="post__header">
        <!-- <p>{author.username}</p> -->
        <span class="post__header_pfp" style="background-image: url('{data.author.pfp}');"></span>
        <a href="/p/{data.author.username}">
            {data.author.username}
        </a>
    </div>
</div>

<style>
    .Post{
        display: flex;
        box-sizing: border-box;
        width: 100vw;
        height: 619px;
        flex-direction: column;
    }

    .post__header{
        position: relative;
        display: flex;
        width: 100%;
        height: 70px;
        border-bottom: 1px solid rgb(239,239,239);
    }

    .post__header_pfp{
        position: absolute;
        display: inline-block;
        width: 32px;
        height: 32px;
        top: 20px;
        bottom: 14px;
        right: 4px;
        left: 15px; 
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .post__header a{
        margin-left: calc(32px + 30px);
        margin-top: 20px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        color: #262626;
    }
</style>