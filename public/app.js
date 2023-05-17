/* User clicks on haircut length 
get header from image selected
sets header of hairstyle page 
filters hairstyles from database */
function display_page(e){
    let elButton=e.target;
    let str = $(elButton).parents(".hairlength").find(".header").text().trim();
    // let haircut = {};
    $("#haircut_length .header").text(str);
    $("#haircut_length").show();
    $("#home").hide();

/* Ln 17 fetches haircut data from database using lateral string with variable from ln 7 that 
gives us haircuts rows and filtered by hair length selected and .catch is for catching any errors.
Ln 18 passed the data array into a function(display_haircuts) to be displayed. If error, .catch is used
to identify any errors */
    fetch(`/api/HairstylesMVP/hairstyle/${str}`)
        .then(response => response.json())
        .then(data => display_haircuts(data))
        .catch(error => console.error(error));
}
/* The function creates a image for each haircut based on length. 
Each image stores information about its youtube link and haircut id so that it can be passed to a 
function if selected.The last line adds an event listener to check for a click. 
*/
function display_haircuts(arrHaircut){
    let container = document.querySelector("#haircut_length .main");
    $(container).html("");
    
    for(let i = 0; i < arrHaircut.length; i++) {
        const image = new Image();
        image.src = "/hairstyle_images/" + arrHaircut[i].image_src;
        image.setAttribute('data-youtube-link', arrHaircut[i].youtube_link);
        image.setAttribute('data-id', arrHaircut[i].id);
        container.appendChild(image);
        //console.log(arrHaircut[i]);
    }
    $("#haircut_length img").on("click", display_haircut);
}

/* simualates sending the user back to a home page using a .hide function */
function display_home(){
    $("#haircut_length").hide();
    $("#haircut_product").hide();
    $("#home").show();   
}

/* This is a second level function where user clicks on a hairstyle image and it shows 
detailed information (i.e product and video) about the hairstyle
One of the things it does is fetch product information based on haircut id based on the image 
selected. One of the things it does is makes the product image clickable and sends user to the buy link.
Used an iframe to embed a youtube video within function*/
function display_haircut(e){
    let el = e.target;
    let intHaircut_id = $(el).data("id");
    let strProducts = "";
    $("#haircut_length, #home").hide();
    $("#haircut_product").show();  
    $("#haircut_product .main").html(
        `<img src="${$(el).attr('src')}">
        <div>
            <h1> Products</h1>
            <div class="products"></div> <!-- products -->
        </div>
        <iframe width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/${$(el).data('youtube-link')}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>`)

/* fetches product data from database using lateral string with variable from ln 55 that 
gives us product rows and filtered by hairstyle selected and .catch is for catching any errors.
Ln 80 passed the data array into a function(display_products) to be displayed. If error, .catch is used
to identify any errors */
    fetch(`/api/HairstylesMVP/products/${intHaircut_id}`)
        .then(response => response.json())
        .then(data => display_products(data))
        .catch(error => console.error(error));           
}

/*This function displays products within the container created on ln 63. Image variable creates
new image from hairstyle products and appendChild takes container and adds image to the end of it.
For each time it loops it creates a new image with source attribute then adds it to the child.  */
function display_products(arrProducts){
    let container = document.querySelector("#haircut_product .main .products");
    for(let i = 0; i < arrProducts.length; i++) {
        const image = new Image();
        image.src = "/hairstyle_products/" + arrProducts[i].image_src;
        image.setAttribute('data-buy-link', arrProducts[i].buy_link);
        $(image).on('click', go_to_link);
        container.appendChild(image);
        //console.log(arrProducts[i]);
    } 
}
/* This function opens up a new window that goes to the link when the product selected. _blank opens up
the new window*/
function go_to_link(e){
    let link = $(e.target).data('buy-link');
    window.open(link, '_blank');
}

/*jquery for waiting for document to load once the eventlistener is clicked. It will 
wait until the page to load until it loads. 108 refers to Short Medium and Long above images,
and button refers to the home button on each page after each image is clicked. */
$( document ).ready(function() {
    $("#home img").on("click",display_page);
    $("button").on("click", display_home);
});