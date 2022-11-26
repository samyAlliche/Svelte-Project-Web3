<script>
	import { createEventDispatcher } from 'svelte';
    import { deleteTodo } from '../db/firebase'
    import {fly} from 'svelte/transition';
    import { goto } from '$app/navigation';

    export let id; // Project id
    export let todoId; // Todo id

	const dispatch = createEventDispatcher();
    const refresh = () => dispatch('refresh');
	const close = () => dispatch('close');
	let modal;

    function handleSubmit(){
        console.log("Todo " + todoId + " from project " + id );
        deleteTodo(id, todoId);
        refresh();
    }
</script>
  

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal} in:fly={{ y:50, duration: 500}} out:fly={{duration: 500}}>
    <h2>Delete todo</h2>
    <form class="form-editproject" on:submit={handleSubmit}>
        <p>Are you sure you want to delete this todo?</p>
        <div class="btn-div">
            <button class="submit-btn" type="button" on:click={handleSubmit}>Yes</button>
            <button class="btn" type="button" on:click={close}>No</button>
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
        font-size: 20px;
        color: var(--clear);
        border-radius: 8px;
        background-color: var(--dark);
        border: 1.5px solid transparent;
        transition: color 0.15s ease-in-out;
        padding: 5px;
        width: 25%;
        font-weight:500;
        text-align: center;
        margin-top: 12px;
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
        background-color: rgb(255, 65, 65);
        color: var(--clear);
        border-radius: 8px;
        border: 1.5px solid var(--clear);
        transition: background-color 0.15s ease-in-out;
        padding: 5px;
        font-weight:500;
        font-size: 20px;
        width: 25%;
        margin-top: 12px;
        text-align: center;
    }
    .submit-btn:hover{
        background-color: var(--hover);
        transition: background-color 0.25s ease-in-out;
        
    }
</style>