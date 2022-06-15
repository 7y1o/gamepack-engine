
/** Common canvas class */
export default class CanvasEditor {
    
    /** Canvas element holder */
    private canvas: HTMLCanvasElement;

    /** 2D context of canvas */
    private ctx: CanvasRenderingContext2D;

    public constructor(_c: HTMLCanvasElement) {
        this.canvas = _c;
        this.ctx = _c.getContext('2d')!;
        this.ctx.fillStyle = '#000';
    }

    public test() {
        const animate = () => {
            requestAnimationFrame(() => animate());
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
    }
}
