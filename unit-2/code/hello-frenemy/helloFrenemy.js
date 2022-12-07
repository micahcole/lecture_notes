let enemy;

function greeter(name) {
    if(name == enemy){
        console.log("Go away!");
    }else {
        console.log("Hello ", name);
    }
}

greeter("micah");
greeter("Obama");
greeter("Aquaman");