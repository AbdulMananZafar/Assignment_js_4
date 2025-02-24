//  Chapter No  14-16  ARRAY

// Question No.1
var emp_arr= [];
// Question No.2
var starr = ["car"];
// Question No.3
// var alphabet = ["h","i","j","k"];
// alert(alphabet[2]);
// Question No.4
// var alphabet = ["h","i","j","k","l","m","n","o"];
// console.log(alphabet.length);
// Question No.5
// var arr_1 = ["Karachi "];
// arr_1[1] = [" Lahore"];
// alert(arr_1);


// Chapter 16 (Array II)

// Question No.1
// var my_arr = ["Ball"];
// my_arr.push("Bat");
// my_arr.shift();
// alert(my_arr);

// Question No.2
// var alphabet=["h","i","j","k"];
// alphabet.pop();
// console.log(alphabet);

// Question No.3
// var alphabet=["h","i","j","k"];
// alphabet.push(5);
// console.log(alphabet);

// Chapter 16 (Array III)

// Question No.1
// var sizes = ["S", "M", "XL" , "XXL" , "XXXL"];
// sizes.shift();
// console.log(sizes);

// Question No.2
// var sizes = ["S", "M", "XL" , "XXL" , "XXXL"];
// sizes.unshift("XS", "SS" , "SSS");
// console.log(sizes);

// Question No.3
// var arr =["cat"];
// arr.unshift("dog");
// alert(arr[0]);

// Question No.4
// var sizes = ["S", "M", "XL" , "XXL" , "XXXL"];

// sizes.splice(2,0,"L");
// console.log(sizes);

// Question No.5
// var sizes = ["S", "M", "XL" , "XXL" , "XXXL"];
// var regSizes = sizes.slice(0,3);
// console.log(regSizes);

// Question No.6
// var pets = ["dog" , "cat" , "ox" , "duck" , "frog" ];
// pets.splice(1,3,"lion","fox","hen")
// console.log(pets)

// Question No.7
// var pets = ["dog" , "cat" , "ox" , "duck" , "frog" ];
// pets.splice(1,2)
// console.log(pets);

// Question No.8
// var pets = ["dog" , "cat" , "ox" , "duck" , "frog" , "flea" ];
// var copy = pets.slice(3,5);
// console.log(copy);


// Chapter 13-15 (ARRAYS)

// Question No.1
var studentNames = {};

// Question No.2
var studentNames = new Array();

// var newArray = "salman"
// Question No.3
var student = ["Ali" , "Ahmed" , "Saad" , "Sabir" , "Usman"];

// Question No.4
var number = [1 , 90, 77, 88, 88, 66];

// Question No.5
var boolean_arr = [true, false, true, false];

// Question No.6
var mixed_arr =["Karachi", true , null , "Haris" , 99 ];

// Question No.7
// document.write("<h3>Qualification</h3>");
// var qualification = [ "1)SSC"+"<br />"+"2)HSC"+"<br />"+ "3)BCS"+"<br />"+ "4)BS"+"<br />"+ "5)BCOM"+"<br />"+ "6)MS"+"<br />"+ "7)M. Phil."+"<br />"+ "8)PhD"+"<br />"];
// document.write(qualification);

// Question No.8
// var stu_name = ["Michael", "John" , "Tony"];
// var stu_marks = [320 , 230 , 480 ];
// var total_marks = [500];
// var percentage_1 = (stu_marks[0]/ total_marks)*100;
// var percentage_2 = (stu_marks[1]/ total_marks)*100;
// var percentage_3 = (stu_marks[2]/ total_marks)*100;
// document.write("Score of " + stu_name[0]+ " is " + stu_marks[0] + ". Percentage: " + percentage_1 + "%"+"<br/>");
// document.write("Score of " + stu_name[1]+ " is " + stu_marks[1] + ". Percentage: " + percentage_2 + "%"+"<br/>");
// document.write("Score of " + stu_name[2]+ " is " + stu_marks[2] + ". Percentage: " + percentage_3 + "%");

// Question No.9
// var colors = ["Red", "Yellow", "Green", "Blue"];
// document.write(colors , "<br/>");

// var user_col = prompt("What color you want to add in start: ");
// colors.unshift(user_col);
// document.write( colors + "<br>");

// var user_col_end = prompt("What color you want to add in end: ");
// colors.push(user_col_end);
// document.write(colors + "<br />")

// colors.unshift("Purple", "Orange");  
// document.write(colors);

// // Question No.10
// var stu_score = [320,230,480,120];
// var ordered = [120,230,320,480];
// stu_score.sort();
// console.log(stu_score);
// ordered.sort();
// console.log(ordered);

// Question No.11
// var citiyName = ["Karachi" , "Lahore " , "Islamabad" , "Quetta" , "Peshawar","<br />"] ;
// document.write("Cities List ", "<br />" + citiyName);
// var selected_city = citiyName.slice(2,4);
// document.write("Selected Cities List" ,"<br />" ,selected_city , "<br />");

// // Question No.12
// var arr = [ "This", "is" , "my" , "cat"];
// document.write("Array : " , arr , "<br />");
// var arr_1 = arr.join(" ");
// document.write("String : " ,arr_1 );

// Question No.13
// var new_arr = [];

// new_arr.push("Keyboard");
// new_arr.push("Mouse");
// new_arr.push("Printer");
// new_arr.push("Monitor");
// document.write(arr, "<br />")

// new_arr.unshift("Keyboard");
// new_arr.unshift("Mouse");
// new_arr.unshift("Printer");
// new_arr.unshift("Monitor");
// document.write(new_arr);


// Question No.14

var arr = [];
arr.unshift("Keyboard");
arr.unshift("Mouse");
arr.unshift("Printer");
arr.unshift("Monitor");
arr.push("Monitor");
arr.push("Printer");
arr.push("Mouse");
arr.push("Keyboard");
document.write(arr);

// Question No.15

var mobile = ["Apple" , " Samsung" ,"Motorola" ,"Nokia" ,"Sony" , "Heir"]
document.write("<selected>" , mobile ,"</selected");

