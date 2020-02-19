//global scope
//

function x(value) {
    //function scope
    //var text = = "SOAL";
    //let text2 = "Aquilla";
    if(value == "hello") {
        //block scope
        var text = "SOAL";
        let text2 = "Aquilla"; //let 
        
    }
    console.log("Hello " + text2);
}

x("hello");