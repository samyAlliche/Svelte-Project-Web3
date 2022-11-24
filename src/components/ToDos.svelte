<script>
    import ToDo from "/src/components/ToDo.svelte";
    import { getTodos } from '/src/db/firebase';
    export let id;
    let todos = getTodos(id);

</script>
{#await todos}
    <p>Loading...</p>
{:then todos}
    <div class="project-todos">
        {#each todos as todo}
            <ToDo id={id} todo={todo} />
        {/each}
    </div>
{:catch error}
    {console.log(error)}
{/await}

<style>
    .project-todos{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>




