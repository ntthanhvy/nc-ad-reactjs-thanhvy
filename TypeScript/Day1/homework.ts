// 3 classes

interface IScreen {
  resolution: number[];
  size: number;
  brand: string;
}

class ComScreen implements IScreen {
  resolution = [1920, 1024];
  size = 32;
  brand = "Asus";
}

interface IComputer {
  cpu: string;
  ram: number;
  drive: { type: string; volumn: number };
}

class Computer extends ComScreen implements IComputer {
  cpu = "i5";
  ram = 8;
  drive = { type: "SSD", volumn: 526 };
}

interface IWorkStation {
  speaker: boolean;
  mouse: boolean;
  keyboard: boolean;
}

class WorkStation extends Computer implements IWorkStation {
  speaker = false;
  mouse = true;
  keyboard = true;
}

// 3 functions

function draw(vertexX: number, vertexY: number, callback: (verX: number, verY: number) => number): number {
  return callback(vertexX * vertexY);
}

function render(vertex: number, callback: any) {
  return callback(vertex);
}

draw(24, 32, function (z: number) {
  render(z, function (x: number) {
    console.log(`Draw ${x} vertex`);
  });
});
