
iAmSaidFunction = () => console.log("ha.")
function receivesAFunction (iAmSaidFunction) {
    iAmSaidFunction();
}

const returnsANamedFunction = () => {
    const addTogether = ( x = "I did it!") => {
       console.log(addTogether);
    };
    return addTogether;
}

const returnsAnAnonymousFunction = () => {
    return function () {console.log("")}
};








