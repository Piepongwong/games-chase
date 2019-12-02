function renderGame(game){
    document.body.innerHTML = "";
    renderShapes(game.shapes);
}

function renderShapes(shapes){
    for(let i =0; i < shapes.length;i++){
        renderShape(shapes[i]);
    }
}

function renderShape(aShape){
    $shape = document.createElement("div");
    $shape.classList.add("shape");
    $shape.style.left = `${aShape.position.x}px`;
    $shape.style.bottom = `${aShape.position.y}px`
    document.body.appendChild($shape);
}

let theGame = new Game();
theGame.addShape(new Shape(100, 100,5));
theGame.addShape(new Shape(500, 500,5));

theGame.shapes[0].chase(theGame.shapes[1]);
theGame.shapes[0].chase(theGame.shapes[1]);

let renderCb = ()=> {
    renderGame(theGame);
    window.requestAnimationFrame(renderCb);
}

window.requestAnimationFrame(renderCb);