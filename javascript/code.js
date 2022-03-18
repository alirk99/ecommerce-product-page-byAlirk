
function show(id1) {
    console.log(id1);
    document.querySelector(id1).classList.toggle("hidden");
}

function plus() {
    let num = document.getElementById('quantity').innerText;
    num++;
    console.log(num);
    document.getElementById('quantity').innerText = num;
}

function minus() {
    let num = document.getElementById('quantity').innerText;
    if(num != 0){
        num--;
    }
    console.log(num);
    document.getElementById('quantity').innerText = num;
}

function atc(id) {
    let n = document.querySelector(id).querySelector(".productTitle").innerText;
    let p = document.querySelector(id).querySelector("#price").innerText;
    let q = document.querySelector(id).querySelector("#quantity").innerText;

    console.log(id);
    console.log(n);
    console.log(p);
    
        if (q == 0) {q = 1;}

    document.querySelector("#cartProductTitle").innerText = n;
    document.querySelector("#cartProductPrice").innerText = p;
    document.querySelector("#cartProductQuantity").innerText = q;
    document.querySelector("#cartProductTotal").innerText = p * q;
    document.querySelector("#cart-popup").innerText = q;
    document.querySelector("#cart-popup").style.display = "block";
    document.querySelector("#quantity").innerText = q;
}

$(document).ready(function () {
    $("#cartIcon").click(function(){show("#cart");})

    $("#mainImage").click(function(){show("#lightBox");})

    $("#lightBox-close").click(function(){show("#lightBox");})
    
    $("#menuIcon").click(function() {
        document.querySelector("#mob-menu").style.transform = "scale(1, 1)";
        document.querySelector("#mob-menu-bg").style.display = "block";
    })

    $("#menu-close").click(function() {
        document.querySelector("#mob-menu").style.transform = "scale(0, 1)";
        document.querySelector("#mob-menu-bg").style.display = "none";
    })

    $(".thumbnail").click(function () {
        $(".thumbnail").removeClass("selected");
        $(`#${this.id}`).addClass("selected");

        let x = this.id[this.id.length - 1]
        $("#mainImage").attr("src", `images/image-product-${x}.jpg`);
        $("#largeImage").attr("src", `images/image-product-${x}.jpg`);
    });

    $(".addToCart").click(function () {
        $("#cartEmpty").addClass("hidden");
        $(".cartItem").removeClass("hidden");
        $("#checkout").removeClass("hidden");
    });

    $(".deleteProduct").click(function () {
        $("#cartEmpty").removeClass("hidden");
        $(".cartItem").addClass("hidden");
        $("#checkout").addClass("hidden");
        // also possible
        // document.querySelector("#cart-popup").style.display = "none";
        // $("#cart-popup").hide();
        $("#cart-popup").css("display", "none");
    });

    $(".previous").click(function () {

        let name = $("#mainImage").attr("src");
        let x = name[name.length - 5];
        if (x == 1) {
            x = 4;
        } else { x--; }

        $("#mainImage").attr("src", `images/image-product-${x}.jpg`);
        $("#largeImage").attr("src", `images/image-product-${x}.jpg`);
        $("#mob-mainImage").attr("src", `images/image-product-${x}.jpg`);

        $(".thumbnail").removeClass("selected");
        $(`#box-thumbnail-${x}`).addClass("selected");
    });

    $(".next").click(function () {

        let name = $("#mainImage").attr("src");
        let x = name[name.length - 5];
        if (x == 4) {
            x = 1;
        } else { x++; }

        $("#mainImage").attr("src", `images/image-product-${x}.jpg`);
        $("#largeImage").attr("src", `images/image-product-${x}.jpg`);
        $("#mob-mainImage").attr("src", `images/image-product-${x}.jpg`);

        $(".thumbnail").removeClass("selected");
        $(`#box-thumbnail-${x}`).addClass("selected");
    });

});
