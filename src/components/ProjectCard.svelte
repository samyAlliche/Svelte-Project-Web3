<script>
	import DotSeparator from "./DotSeparator.svelte";
    import { countTodos } from '../db/firebase';

    export let id, title, description, deadline;

    const timeLeft =  Math.ceil(Math.abs(new Date(deadline.toDate()) - new Date())/(1000*3600*24));

    const amountOfToDos = countTodos(id);
</script>


<div class="project-card">
    <a href={'/project/' + id}>
        <div class="pc-handle">
            <h3 class="pc-title">{title}</h3> <DotSeparator/>
            <p class="pc-timeleft">{timeLeft} days left</p>
        </div>
        {#await amountOfToDos}
        <div class="pc-tasksleft">Loading tasks...</div>
        {:then amountOfToDos}
            <div class="pc-tasksleft">{amountOfToDos} tasks</div>
        {:catch error}
            {console.log(error)}
        {/await}
        <p class="pc-description">"{description}"</p>
    </a>
</div>


<style>
    .project-card{
        padding: 5px;
        padding-left:22px;
        padding-right: 22px;
        border-radius: 12px;
        margin:0.5rem;
        background-color: white;
        filter: drop-shadow(0 0 0.2rem rgb(147, 147, 147));
        transition: background-color 0.15s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .project-card:hover{
        background-color:rgb(245, 245, 245);
        transition: background-color 0.25s ease-in-out;
    }
    .project-card a{
        text-decoration: none;
        color: var(--dark);

    }
    .pc-title{
        display:inline-block;
        font-weight: 700;
        font-variant-caps: all-petite-caps;
        color: var(--dark);
    }
    .pc-timeleft{
        display:inline-block;
        color: gray;
    }
    .pc-handle{
        margin-bottom: 0;
    }
    .pc-tasksleft{
        margin-top: 0;
        display:inline-block;
        color: gray;
    }
    .pc-description{
        margin-top: 0;
        font-style: italic;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>


