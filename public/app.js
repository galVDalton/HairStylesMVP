const hair_length = 'short';
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  params: JSON.stringify({ hair_length: hair_length })
};
fetch("/api/HairstylesMVP", requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// fetch("/api/HairstylesMVP") 
// .then((res) => res.json())
// .then((id) => {
//  console.log(id);
// });
//look up documents ready
function display_page(e){
    let elButton=e.target;
    let str = $(elButton).parents(".hairlength").find(".header").text().trim();
    $("#haircut_length .header").text(str);
    $("#haircut_length").show();
    $("#home").hide();
    console.log(str);
}

function display_home(){
    $("#haircut_length").hide();
    $("#haircut_product").hide();
    $("#home").show();   
}

function display_haircut(){
    $("#haircut_length, #home").hide();
    $("#haircut_product").show();  
    console.log("click");
}
//jquery for waiting for document to load
$( document ).ready(function() {
    $("#home img").on("click",display_page);
    $("#haircut_length img").on("click",display_haircut);
    $("button").on("click", display_home);
    console.log( "ready!" );
});