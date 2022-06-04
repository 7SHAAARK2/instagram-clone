<script>
    export let username, origin;
</script>

<main>
    <a href={origin}>
        <svg aria-label="Back" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg>
    </a>
    <h2>{username}</h2>
</main>

<style>
    main{
        box-sizing: border-box;
        display: flex;
        width: 100vw;
        height: 44px;
        border-bottom: 1px solid rgba(219,219,219);
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    svg{
        margin-top: 4px;
        margin-right: 48px;
        transform: rotate(270deg);
    }

    h2{
        margin-top: 5px;
        margin-right: 17px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: #262626;
    }
</style>