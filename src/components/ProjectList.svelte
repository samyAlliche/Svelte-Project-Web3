<script>
    export let projects;
    import ProjectCard from "./ProjectCard.svelte";
    import Button from "./Button.svelte";
</script>

<div class="projects">
    <div class="projects-handle">
        <h2>PROJECTS</h2>
        <Button>+</Button>
    </div>
    {#if projects === null}
    <div>
        There is no project yet
    </div>
    {:else}
    <div class="project-list">
        {#each projects as project}
            <ProjectCard {project} />
        {/each}
    </div>
    {/if}
</div>

<style>
    .projects {
        margin-left: 15px;
        margin-right: 15px;
    }

    .projects-handle {
        color: var(--dark);
        margin-left: 12px;
        margin-bottom: 0;
    }
    .projects h2{
        font-weight: 300;
        display: inline-block;

    }
    .project-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
</style>