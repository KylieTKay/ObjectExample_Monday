console.log('tis done!')

let theButton = document.querySelector('button'),
theList = document.querySelector('ul');

// rules for working with / creating objects
// 1. needs a name, wrapped in {}
// 2. commas between keys

let coffeeCup = {
    // descriptive keys: properties
    color: "white", // String
    lidColor: "blue", // String
    height: 20, //Number
    contents: "cappucino", // String
    // functional Keys methods
    drink : () => { console.log('sippy sip')},
    mix : () => console.log('add cream, sugar,etc')
};


let jemima = {
    nationality: "Ghanian", // String
    temperment: "Petty", // String
    personality: "she's African, what do you think",
    height: 167, //Number
    contents: "Plantain Chips", // String

    eat : () => {console.log('meat')},
    catchPhrase : () => console.log('im hungry! im tired! why?'),
    sleep : () => console.log('12hrs if you let her')
};

function listProps () {
    if (theList.childElementCount) {
        theList.innerHTML = "";
        return;
    }

    for (prop in jemima) {
        console.log(jemima[prop]);

        let newProp = document.createElement('li');// <li></li>
        newProp.textContent = jemima[prop];

        theList.appendChild(newProp);
        newProp.classList.add('redList')

    }
}


theButton.addEventListener('click', listProps);
