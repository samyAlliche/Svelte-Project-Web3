
<script>
    import ToDos from "/src/components/ToDos.svelte";
    import projects from '/src/data/projects.json';
    import Button from '/src/components/Button.svelte';
    import ProjectFrame from '/src/components/ProjectFrame.svelte';
    import {fly} from 'svelte/transition';
    import AddNote from '/src/components/AddNote.svelte';
    
    import { page } from '$app/stores';
    console.log($page.params)
    const params = $page.params.id;

    const project = projects[params];
</script>

<div class="container" in:fly={{ y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
    <a href="/" class="back-btn">
        <Button>⬅ BACK</Button>
    </a>
    <ProjectFrame {project}/>
</div>


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