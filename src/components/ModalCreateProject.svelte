<script>
	import { createEventDispatcher } from 'svelte';
    import { createProject } from '../db/firebase'
    import { Timestamp } from "firebase/firestore";
    import {fly} from 'svelte/transition';
    import { goto } from '$app/navigation';
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
    const submitted = () => dispatch('submitted');
    const today = new Date();
	let modal;
    let title, description, deadline;

    function handleSubmit(){
        let newDate = new Date(deadline);
        let deadlineTs = Timestamp.fromDate(newDate);
        console.log(title, description, deadlineTs);
        
        createProject(title, description, deadlineTs);
        submitted();
        close();
    }

</script>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal} in:fly={{ y:50, duration: 500}} out:fly={{duration: 500}}>
	<button class="btn" on:click={close}>x</button>
    <h2>Create project</h2>
    <form class="form-editproject" on:submit={handleSubmit}>
        <div class="input-edit">
            <label for="title">Title</label>
            <input type="text" bind:value={title} id="title"/>
        </div>
        <div class="input-edit">
            <label for="description">Description</label>
            <input type="text" bind:value={description} id="description"/>
        </div>
        <div class="input-edit">
            <label for="deadline">Deadline</label>
            <input type="date" min={today} bind:value={deadline} id="deadline"/>
        </div>
        <div class="btn-div">
            <button class="submit-btn" type="button" on:click={handleSubmit}>Submit</button>
        </div>
        
    </form>
    <!-- svelte-ignore a11y-autofocus -->
</div>

<style>
    .form-editproject{
        display: flex;
        flex-direction: column;
    }
    .input-edit{
        display: grid;
        grid-template-columns: 25% 75%;
        padding-bottom: 8px;
    }
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.5em;
		background: var(--clear);
        filter: drop-shadow(0 0 0.2rem rgb(147, 147, 147));
	}

	.btn {
        display: inline-block;
        font-size: 16px;
        color: var(--dark);
        border-radius: 8px;
        border: 1.5px solid transparent;
        transition: color 0.15s ease-in-out;
        padding-left: 5px;
        padding-right: 5px;
        font-weight:500;
        float:right;
    }
    .btn:hover{
        color: var(--hover);
        transition: color 0.25s ease-in-out;
        
    }
    .btn:focus{
        color: var(--hover);
        transition: color 0.25s ease-in-out;
    }
    .btn-div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .submit-btn{
        display: inline-block;
        background-color: var(--dark);
        color: var(--clear);
        border-radius: 8px;
        border: 1.5px solid var(--clear);
        transition: background-color 0.15s ease-in-out;
        padding: 5px;
        font-weight:500;
        font-size: 20px;
        width: 50%;
        margin-top: 12px;
        text-align: center;
    }
    .submit-btn:hover{
        background-color: var(--hover);
        transition: background-color 0.25s ease-in-out;
        
    }
</style>