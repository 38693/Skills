let date = new Date();
let dayOfWeek = date.getDay();


if(dayOfWeek == 6 || dayOfWeek == 7){
    console.log("Uitslapen!");
}else{
    console.log("School Dag.");
}
