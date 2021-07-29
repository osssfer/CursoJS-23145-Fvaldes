//Nombre Usuario
const userName = prompt(' ingrese nombre ')
let userYear = prompt(' Ingrese año de nacimiento ')


if (userYear > 2021){
    alert(' No te hagas el pillo aun no haz nacido '+ userName)
    
}else if(2020 > userYear && userYear > 1990 ){
    alert(' Eres GENERACION Z '+ userName)
    
}else if (1989 > userYear && userYear > 1960 ){
    alert(' ERES  MILLENIEAL ! ' + userName)
    
}else{
    alert(' BOOMER '  + userName)
 
}
