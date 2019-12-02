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
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date());


    });
  
    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('should be defined', () => {
      expect(typeof aShape.chase).toEqual("function");
    });

    it('should chase the other object in equal steps', ()=> {
      aShape.chase(bShape);
      jasmine.clock().tick(10000);
      expect(aShape.position.x).toEqual(bShape.position.x);
      expect(aShape.position.y).toEqual(bShape.position.y);
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