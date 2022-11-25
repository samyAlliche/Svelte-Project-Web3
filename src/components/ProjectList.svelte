<script>
    import ProjectCard from "./ProjectCard.svelte";
    import ModalCreateProject from "./ModalCreateProject.svelte";
    import { getProjects, projectsCollection } from '../db/firebase';
    import { onSnapshot } from "firebase/firestore";
    import { Moon } from 'svelte-loading-spinners';

    let projs = getProjects();
    let showModal = false;
    
    /*
    const getAllDocs = onSnapshot(projectsCollection, (querySnapshot) => {
        let firebaseProjects = [];
        querySnapshot.forEach((doc) =>{
            let project = {...doc.data(), id: doc.id}
            firebaseProjects = [project, ...firebaseProjects]
        });
        projs = firebaseProjects;
        console.table(projs);
    })
    */

</script>

{#await projs}
    <div class="loader">
        <Moon size="60" color="#443020" unit="px" duration="1s" />
    </div>
{:then projs}
    <div class="projects">
        <div class="projects-handle">
            <h2>PROJECTS</h2>
            <button class="btn" on:click="{() => showModal = true}">+</button>
        </div>
        {#if projs === null}
        <div>
            <p>There is no project yet</p>
        </div>
        {:else}
        <div class="project-list">
            {#each projs as project}
                <ProjectCard id={project.id} title={project.title} description={project.description} deadline={project.deadline}/>
            {/each}
        </div>
        {/if}
    </div>
    {#if showModal}
        <ModalCreateProject on:close="{() => showModal = false}"/>
    {/if}
{:catch error}
    {console.log(error)}
{/await}

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
    .btn {
        display: inline-block;
        font-size: 22px;
        background-color: var(--dark);
        color: var(--clear);
        border-radius: 8px;
        border: 1.5px solid var(--clear);
        transition: background-color 0.15s ease-in-out;
        padding-left: 5px;
        padding-right: 5px;
        font-weight:500;
    }
    .btn:hover{
        background-color: var(--hover);
        transition: background-color 0.25s ease-in-out;
        
    }
    .btn:focus{
        background-color: #9a7868;
        transition: background-color 0.25s ease-in-out;
    }
</style>