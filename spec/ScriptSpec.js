describe('Shape', () => {
  let aShaPe;
  let bShape;
  it("should be defined", ()=> {
    expect(typeof Shape).toEqual("function");
  })

  describe('chase method', () => {

    beforeEach(function() {
      aShape = new Shape(0,0, 50);
      bShape = new Shape(300,400, 50)
      aShape.chase(bShape);
      jasmine.clock().install();
    });
  
    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('should be defined', () => {
      expect(typeof aShape.chase).toEqual("function");
    });

    it('should chase the other object in equal steps', ()=> {
      jasmine.clock().tick(100000);
      expect(aShape.x).toEqual(bShape.x);
      expect(aShape.y).toEqual(bShape.y)
    })
  });
});

describe('Game', () => {
  let aGame;

  beforeEach(()=>{
    aGame = new Game();
  })
  it("should be defined", ()=> {
    expect(typeof Game).toEqual("function");
  })

  describe('addShape method', () => {
    it('should be defined', () => {
      expect(typeof aGame.addShape).toEqual("function");
    });

    it('should add a shape to the Game instance', () => {
      aGame.addShape(new Shape(200,200, 5));
      expect(aGame.shapes.length).toEqual(1);
    });
  });
});