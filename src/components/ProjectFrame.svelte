<script>
    import ToDos from "/src/components/ToDos.svelte";
    import AddNote from '/src/components/AddNote.svelte';
    export let project;
    let nextTodoId = project.todo.length;
    const timeLeft =  Math.ceil(Math.abs(new Date(project.deadline) - new Date())/(1000*3600*24));
</script>

<div class="project-frame">
    <div class="pf-handle">
        <div class="pf-title">{project.title}</div>
        <div class="pf-deadline">{project.deadline} ({timeLeft} days left)</div>
    </div>
    
    <div class="pf-description">"{project.description}"</div>
    <ToDos {project} />
    <AddNote {nextTodoId}/>
</div>

<style>
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
</style>