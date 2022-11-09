<script>
    export let todo;
</script>

<div class="todo">
    <label class="checkbox" for={todo.id}>
        {#if todo.done == false}
            <input type="checkbox" name={todo.task} id={todo.id} class="checkbox__input" >
            <div class="checkbox__box"></div>
            <div class="task">{todo.task}</div>
        {:else}
            <input type="checkbox" name={todo.task} id={todo.id} class="checkbox__input" checked>
            <div class="checkbox__box"></div>
            <div class="task">{todo.task}</div>
        {/if}
    </label>
    
</div>

<style>
    .checkbox{
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        margin-bottom: 2px;
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
</style>