const Person = {
    Name : " Himanshu Pahal " ,
    Age : 19 ,
    Address : {
        Street : " BB , Block B , Industrial Area . " ,
        City : " Sector 62 , Nodia " ,
        State : " Uttar Pardesh "
    } ,
} ;

function ExtraData(Obj) {
    const {
        Name ,
        Address : {Street},
    } = Obj
    return {Name , Street }
}

console.log(ExtraData(Person));

/*

// *** -: RESULT :- **** //

{
  Name: ' Himanshu Pahal ',
  Street: ' BB , Block B , Industrial Area . '        
}

*/