<script>
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
</script>


<div>
    <a
            href="/"
            use:link
            use:active>
        Home
    </a>
    <a
            href="/about"
            use:link
            use:active>
        About
    </a>
    <a
            href="/blog"
            use:link
            use:active>
        Blog
    </a>
</div>

<style>
    :global(header a.active) {
        font-weight: bold;
        text-decoration: underline;
    }
</style>