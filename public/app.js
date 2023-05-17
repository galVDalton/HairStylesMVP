// fetch("/api/HairstylesMVP/short")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


//look up documents ready
function display_page(e){
    let elButton=e.target;
    let str = $(elButton).parents(".hairlength").find(".header").text().trim();
    let haircut = {};
    $("#haircut_length .header").text(str);
    $("#haircut_length").show();
    $("#home").hide();

    fetch(`/api/HairstylesMVP/${str}`)
        .then(response => response.json())
        .then(data => display_haircuts(data))
        .catch(error => console.error(error));
  
}

function display_haircuts(arrHaircut){
    // console.log(arrHaircut);
    let container = document.querySelector("#haircut_length .main");
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
    $("#haircut_length, #home").hide();
    $("#haircut_product").show();  
    console.log($(el).data("youtube-link"));
    console.log($(el).data("id"));
    console.log($(el).attr("src"));
    $("#haircut_product .main").html(
    `<img src="${$(el).attr('src')}">
    <div class="products">
        <img src="/hairstyle_images/shag_haircut.jpg">
        <img src="/hairstyle_images/shag_haircut.jpg">    
    </div> <!-- products -->
 
    <iframe width="560" 
        height="315" 
        src="https://www.youtube-nocookie.com/embed/${$(el).data('youtube-link')}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>`)
}
//jquery for waiting for document to load
$( document ).ready(function() {
    $("#home img").on("click",display_page);
    $("button").on("click", display_home);
});