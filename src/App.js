import React, {useEffect} from 'react';

import Zdog from 'zdog'
import Zfont from 'zfont';

import './App.css';

function App() {

  useEffect(() => {
    
    Zfont.init(Zdog);

    var font = new Zdog.Font({
      src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
    });
    
    

    // create illo
    let illo = new Zdog.Illustration({
      // set canvas with selector
      element: '.zdog-canvas',
      dragRotate: true,
    });

    var text = new Zdog.Text({
      addTo: illo,
      font: font,
      value: "dt",
      translate: { y: -20, x: 0},
      fontSize: 80,
      textAlign: 'center',
      textBaseline: 'middle',
      color: '#F4A261',
      fill: true,
    });

    var shadow = text.copy({
      addTo: illo,
      translate: {y: -20, z: -6},
      color: '#F4A261',
    });

    // add circle
    var circle = new Zdog.Ellipse({
      addTo: illo,
      diameter: 150,
      stroke: 25,
      quarters: 3,
      color: '#33C1B1',
    });
    var point = new Zdog.Shape({
      addTo: illo,
      // no path set, default to single point
      translate: { y: -45, x: -45},
      stroke: 50,
      color: '#F4A261',
    })

    

    // update & render
    illo.updateRenderGraph();

    function animate() {
      // rotate illo each frame
      illo.rotate.y += 0.01;
      illo.updateRenderGraph();
      // animate next frame
      requestAnimationFrame( animate );
    }
    // start animation
    animate();
    
  }, []);

  return (
    <div className="App">
      <canvas className="zdog-canvas" width="400" height="400">

      </canvas>
    </div>
  );
}

export default App;
