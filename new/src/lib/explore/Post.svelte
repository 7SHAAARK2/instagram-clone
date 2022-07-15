<script>
    export let img, isBig;
</script>

<span class="Post" style="
    background-image: url({img});
    {isBig ? 'width: 213.5px; height: 212px;' : ''}
"></span>

<style>
    .Post{
        width: 105px;
        height: 105px;
        margin: 1px 0 1px 0; /* arriba derecha abajo izquierda */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>