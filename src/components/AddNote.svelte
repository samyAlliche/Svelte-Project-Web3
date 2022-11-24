<script>
    import { addTodo } from '../db/firebase';
    import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const refresh = () => dispatch('refresh');

    const params = $page.params.id;
    let value = "";
    
    function handleKeyUp({key}){
        if (key !== "Enter" || value.length === 0) return;
        let task = value;
        addTodo(params, task);
        value = "";
        refresh();
    }


</script>

<input type="text" on:keyup={handleKeyUp} bind:value={value} class="add-note" placeholder="✎  Add a new task"/>

<style>
    .add-note__form {
        display: flex;

    }
    .add-note {
        background-color: var(--clear);
        padding: 12px;
        border-radius: 12px;
        border: 0px ;
        outline: none;
        width: 22rem;
        color: var(--dark);
    }
</style>