export const spliteDate = (date="current") => {
    var year ;
    if(date!="current"){
        
      year = date.split("/")[2];
    }
    else{
        year = date;
    }
    return year;
  };
  export const spliteDateToJson = (date) => {
    var dateParts = date.split("/");
    var day = dateParts[0];
    var month = dateParts[1];
    var year = dateParts[2];

    return { day, month, year };
  };