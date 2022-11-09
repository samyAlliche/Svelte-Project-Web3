<button class="btn"><slot/></button>

<style>
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