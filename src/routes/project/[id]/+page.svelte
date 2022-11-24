
<script>
    //import projects from '/src/data/projects.json';
    import Button from '/src/components/Button.svelte';
    import ProjectFrame from '/src/components/ProjectFrame.svelte';
    import {fly} from 'svelte/transition';
    import { getProject } from '/src/db/firebase';
    import { Moon } from 'svelte-loading-spinners';

    
    import { page } from '$app/stores';
    console.log($page.params)
    const params = $page.params.id;

    let project = getProject(params);

</script>

{#await project}
    <div class="loader">
        <Moon size="60" color="#443020" unit="px" duration="1s" />
    </div>
{:then project}
    <div class="container" in:fly={{ y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
        <a href="/" class="back-btn">
            <Button>⬅ BACK</Button>
        </a>
        <ProjectFrame id={params} title={project.title} description={project.description} deadline={project.deadline}/>
    </div>
{:catch error}
    {console.log(error)}
{/await}


<style>
    .container {
        margin:0.5rem;
        margin-left: 15px;
        margin-right: 15px;
    }
    .back-btn{
        margin-left:20px;
    }
</style>