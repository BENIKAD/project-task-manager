
exports.getDate = function () {

const today = new Date();

    const options = {
        day: "numeric",
        months: "long",
        weekday: "long"        
    };
   
    return today.toLocaleDateString("en-US", options);

}

//module.exports.getDate = getDate;

//function getDate(){

//let today = new Date();

    //let options = {
     //   day: "numeric",
      //  months: "long",
      //  weekday: "long"        
    //};

     
    /// return today.toLocaleDateString("en-US", options);
 

//}

