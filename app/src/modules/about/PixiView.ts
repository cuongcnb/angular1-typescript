/**
 * @author ddennis.dk - aka fantastisk.dk/works aka meresukker.dk
 */
//REQUIRE -------------------------------------------------------------

import * as PIXI from 'pixi.js'


export class PixiView {

    renderer:any;
    stage:any;
    text:any;

    private _w:number
    private _h:number
    timer:any


    constructor(element:any, _w:number , _h:number) {

        this._w = _w;
        this._h = _h;

        var options = {
            antialias: false,
            backgroundColor: 0xFF00CC,
            resolution: 2,
            transparent:false,
            autoResize:true,
            roundPixels:true
        };

        this.renderer = PIXI.autoDetectRenderer(_w, _h, options);
        element.append(this.renderer.view);

        this.stage = new PIXI.Container();

        this.text = new PIXI.Text('text on canvas' , { font: '20px arial', fill: 'white', align: 'left' });
        this.moveText ();

        this.stage.addChild (this.text);
        this.animate();

    }



    private moveText() {

        //console.log (" PixiView.ts > MOVE = " );
        this.text.x = Math.random() * this._w - 50;
        this.text.y = Math.random() * this._h - 10;

        this.timer = setTimeout( () => {
            console.log (" PixiView.ts tick= " );
            this.moveText()
        }, 1000 )
        //setTimeout(()=>console.log("arrowfunc"), 1000);
    }



    // handling requestAnimationFrame like a boss, tip from http://stackoverflow.com/questions/21924719/how-to-use-requestanimationframe-with-a-typescript-object
    animate = () => {
        this.renderer.render(this.stage);
        requestAnimationFrame(this.animate);
    };


    // this destroy function is called when the directive is called
    public destroy() {
        clearTimeout(this.timer);
        console.log (" PixiView.ts > whas destroyed = " );
    }


}

