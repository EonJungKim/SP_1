<script>
    async function fetchData() {
        let items = fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&limit=10`).then(res => res.json());
        return items;
    }
</script>

{#await fetchData()}
    <p>loading</p>
{:then items}
    {#each items as item}
        <div style="border: 1px solid black;">
            <p>{item.title}</p>
            <p>{item.body}</p>
        </div>
    {/each}
{:catch error}
    <p style="color: red">error!</p>
{/await}
