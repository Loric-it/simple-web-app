// spec/script.test.js

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe("Application Web Simple", () => {
  let dom;

  // Avant chaque test, initialiser jsdom et charger le script
  beforeEach(() => {
    // Créer une instance JSDOM
    dom = new JSDOM(`
      <html>
        <body>
          <div class="container">
            <h1>Bienvenue sur mon Application Web Simple</h1>
            <button id="actionButton">Cliquez ici</button>
            <p id="responseText"></p>
          </div>
        </body>
      </html>
    `, { runScripts: 'dangerously' });

    // Injecter le DOM simulé dans le contexte global de Node.js
    global.document = dom.window.document;
    global.window = dom.window;

    // Lire et exécuter le contenu du fichier script.js dans ce contexte
    const scriptContent = fs.readFileSync(path.resolve(__dirname, '../src/script.js'), 'utf8');
    dom.window.eval(scriptContent);
  });

  // Après chaque test, nettoyer
  afterEach(() => {
    // Nettoyer le DOM et réinitialiser les variables globales
    global.document = undefined;
    global.window = undefined;
    dom = undefined;
  });

  // Écrire les tests
  test("should change text content when button is clicked", () => {
    const button = document.getElementById('actionButton');
    const responseText = document.getElementById('responseText');

    // Simuler le clic sur le bouton
    button.click();

    // Vérifier le contenu du texte
    expect(responseText.textContent).toBe('Bravo, vous avez cliqué sur le bouton !');
  });
});
