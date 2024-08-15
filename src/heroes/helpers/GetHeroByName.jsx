import { heroes } from "../data/heroes";

export const GetHeroByName = (name = '') => {


    name = name.toLowerCase().trim();

    if(name.trim().length === 0) return [];
    
    
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))



}
