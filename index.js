
function callBack () {
    console.log("hello")
};
function receivesAFunction (callBack) {
    callBack ();
}
receivesAFunction(callBack);


function returnsANamedFunction () {
    return addTogether = ( x = "I did it!") => {
       console.log(x);
    };
}
returnsANamedFunction ();
addTogether ();


function returnsAnAnonymousFunction () {
    return function () {console.log("hiiiii")}
};
const greeting = returnsAnAnonymousFunction ();
greeting ();







