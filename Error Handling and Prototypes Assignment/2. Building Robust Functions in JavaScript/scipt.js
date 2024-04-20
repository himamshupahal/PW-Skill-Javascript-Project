function getPerson(person){
    try{
        if(typeof person !== "object" || !person.name || ! person.age){
            throw new Error("Invalid parameter type");
        }
        return `Name : ${person.name}, Age :${person.age}`;
    } catch (error){
        return error.message;
    }
}

// Expected Output //

console.log(getPerson({ name : 'Mithum' , age : 20 }));
// RESULT :- Name : Mithum, Age :20 //

console.log(getPerson({ name :"Mithum" }));
// RESULT :- Invalid parameter type  //

console.log(getPerson([  "name" , 'Mithum' ]));
// RESULT :- Invalid parameter type//