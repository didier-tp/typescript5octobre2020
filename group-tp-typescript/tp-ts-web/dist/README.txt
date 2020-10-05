Ce projet exemple comporte 2 parties bien distinctes:
* web/calcul.html n'utilisant pas de module es2015 et fonctionnant
  meme avec un ancien navigateur et sans http

* web/fig-canvas-ts.html utilisant en direct (sans rollup ni webpack)
  des modules es2015
  et ne fonctionnant donc qu'avec un navigateur récent
  et via http :

  npm install -g lite-server  (si nécessaire)
  cd .../dist (là où est index.html)
  et url http://localhost:3000
  suivre lien fig visitor et cliquer sur test .
