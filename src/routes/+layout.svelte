<script>
    import global from '../global.css'; 
</script>

<nav class="navbar">
    <a href="/" class="title"><h1>svelte project manager ☕</h1></a>
    
</nav>

<svelte:head>
    <title>Svelte Project Manager ☕</title>
</svelte:head>
  
<slot></slot>

<style>
    .navbar{
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        padding-top:10px;
        padding-bottom:5px;
        margin-left: 8px;
        margin-right: 8px;
        background-color: var(--bg);
        filter: drop-shadow(0 0 0.5rem rgb(147, 147, 147));
        margin-bottom: 1rem;
    }
</style>

