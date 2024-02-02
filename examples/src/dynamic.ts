export default function () {
  const app = new PIXI.Application({ antialias: true });
  document.body.appendChild(app.view);

  app.stage.interactive = true;

  const graphics = new PIXI.Graphics();

  graphics.beginFill(0xff3300);
  graphics.lineStyle(10, 0xffd900, 1);

  graphics.moveTo(50, 50);
  graphics.lineTo(250, 50);
  graphics.lineTo(100, 100);
  graphics.lineTo(250, 220);
  graphics.lineTo(50, 220);
  graphics.lineTo(50, 50);
  graphics.closePath();
  graphics.endFill();

  graphics.lineStyle(10, 0xff0000, 0.8);
  graphics.beginFill(0xff700b, 1);

  graphics.moveTo(210, 300);
  graphics.lineTo(450, 320);
  graphics.lineTo(570, 350);
  graphics.quadraticCurveTo(600, 0, 480, 100);
  graphics.lineTo(330, 120);
  graphics.lineTo(410, 200);
  graphics.lineTo(210, 300);
  graphics.closePath();
  graphics.endFill();

  graphics.lineStyle(2, 0x0000ff, 1);
  graphics.drawRect(50, 250, 100, 100);

  graphics.lineStyle(0);
  graphics.beginFill(0xffff0b, 0.5);
  graphics.drawCircle(470, 200, 100);
  graphics.endFill();

  graphics.lineStyle(20, 0x33ff00);
  graphics.moveTo(30, 30);
  graphics.lineTo(600, 300);

  app.stage.addChild(graphics);

  const thing = new PIXI.Graphics();
  app.stage.addChild(thing);
  thing.position.set(800 / 2, 600 / 2);

  let count = 0;
  app.renderer.plugins.interaction.on('pointerdown', () => {
    graphics.lineStyle(Math.random() * 30, Math.random() * 0xffffff, 1);
    graphics.moveTo(Math.random() * 800, Math.random() * 600);
    graphics.bezierCurveTo(
      Math.random() * 800,
      Math.random() * 600,
      Math.random() * 800,
      Math.random() * 600,
      Math.random() * 800,
      Math.random() * 600
    );
  });

  app.ticker.add(() => {
    count += 0.1;

    thing.clear();
    thing.lineStyle(10, 0xff0000, 1);
    thing.beginFill(0xffff00, 0.5);

    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.closePath();

    thing.rotation = count * 0.1;
  });
}
