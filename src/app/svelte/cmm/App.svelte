<script>
	import Router from 'svelte-spa-router';
	import routes from '../../js/routes';
	import Header from "./Header.svelte";
</script>

<Header />
<main>
    <Router {routes} />
</main>