$(document).ready(function () {
  var couleur = '';
  var $canvasContainer = $('<section id="game">');
  var stage = new Kinetic.Stage({
      container: 'game',
      height: 500,
      width: 1024
    });
    var layerPalette = new Kinetic.Layer({
      x:700,
      y:10
    });

    var x = 30+5;
    var y = 30+5;

  for(var i=0;i<maPalette.length;i++){
    if (i%6 === 0){
      y=y+35;
      x = 30+5;
    }else{
      x = x+30;
    }
      var coul = new Kinetic.Rect({
        x:x,
        y:y,
        width: 30,
        height: 30,
        fill: maPalette[i],
        stroke: 'black',
        strokeWidth: 1,
        offset: {
          x: 50,
          y: 25
        },
        draggable: false,
        name: 'coul'+i
      });
      //Get color
      coul.on('click', function (){
        couleur = this.attrs.fill;
      });
      layerPalette.add(coul);
    }
    

    var layer = new Kinetic.Layer();

    for(var i=0;i<datas.length;i++){
        var path = new Kinetic.Path({
        stroke: 'black',
        fill: 'white',
        data: datas[i].path
      });
        //color the shapes
    path.on('click', function() {
      this.fill(couleur);
      this.getLayer().draw();
    });
    layer.add(path);
    }
      
    stage.add(layer);
    stage.add(layerPalette);
});