// import {haloJakarta} from './haloJakarta.js';
//  import { haloMedan, haloSurabaya } from './haloIndonesia.js';

// console.log(haloJakarta()  );
// console.log(haloMedan()  );
// console.log(haloSurabaya()  );

// import hai from './haloJakarta.js';
//  import {haloMedan as horas, haloSurabaya as halo} from './haloIndonesia.js';

//  console.log( hai() ); // Halo Jakarta
//  console.log( horas() ); // Halo Medan
//  console.log( halo() ); // Halo Surabaya

import hai from './haloJakarta.js';
 import * as sapa from './haloIndonesia.js';

 console.log( hai() ); // Halo Jakarta
 console.log( sapa.haloMedan() ); // Halo Medan
 console.log( sapa.haloSurabaya() ); // Halo Surabaya