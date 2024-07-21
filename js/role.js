export default class Role extends Phaser.Physics.Matter.Sprite 
{
    constructor(data) 
    {
        let {scene, x, y, texture, frame} = data;
        super(scene.matter.world, x, y, texture, frame);
        this.scene.add.existing(this);

        this.rigidBody();
    }

    get velocity() {return this.body.velocity;}

    rigidBody()
    {
        const {Body, Bodies} = Phaser.Physics.Matter.Matter;
        var roleCollider = Bodies.circle(this.x, this.y, 12, {isSensor: false, label: 'roleCollider'});
        var roleSensor = Bodies.circle(this.x, this.y, 24, {isSensor: true, label: 'roleSensor'});
        const compoundBody = Body.create({
            parts: [roleCollider, roleSensor],
            frictionAir: 0.35,
        });
        this.setExistingBody(compoundBody);
    }

    ctrlMove()
    {
        this.up = this.up??0;
        this.dn = this.dn??0;
        this.lf = this.lf??0;
        this.rt = this.rt??0;

        const speed = 1;
        let roleVelocity = new Phaser.Math.Vector2();

        this.up=this.inputKeys.up.isDown?3:Math.max(0,this.up-1);
        this.dn=this.inputKeys.down.isDown?3:Math.max(0,this.dn-1);
        this.lf=this.inputKeys.left.isDown?3:Math.max(0,this.lf-1);
        this.rt=this.inputKeys.right.isDown?3:Math.max(0,this.rt-1);

        if(this.up>0&&this.dn==0){roleVelocity.y=-1;}
        else if(this.up==0&&this.dn>0){roleVelocity.y=1;}
        if(this.lf>0&&this.rt==0){roleVelocity.x=-1;}
        else if(this.lf==0&&this.rt>0){roleVelocity.x=1;}

        roleVelocity.normalize();
        roleVelocity.scale(speed);
        this.setVelocity(roleVelocity.x,roleVelocity.y);

        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1)
        {
            this.anims.play('walk', true);
        }
        else
        {
            this.anims.play('idle', true);
        }
    }

}