import Role from "./role.js";

export default class Player extends Role 
{
    constructor(data) 
    {
        //super({...data, texture:'female', frame:'townsfolk_f_idle_1'});
        super(data);
    }

    static preload(scene) 
    {
        scene.load.atlas('female', 'assets/images/female.png', 'assets/images/female_atlas.json');
        scene.load.animation('female_anim', 'assets/images/female_anim.json');
    }

    update() 
    {
        this.ctrlMove();
    }

}