$(document).ready(function() {
    const drawProducts = (data) => {
        data.forEach(ele => {
            let id = ele.id;
            let description = ele.title;
            let photo = ele.thumbnail;
            let price = ele.price;
            $('#main').append(template(id,description,photo,price));
        });
    }


    const template = (id,description,photo,price) => {
        let t = `<div class= "element">
                   <p class= "name">${id}</p>
                   <img  src="${photo}"/>
                   <p class= "name">${description}</p>
                   <p class= "name">${price}</p>   
                </div>`;
        return t;
    }

    const ajaxProducts = (item) => {
        $.ajax({
                url: `https://api.mercadolibre.com/sites/MLA/search?q=${item}`,
                type: 'GET',
                datatype: 'json'
            })
            .done(function(response) {
                drawProducts(response.results);
            })
            .fail(function() {
                console.log("error")
            })
    }

    $("#item-search").on("click", function(){
        $('#main').empty();
        let item = $("#item-val").val()
        ajaxProducts(item)
    });
    
});