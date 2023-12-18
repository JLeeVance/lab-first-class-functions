
function callBack () {
    console.log("hello")
};
function receivesAFunction (callBack) {
    callBack();
}
receivesAFunction();


function returnsANamedFunction () {
    return addTogether = ( x = "I did it!") => {
       console.log(x);
    };
}
returnsANamedFunction ();


function returnsAnAnonymousFunction () {
    return function () {console.log("hiiiii")}
};
returnsAnAnonymousFunction ();







