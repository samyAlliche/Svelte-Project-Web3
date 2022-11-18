<script>
    export let nextTodoId;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let value = "";
    function handleKeyUp({key}){
        if (key !== "Enter" || value.length === 0) return;
        dispatch("newitem", value);
        
        const newToDo = {
            "id":nextTodoId,
            "task":value,
            "done": false
        }
        
       console.log(newToDo);
        value = "";
        //const formData = new FormData(e.target);

        
        //console.log(formData);
    }


</script>

<input type="text" on:keyup={handleKeyUp} bind:value class="add-note" placeholder="✎  Add a new task"/>

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