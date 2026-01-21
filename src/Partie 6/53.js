/* 
Top-level await
Utilisez await au niveau racine d'un module (ES modules).

Objectifs :
✅ Comprendre le top-level await
✅ Charger des données au démarrage du module
✅ Connaître les prérequis (ES modules)
Exemple :
// Dans un fichier .js avec type="module"

// ✅ Top-level await (sans fonction async)
const response = await fetch('/api/data');
const data = await response.json();
console.log(data);

Prérequis :
ES6 modules : <script type="module">
Ou Node.js avec "type": "module" dans package.json
*/

import fetch from 'node-fetch';

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();
console.log(data);