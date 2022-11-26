<script>
    //export let projects;
    //import projects from '../data/projects.json';
    import ProjectList from '../components/ProjectList.svelte';
    import {fly} from 'svelte/transition';
    let submitted = 0;

    
	
</script>

<section in:fly={{ y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
    {#key submitted}
    <ProjectList on:submitted="{() => submitted++}"/>
    {/key}
</section>



<style>
    

</style>