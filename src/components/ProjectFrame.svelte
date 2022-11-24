<script>
    import ToDos from "/src/components/ToDos.svelte";
    import AddNote from '/src/components/AddNote.svelte';
    export let id, title, description, deadline;
    import ModalEditProject from './ModalEditProject.svelte';
	import DotSeparator from "./DotSeparator.svelte";

	let showModal = false;

    const timeLeft =  Math.ceil(Math.abs(new Date(deadline.toDate()) - new Date())/(1000*3600*24));

</script>

<div class="project-frame">
    <div class="pf-handle">
        <div class="pf-tb">
            <div class="pf-title">{title}</div>
            <DotSeparator/>
            <button class="edit-button" on:click="{() => showModal = true}">
	            ✏️
            </button>
        </div>
        <div class="pf-deadline">{deadline.toDate().toDateString()} ({timeLeft} days left)</div>
    </div>
    
    <div class="pf-description">"{description}"</div>
    <ToDos id={id}/>
    <AddNote/>
</div>
{#if showModal}
	<ModalEditProject id={id} title={title} description={description} deadline={deadline} on:close="{() => showModal = false}"/>
{/if}

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
    .pf-tb{
        margin-left: 12px;
        margin-bottom: 0;
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
    .edit-button{
        background-color:transparent
    }
    .edit-button{
        display: inline-block;
        font-size: 22px;
        background-color: var(--dark);
        color: var(--clear);
        border-radius: 8px;
        border: 0px solid var(--dark);
        transition: background-color 0.15s ease-in-out;
        padding-left: 5px;
        padding-right: 5px;
        font-weight:500;
        width: 40px;
        height:40px;
    }
    .edit-button:hover{
        background-color: var(--hover);
        transition: background-color 0.25s ease-in-out;
        
    }
    .edit-button:focus{
        background-color: #9a7868;
        transition: background-color 0.25s ease-in-out;
    }
</style>