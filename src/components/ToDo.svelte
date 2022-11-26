<script>
    import { toggleCompleted } from '../db/firebase';
    import { createEventDispatcher } from 'svelte';
    export let task, completed, todoId, id;
    import ModalDeleteTodo from './ModalDeleteTodo.svelte';
    
	const dispatch = createEventDispatcher();
    const refresh = () => dispatch('refresh');

    let showModalTodoDelete = false;
    let deleteTodoSubmitted = true;

    function handleChange(){
        toggleCompleted(id, todoId, completed)
    }

</script>

<div class="todo">
    <label class="checkbox" for={todoId}>
            <input type="checkbox" bind:checked={completed} name={task} id={todoId} class="checkbox__input" on:change={() => handleChange()}/>
            <div  class="checkbox__box"></div>
            <div  class="task">{task}</div>
    </label>
    <button class="delete-button" on:click="{() => showModalTodoDelete = true}">
        🗑️
    </button>

</div>

{#if showModalTodoDelete}
	<ModalDeleteTodo id={id} todoId={todoId}  on:close="{() => showModalTodoDelete = false}" on:submitted="{() => deleteTodoSubmitted = true}" on:refresh="{() => refresh()}"/>
{/if}

<style>
    .checkbox{
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        margin-bottom: 2px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 22rem;
        
    }
    .checkbox__input {
        display: none;
    }
    .checkbox__box{
        width: 1.25em;
        height: 1.25em;
        border: 2px solid var(--dark);
        border-radius: 4.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        flex-shrink: 0;
        transition: background-color 0.25s, border-color 0.25s;
    }
    .checkbox__box:hover{
        background-color: var(--hover2);
        border-color: var(--dark);
        transition: background-color 0.25s, border-color 0.25s;
    }
    .checkbox__box::after{
        content: '\2714';
        color: var(--clear);
    }
    .checkbox__input:checked + .checkbox__box{
        background-color: var(--dark);
        border-color: var(--dark);
    }
    .checkbox__input:checked + .task{
        text-decoration: line-through;

    }
    .delete-button{
        background-color: transparent;
        border-color: transparent;
        display: inline-block;
        float: right;
        border-radius: 8px;
    }
    .delete-button:hover{
        background-color: var(--hover);
        border-color: transparent;
        display: inline-block;
        float: right;
    }
    .todo{
        width: 24rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .task{
        width: fit-content;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>