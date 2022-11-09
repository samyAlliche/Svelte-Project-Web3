<script>
    export let project;
    import ToDo from "/src/components/ToDo.svelte"
</script>

<div class="project-todos">
    {#each project.todo as todo}
        <ToDo {todo} />
    {/each}
</div>

<style>
    .project-todos{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>




