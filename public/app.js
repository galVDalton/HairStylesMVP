function display_page(e){
    let elButton=e.target;
    let str = $(elButton).parents(".hairlength").find(".header").text().trim();
    // let haircut = {};
    $("#haircut_length .header").text(str);
    $("#haircut_length").show();
    $("#home").hide();

    fetch(`/api/HairstylesMVP/hairstyle/${str}`)
        .then(response => response.json())
        .then(data => display_haircuts(data))
        .catch(error => console.error(error));
}

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

function display_home(){
    $("#haircut_length").hide();
    $("#haircut_product").hide();
    $("#home").show();   
}

function display_haircut(e){
    let el = e.target;
    let intHaircut_id = $(el).data("id");
    let strProducts = "";
    $("#haircut_length, #home").hide();
    $("#haircut_product").show();  
 
    //console.log($(el).data("youtube-link"));
    //console.log($(el).data("id"));
    //console.log($(el).attr("src"));
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

    
    fetch(`/api/HairstylesMVP/products/${intHaircut_id}`)
        .then(response => response.json())
        .then(data => display_products(data))
        .catch(error => console.error(error));           
}

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

function go_to_link(e){
    let link = $(e.target).data('buy-link');
    window.open(link, '_blank');
}

  


//jquery for waiting for document to load
$( document ).ready(function() {
    $("#home img").on("click",display_page);
    $("button").on("click", display_home);
});