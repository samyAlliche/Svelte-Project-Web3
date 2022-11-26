<script>
    export let deadline;
    const timeLeft = Math.ceil(Math.abs(new Date(deadline.toDate()) - new Date())/(1000*3600*24));
</script>

<div class="pf-deadline">{deadline.toDate().toDateString()} ({timeLeft} days left)</div>

<style>
    .pf-deadline{
        display:inline-block;
        color: gray;
        padding: 1rem;
        font-size: 0.95rem;
        font-family: 'Roboto Mono', monospace;
        font-weight: 300;
    }
</style>