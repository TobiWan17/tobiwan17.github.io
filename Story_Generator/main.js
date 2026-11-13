// Find the HTML elements once.
const NAME_INPUT = document.querySelector("#name");
const GENERATE_BUTTON = document.querySelector("#generate");
const STORY_OUTPUT = document.querySelector("#story");

const SAETZE = [
    "Name ging zum Fußball und bekam einen Kopf gegen den Ball. Er konnte sich an nichts erinnern.",
    "Name schmierte sich ein Honigbrot. Das Brot fiel runter. Die Katze miaute.",
    "Name ging in den Garten und pflückte einen Apfel. Der Apfel war wurmstichig. Ein Vogel flog weg.",
    "Name wollte sich ein Ei kochen. Das Ei fiel auf den Boden. Der Hund bellte.",
    "Name fuhr mit dem Fahrrad zum Bäcker. Die Kette sprang ab. Ein Auto hupte.",
    "Name ging in den Wald und suchte Pilze. Es fing an zu regnen. Seine Schuhe wurden nass.",
    "Name wollte einen Kuchen backen. Er vergaß den Zucker. Der Kuchen schmeckte komisch.",
    "Name spielte mit seinem Ball im Park. Der Ball rollte auf die Straße. Ein Mann rief laut.",
    "Name machte sich eine Tasse Kakao. Die Milch kochte über. Der Herd wurde schmutzig.",
    "Name ging zum Einkaufen und kaufte Bananen. Eine Banane fiel aus der Tasche. Ein Kind lachte."
];


function getRandomInt(min, max) {
    const MIN_CEILED = Math.ceil(min);
    const MAX_FLOORED = Math.floor(max);
    const RANDOM_NUMBER = Math.floor(Math.random() * (MAX_FLOORED - MIN_CEILED) + MIN_CEILED)

    return RANDOM_NUMBER;
}


const randomItem = (items) => {
    const RANDOM_SATZ_NUMBER = getRandomInt(0, items.length + 1);
    const SATZ = items[RANDOM_SATZ_NUMBER];
    return SATZ;
};

function generateStory() {
    let name = NAME_INPUT.value.trim();

    if (name === "") {
        STORY_OUTPUT.textContent = "Bitte geben Sie zu erst einen Namen ein!";
        NAME_INPUT.style.border = "solid 2px red";
        return;
    }

    const ZUFALLSSATZ = randomItem(SAETZE);
    const SATZ_MIT_NAME = ZUFALLSSATZ.replace("Name", name);
    STORY_OUTPUT.textContent = SATZ_MIT_NAME;
}

function resetInputBorder() {
    NAME_INPUT.style.border = null;
}

resetInputBorder(NAME_INPUT);

GENERATE_BUTTON.addEventListener("click", generateStory);
NAME_INPUT.addEventListener("input", resetInputBorder);