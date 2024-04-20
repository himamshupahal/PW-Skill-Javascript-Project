function ConverterToNumber(Str){
    try {
        const num = Number(Str);
        if (Number.isNaN(num)){
            throw new Error(" InValid Number")
        }
        
       return num ;

    } catch (error){
        return error.message;
    }
}

console.log(ConverterToNumber("123"));
console.log(ConverterToNumber("abc"));