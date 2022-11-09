
<script>
    import ToDos from "/src/components/ToDos.svelte";
    import projects from '/src/data/projects.json';
    import Button from '/src/components/Button.svelte';
    import {fly} from 'svelte/transition';
    
    import { page } from '$app/stores';
    console.log($page.params)
    const params = $page.params.id;

    const project = projects[params];
    console.log(project);
    const timeLeft =  Math.ceil(Math.abs(new Date(project.deadline) - new Date())/(1000*3600*24));
</script>

<div class="container" in:fly={{ y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
    <a href="/" class="back-btn">
        <Button>⬅ BACK</Button>
    </a>
    <div class="project-frame">
        <div class="pf-handle">
            <div class="pf-title">{project.title}</div>
            <div class="pf-deadline">{project.deadline} ({timeLeft} days left)</div>
        </div>
        
        <div class="pf-description">"{project.description}"</div>
        <ToDos {project} />
    </div>
</div>


<style>
    .container {
        margin:0.5rem;
        margin-left: 15px;
        margin-right: 15px;
    }
    .project-frame{
        padding: 5px;
        padding-left:22px;
        padding-right: 22px;
        border-radius: 12px; 
        margin-top: 0.75rem;
        
    }
    .pf-handle{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
    .pf-title{
        display:inline-block;
        font-weight: 700;
        font-size: 2rem;
        font-variant-caps:all-petite-caps;
        color: #443020;
    }
    .pf-deadline{
        display:inline-block;
        color: gray;
        padding: 1rem;
        font-size: 0.95rem;
        font-family: 'Roboto Mono', monospace;
        font-weight: 300;
    }
    .pf-description{
        font-style: italic;
    }
    .back-btn{
        margin-left:20px;
    }
</style>