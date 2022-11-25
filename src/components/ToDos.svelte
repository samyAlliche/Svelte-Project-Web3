<script>
    import ToDo from "/src/components/ToDo.svelte";
    import { getTodos } from '/src/db/firebase';
    import { Moon } from 'svelte-loading-spinners';
    export let id;
    let todos = getTodos(id);

</script>
{#await todos}
    <div class="loader">
        <Moon size="60" color="#443020" unit="px" duration="1s" />
    </div>
{:then todos}
    <div class="project-todos">
        {#each todos as todo}
            <ToDo id={id} todoId={todo.id} task={todo.task} completed={todo.completed} />
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




