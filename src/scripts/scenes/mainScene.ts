import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";

export default class MainScene extends Phaser.Scene {
  protected fpsText: FpsText;

  constructor() {
    super({ key: "MainScene" });
  }

  public create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0);
    this.fpsText = new FpsText(this);
  }

  public update() {
    this.fpsText.update();
  }
}
