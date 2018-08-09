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

    const ajaxProducts = (item) => {
        $.ajax({
                url: `https://api.mercadolibre.com/sites/MLM/search?q=${item}`,
                type: 'GET',
                datatype: 'json'
            })
            .done(function(response) {
                console.log(response)
                drawProducts(response.results);
            })
            .fail(function() {
                console.log("error")
            })
    }

    const ajaxCategory = (item) => {
        $.ajax({
                url: `https://api.mercadolibre.com/sites/MLM/search?category=${item}`,
                type: 'GET',
                datatype: 'json'
            })
            .done(function(response) {
                console.log(response)
                drawProducts(response.results);
            })
            .fail(function() {
                console.log("error")
            })
        }

        const ajaxCategories = () => {
            $.ajax({
                    url: `https://api.mercadolibre.com/sites/MLA/categories`,
                    type: 'GET',
                    datatype: 'json'
                })
                .done(function(response) {
                    let data = response;
                
                    data.forEach(ele => {
                        let id = ele.id;
                        let name = ele.name;
                        $('#categories-list').append(categoriesTemplate(id,name));
                    });
                })
                .fail(function() {
                    console.log("error")
                })
    
            };

    $("#item-search").on("click", function(){
        $('#main').empty();
        let item = $("#item-val").val()
        ajaxProducts(item)
    });

    $("#categories").on("click", function(){
      $('#categories-list').empty();
        ajaxCategories()
    });

    $("#logo").on("click", function(){
        console.log("click")
        window.location.hash = 'main';

    })
   

    $("#categories-list").on("click", ".category", function(){
        $('#main').empty();
        let item =$(this).html()
        ajaxProducts(item)
    });



});