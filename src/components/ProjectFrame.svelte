<script>
    import ToDos from "/src/components/ToDos.svelte";
    import AddNote from '/src/components/AddNote.svelte';
    import ModalEditProject from './ModalEditProject.svelte';
    import ModalDeleteProject from './ModalDeleteProject.svelte';
	import DotSeparator from "./DotSeparator.svelte";
    import { createEventDispatcher } from 'svelte';
    import { getProject } from '/src/db/firebase';
    import { Moon } from 'svelte-loading-spinners';
	import ProjectDeadline from "./ProjectDeadline.svelte";
    const dispatch = createEventDispatcher();
	const submitted = () => dispatch('submitted');
    export let id;

    let project = getProject(id);
	let showModalEdit = false;
    let showModalDelete = false;
    let deleteSubmitted = true;
    let refreshTodos = 0;


</script>
{#await project}
    <div class="loader">
        <Moon size="60" color="#443020" unit="px" duration="1s" />
    </div>
{:then project}
<div class="project-frame">
    <div class="pf-handle">
        <div class="pf-tb">
            <div class="pf-title">{project.title}</div>
            <DotSeparator/>
            <button class="edit-button" on:click="{() => showModalEdit = true}">
	            ✏️
            </button>
            <button class="delete-button" on:click="{() => showModalDelete = true}">
	            🗑️
            </button>
        </div>
        <ProjectDeadline deadline={project.deadline} />
    </div>
    
    <div class="pf-description">"{project.description}"</div>
    {#key refreshTodos}
    <ToDos id={id} on:refresh="{() => refreshTodos++}"/>
    {/key}
    <AddNote on:refresh="{() => refreshTodos++}"/>
</div>
{#if showModalEdit}
	<ModalEditProject id={id} title={project.title} description={project.description} deadline={project.deadline} on:close="{() => showModalEdit = false}" on:submitted="{() => submitted()}"/>
{/if}
{#if showModalDelete}
	<ModalDeleteProject id={id} on:close="{() => showModalDelete = false}" on:submitted="{() => deleteSubmitted = true}"/>
{/if}
{:catch error}
    {console.log(error)}
{/await}

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
    .delete-button{
        display: inline-block;
        font-size: 22px;
        background-color: transparent;
        color: var(--clear);
        border-radius: 50px;
        border: 0px solid var(--dark);
        transition: background-color 0.15s ease-in-out;
        padding-left: 5px;
        padding-right: 5px;
        font-weight:500;
        width: 40px;
        height:40px;
    }
    .delete-button:hover{
        background-color: rgb(252, 49, 49);
        transition: background-color 0.25s ease-in-out;
        
    }
    .delete-button:focus{
        background-color: #9a7868;
        transition: background-color 0.25s ease-in-out;
    }
</style>