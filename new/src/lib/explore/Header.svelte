<script></script>

<nav class="Header">
    <form action="" class="header__form">
        <label for="search__input"></label>
        <span class="search__input_icon"></span>
        <input type="text" name="search__input" id="search__input" class="search__input" placeholder="Search">
    </form>
</nav>

<style>
    .Header{
        display: flex;
        width: 100vw;
        height: 45px;
        justify-content: center;
        border-bottom: 1px solid rgba(219,219,219);
    }

    .header__form{
        position: relative;
    }

    .search__input{
        width: 288px;
        height: 30px;
        margin-top: 6.5px;
        padding-left: 13px;
        border: 1px solid rgba(219,219,219);
        border-radius: 5px;
        text-align: center;
        outline: none;
        background-color: rgb(250, 250, 250);
    }

    .search__input_icon{
        position: absolute;
        display: inline-block;
        width: 10px;
        height: 10px;
        top: 16.5px;
        left: calc(50% - 28px);
        background-image: url('search-icon.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>