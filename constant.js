const namePattern = "^[A-Z]{1}[a-z]{3,}";
let emailReg = "^[a-zA-Z0-9_.]+@[a-zA-Z.a-zA-Z{2,}.a-zA-Z{2,}]+$";
let mobileReg = "^[9][1][ ][6-9]{1}[0-9]{9}$";
let passwordReg = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#&$]).{8,}$";
module.exports ={namePattern}                         