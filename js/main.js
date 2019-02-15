function myFunction_bold() {
    document.getElementById("abc").style.fontWeight = "1000";
  }
  function myFunction_italic() {
    document.getElementById("abc").style.fontStyle = "italic";
  }
  function myFunction_underlined() {
    document.getElementById("abc").style.textDecoration = "underline overline";
  }
  function myFunction_font() {
    document.getElementById("abc").style.fontWeight = "1000";
  }
  function myFunction_size() {
    document.getElementById("abc").style.fontWeight = "1000";
  }
  ///////////////////////
  function basic_function(){
    var select = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue== "defult_font"){
        document.getElementById("abc").style.fontFamily = "Comic Sans MS", arial, sans-serif;
    }
    else if(selectedValue=="first_font"){
        document.getElementById("abc").style.fontFamily = "Impact,Charcoal,sans-serif";
    }
    else if(selectedValue=="second_font"){
        document.getElementById("abc").style.fontFamily = "Times New Roman", Times, serif;
    }
    else if(selectedValue=="third_font"){
        document.getElementById("abc").style.fontFamily =  "Trebuchet MS", Helvetica, sans-serif;
    }
}
/////////////////////////////
function basic_function_siz(){
    var select = document.getElementById("size");
    var selectedValue = size.options[size.selectedIndex].value;
    if(selectedValue=="first"){
        document.getElementById("abc").style.fontSize = "1.2em";  
    }
    else if(selectedValue=="second"){
        document.getElementById("abc").style.fontSize = "x-small";
    }
    else if(selectedValue=="third"){
        document.getElementById("abc").style.fontSize = "smaller";
    }
    else if(selectedValue=="forth"){
        document.getElementById("abc").style.fontSize = "12px";
    }
    else if(selectedValue=="fifth"){
        document.getElementById("abc").style.fontSize = "80%";
    }
}