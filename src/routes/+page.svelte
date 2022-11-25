<script>
    //export let projects;
    //import projects from '../data/projects.json';
    import ProjectList from '../components/ProjectList.svelte';
    import {fly} from 'svelte/transition';
    

    
	
</script>

<section in:fly={{ y:50, duration: 500, delay: 500}} out:fly={{duration: 500}}>
    <ProjectList />
</section>



<style>
    

</style>