import { ManagerFs } from '../managers/manager-fs.js';

//'./data/actors.json'

class ActorsModel {

    constructor() {
        this.mgfl = new ManagerFs('./data/actors.json');
        this.actors = this.mgfl.getData();

    }
    getActors() {
        return this.actors;
    }
    getActorsById(id) {
        return this.actors.find(element => element.id == id);
    }

    getActorsBy(elem) {
        return this.actors.filter(element => element[elem.key] == elem.value);
    }

    removeActors(id) {
        const index = this.actors.findIndex(element => element.id == id);
        if (index != -1) this.actors.splice(index, 1);
        return index;
    }

    createActors(req) {
        this.actors.push(req);
        return req;
    }

    addActorToMovie(req) {
        
        // Añadir el códgio ....
        
        const actors = this.getActorsById(req.id);
        actors.actors.push(req.value);
        return req;

    }

    updateActors(req) {
        const actor = this.getActorsById(req.id);
        if (typeof actor != 'undefined') {
            this.removeActors(req.id);
            this.createActors(req);
        }
        return actor;
    }

    getIDFromActor(req) {
        let movies=[];

       // Añadir el códgio ....
       movies = this.getActorsById(req.id);

        return movies;
    }

}

export default new ActorsModel()