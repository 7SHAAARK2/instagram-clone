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
    <span class="post__image" style="background-image: url('{data.image}');"></span>
    <div class="post__options-n-comments">
        <div class="post__options">
            <svg aria-label="Unlike" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            <svg aria-label="Comment" class="options__comment_icon" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            <svg aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            <svg aria-label="Save" class="options__save_icon" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
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
        margin-top: 26px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        color: #262626;
    }

    .post__image{
        display: inline-block;
        width: 100vw;
        height: 100vw;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .post__options-n-comments{
        width: 100vw;
        height: 228px;
        padding-left: 16px;
    }

    .post__options{
        position: relative;
        display: flex;
        width: 100%;
        height: 54px;
        margin-top: 14px;
        padding-top: 6px;
        padding-bottom: 8px;
        vertical-align: baseline;
    }

    .options__comment_icon{
        margin-left: 16px;
        margin-right: 16px;
    }

    .options__save_icon{
        margin-left: 175px;
    }
</style>