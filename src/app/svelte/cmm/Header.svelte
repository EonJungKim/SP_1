<script>
    import { link } from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
</script>

<div>
    <a href="/home" use:link use:active>Home</a>
    <a href="/restaurant" use:link use:active>Restaurant</a>
    <a href="/calendar" use:link use:active>Calendar</a>
</div>

<style>
    :global(header a.active) {
        font-weight: bold;
        text-decoration: underline;
    }
</style>