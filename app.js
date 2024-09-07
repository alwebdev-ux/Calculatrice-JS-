document.addEventListener('DOMContentLoaded', function() {

    // Sélectionner tous les boutons
    const Delete = document.getElementById("AC");
    const PositifOrNegatif = document.getElementById("+/-");
    const Pourcent = document.getElementById("%");
    const Division = document.getElementById("÷");
    const Seven = document.getElementById("7");
    const Eight = document.getElementById("8");
    const Nine = document.getElementById("9");
    const Multiplicate = document.getElementById("X");
    const Six = document.getElementById("6");
    const Five = document.getElementById("5");
    const Four = document.getElementById("4");
    const Moin = document.getElementById("-");
    const Three = document.getElementById("3");
    const Two = document.getElementById("2");
    const One = document.getElementById("1");
    const Add = document.getElementById("+");
    const Zero = document.getElementById("0");
    const Virgule = document.getElementById(",");
    const Egale = document.getElementById("=");

    const Affichage = document.getElementById("Affichage");

    // Fonction pour mettre à jour l'affichage
    function updateDisplay(value) {
        if (Affichage.textContent === '0' || Affichage.textContent === 'Erreur') {
            Affichage.textContent = value;
        } else {
            Affichage.textContent += value;
        }
    }

    // Fonction pour évaluer l'expression
    function calculate() {
        try {
            // Remplacer les symboles non standards
            let expression = Affichage.textContent.replace('÷', '/').replace('x', '*');
            // Évaluer l'expression
            const result = eval(expression);
            Affichage.textContent = result;
        } catch (error) {
            Affichage.textContent = 'Erreur';
        }
    }

    // Fonction pour réinitialiser l'affichage
    function clearDisplay() {
        Affichage.textContent = '0';
    }

    // Écouteurs d'événements pour les boutons
    function addButtonEventListener(button, value) {
        button.addEventListener('click', function() {
            updateDisplay(value);
        });
    }

    // Ajouter des événements aux boutons numériques
    addButtonEventListener(Seven, '7');
    addButtonEventListener(Eight, '8');
    addButtonEventListener(Nine, '9');
    addButtonEventListener(Six, '6');
    addButtonEventListener(Five, '5');
    addButtonEventListener(Four, '4');
    addButtonEventListener(Three, '3');
    addButtonEventListener(Two, '2');
    addButtonEventListener(One, '1');
    addButtonEventListener(Zero, '0');
    addButtonEventListener(Virgule, ',');

    // Ajouter des événements pour les opérateurs
    addButtonEventListener(Add, '+');
    addButtonEventListener(Moin, '-');
    addButtonEventListener(Multiplicate, 'x');
    addButtonEventListener(Division, '÷');

    // Ajouter des événements pour les autres boutons
    Egale.addEventListener('click', calculate);
    Delete.addEventListener('click', clearDisplay);

    // Gestion du changement de signe (+/-)
    PositifOrNegatif.addEventListener('click', function() {
        let currentText = Affichage.textContent;
        if (currentText !== '0' && !isNaN(currentText)) {
            Affichage.textContent = currentText.startsWith('-') 
                ? currentText.slice(1) 
                : '-' + currentText;
        }
    });

    // Gestion du pourcentage
    Pourcent.addEventListener('click', function() {
        let currentText = Affichage.textContent;
        if (!isNaN(currentText) && currentText !== '0') {
            Affichage.textContent = (parseFloat(currentText) / 100).toString();
        }
    });

});


