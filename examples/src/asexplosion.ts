export default (function () {
  const app = new PIXI.Application();
  document.body.appendChild(app.view);

  app.stop();

  app.loader.add('mc.json').load(() => {
    const explosionTextures: PIXI.Texture[] = [];
    let i: number;
    for (i = 0; i < 26; i++) {
      const texture = PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`);
      explosionTextures.push(texture);
    }

    for (i = 0; i < 50; i++) {
      const explosion = new PIXI.AnimatedSprite(explosionTextures);
      explosion.x = Math.random() * app.screen.width;
      explosion.y = Math.random() * app.screen.height;
      explosion.rotation = Math.random() * Math.PI;
      explosion.scale.set(0.75 + Math.random() + 0.5);

      explosion.gotoAndPlay(Math.random() * 27);

      app.stage.addChild(explosion);
    }

    app.start();
  });
});
