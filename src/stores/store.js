import { writable } from "svelte/store";
import projects from '/src/data/projects.json';

let p = {
    projects: projects
}
console.log(p);

export const projs = writable(p);