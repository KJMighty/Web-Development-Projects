$(function() {
  // jQuery goes here...

  //Adding CSS to elements
  //$("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");

  //$("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $(":header").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("form").children("input").css("background-color", "rgba(180, 180, 30, 0.8)");

  //$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").filter(function(index){
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");

  //$("ul ul:first").append("<li>I'm gonna be the last list sub item</li>");
  //$("<li>I'm gonna be the last list sub item</li>").appendTo("ul ul:first");
  // $(".red-box").after("<div class='red-box'>Another Red</div>");
  // $(".blue-box").before("<div class='blue-box'>Blue Friend</div>");
  // $(".blue-box").before(function(){
  //   return "<div class='blue-box'>Blue 2</div>";
  // });
  
  // $(".green-box").after("<div class=green-box>Green Second</div>");
  // $(".red-box").after("<div class=red-box>Red Second</div>");
  // $(".blue-box").after("<div class=blue-box>Blue Second</div>");

  // $("li").replaceWith("<li>Replaced.</li>");
  // $("li").replaceWith(function(){
  //   return "<li>Replaced with function.</li>"
  // });
  //$(".red-box, .blue-box").replaceWith("<div class='green-box'>Green</div>");
  //$("<div class='green-box'>Green</div>").replaceAll(".red-box, .blue-box");

  //$("form").children().not("input:text, textarea, br").remove();
  // let detachedListItem = $("li").detach();
  // $("content").append(detachedListItem);
  //$(".red-box, .blue-box, .green-box").empty();

  //Functions for manipulating attributes & properties attr() prop() val()
  // let specialLink = $("#special-link");
  // console.log(specialLink.attr("href"));
  //specialLink.attr("href", "http://kaimightyportfolio.netlify.app");
  // let checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked"));
  // let textInput = $("input:text");
  // textInput.val("Kai Mighty");
  // console.log(textInput.val());
  // let rangeInput = $("input[type='range']");
  // console.log(rangeInput.val());

  //Create Image Slideshow
  // let galleryImage = $(".gallery").find("img").first();
  // let images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  
  // let i = 0;
  // setInterval(function(){
  //   i = (i + 1) % images.length;
  //   galleryImage.fadeOut(function(){
  //     $(this).attr("src", images[i]);
  //     $(this).fadeIn();
  //   });
  // }, 2000);
  // console.log(galleryImage.attr("src"));

  //Changing css properties
  //$(".gallery").css("display", "none");
  
  // let redBox = $(".red-box");
  // console.log(redBox.css("width"));
  // console.log(redBox.width());

  //redBox.css("background-color", "#AA7700");
  // redBox.css("font-size", "18px");
  // redBox.css("width", "+=20px")

  // let properties = $("p").css(["font-size", "line-height", "color"]);
  // console.log(properties);
  // console.log(properties["font-size"]);

  // redBox.css("user-select", "none");

  //Adding and Removing classes
  // $("a").addClass("fancy-link");
  // $("p:first").addClass("large emphasis");

  // $("li li").addClass(function(index){
  //   $(this).addClass("item-" + index)
  // });
  // $("div").addClass(function(index, currentClass){
  //   if(currentClass === "dummy"){
  //     return "red-box";
  //   }
  // });
  // $(".red-box").removeClass().addClass("blue-box");
  //$(".dummy").removeClass("dummy").addClass("green-box");

  
  //Changing data of an element
  // let gallery = $(".gallery");
  // let images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  // gallery.data("availableImages", images);
  // console.log(gallery.data("availableImages"));
  // gallery.data("name", "The awesome gallery");
  // console.log(gallery.data());
  // gallery.removeData("name");
  // console.log(gallery.data("name"));
  // let firstPara = $("p:first");
  // console.log(firstPara.data("mydata"));

  //Retrieving and changing content of an element
  // let firstPara = $("p:first");
  // console.log(firstPara.text());
  // console.log(firstPara.html());

  //firstPara.text("<strong>Hello</strong> World!");
  //firstPara.html("<strong>Hello</strong> World!");
  //firstPara.append(" My name is Kai I am 22.");

  //Make lightbox fade out when clicked
  // $(".lightbox").delay(500).fadeIn(1000).click(function(){
  //   $(".lightbox").fadeOut(1000);
  // });

  //Using Hover & Click event handlers
  // $("#btn-click").click(function(event){
  //   console.log(event);
  //   alert("Button was clicked!");
  // });

  // $(".red-box").click(function(){
  //   $(this).fadeTo(500, 0.5);
  // })

  // $("#btn-hover").hover(function(){
  //   alert("The button was hovered!");
  // })

  // $(".green-box").hover(function(){
  //   $(this).text("Hovered");
  // })

  //Using Hover, mouseenter and mouseleave event handlers
  // $(".green-box").mouseenter(function(){
  //   $(this).text("Hovered");
  // })

  // $(".green-box").mouseleave(function(){
  //   $(this).text("Green");
  // })

  // let blueBox = $(".blue-box");
  // blueBox.hover(function() {
  //   $(this).stop().fadeTo(500, 0.5);
  // }, function() {
  //   $(this).stop().fadeTo(500, 1);
  // });

  //Adding the same event handler for multiple events
  // $("html").on("click keydown", function() {
  //   console.log("The mouse was clicked or a key was pressed");
  // })

  // let galleryImage = $(".gallery").find("img").first();
  // let images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg",
  // ];
  // let i = 0;
  // galleryImage.on("click", )
  
  // setInterval(function(){
  //   i = (i + 1) % images.length;
  //   galleryImage.on("click", function(){
  //     $(this).attr("src", images[i]);
  //     $(this).fadeIn();
  //   });
  // }, 1000);

  //Passing additional data to events
  // $("#btn-click").click({
  //   user: "Kai",
  //   domain: "kaimightyportfolio.netlify.app"
  // }, function(event){
  //   greetUser(event.data);
  // });

  // function greetUser(userData) {
  //   username = userData.user || "Anonymous";
  //   domain = userData.domain || "example.com";

  //   alert("Welcome back " + username + " from " + domain + "!");
  // }

  //Create Image gallery with lightbox preview
  // let galleryItems = $(".gallery").find("img");
  // galleryItems.css("width", "33%").css("opacity", "0.7");
  
  // galleryItems.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 1);
  // })

  // galleryItems.mouseleave(function() {
  //   $(this).stop().fadeTo(500, 0.7);
  // })

  // galleryItems.click(function() {
  //   let source = $(this).attr("src");
  //   let image = $("<img>").attr("src", source).css("width", "100%");
  //   $(".lightbox").empty().append(image).fadeIn(2000);
  // })
  
  // $(".lightbox").click(function() {
  //   $(this).stop().fadeOut(1000);
  // })

//   $("html").keydown(function(event) {
//     console.log(event.which);
//   });

//  let arrowRight = 39;
//  let arrowLeft = 37;
//  $("html").keydown(function(event) {
//    if(event.which === arrowRight) {
//      $(".blue-box").stop().animate({
//        marginLeft: "+=10px"
//      })
//    } else if(event.which === arrowLeft) {
//      $(".blue-box").stop().animate({
//        marginLeft: "-=10px"
//      })
//    }
//  })

//Focus and Blur events
$(".gallery").hide();

let inputFields = $("input:text, input:password, textarea");
// inputFields.focus(function() {
//   $(this).css("box-shadow", "0 0 4px #666")
// });

// inputFields.blur(function() {
//   $(this).css("box-shadow", "none")
// });

// $("#name").blur(function() {
//   let text = $(this).val();
//   if(text.length < 3) {
//     $(this).css("box-shadow", "0 0 4px #FF0000");
//   } else {
//     $(this).css("box-shadow", " 0 0 4px #09D517");
//   }
// })

  //Submit function
  // $("#form").submit(function(event) {
  //      let textarea = $("#message");
  //      if(textarea.val().trim === "") {
  //        textarea.css("box-shadow",  "0 0 4px #FF0000");
  //        event.preventDefault();
  //      } else {
  //        //form will be submitted
  //      }
  // })

  //Form Validation on Submit
  // let form = $("#form");
  // enableFastFeedback(form);

  // form.submit(function(){
  //   let name = $("#name").val();
  //   let password = $("#password").val();
  //   let message = $("#message").val();
  //   let checked = $("#checkbox").is(":checked");

  //   validateNameField(name, event);
  //   validatePasswordField(password, event);
  //   validateMessageField(message, event);
  //   validateCheckedField(checked, event);
  // })

  // function enableFastFeedback(formElement) {
  //   let nameInput = formElement.find("#name");
  //   let passwordInput = formElement.find("#password");
  //   let messageInput = formElement.find("#message");
  //   let checkedInput = formElement.find("#checked");

  //   nameInput.blur(function() {
  //     let name = $(this).val();
  //     validateNameField(name, event);

  //     if(!isValidName(name)) {
  //       $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}); 
  //     } else {
  //       $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}); 
  //     }
  //   })

  //   passwordInput.blur(function() {
  //     let password = $(this).val();
  //     validatePasswordField(password, event);

  //     if(!isValidPassword(password)) {
  //       $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}); 
  //     } else {
  //       $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}); 
  //     }
  //   })

  //   messageInput.blur(function() {
  //     let message = $(this).val();
  //     validateMessageField(message, event);

  //     if(!isValidMessage(message)) {
  //       $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}); 
  //     } else {
  //       $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}); 
  //     }
  //   })

  //   checkedInput.change(function() {
  //     let isChecked = $(this).is(":checked");
  //     validateCheckedField(isChecked, event);

  //     if(!isChecked) {
  //       $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}); 
  //     } else {
  //       $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}); 
  //     }
  //   })
  // }

  // function validateNameField(name, event) {
  //   if(!isValidName(name)) {
  //     $("#name-feedback").text("Please enter at least two characters");
  //     event.preventDefault();
  //   } else {
  //     $("#name-feedback").text("");
  //   }
  // }

  // function isValidName(name) {
  //   return name.length >= 2;
  // }

  // function validatePasswordField(password, event) {
  //   if(!isValidPassword(password)) {
  //     $("#password-feedback").text("Please enter at least six characters and contain a number");
  //     event.preventDefault();
  //   } else {
  //     $("#password-feedback").text("");
  //   }
  // }

  // function isValidPassword(password) {
  //   return password.length >= 6 && /.*[0-9].*/.test(password);
  // }

  // function validateMessageField(message, event) {
  //   if(!isValidMessage(message)) {
  //     $("#message-feedback").text("Please enter a message");
  //     event.preventDefault();
  //   } else {
  //     $("#message-feedback").text("");
  //   }
  // }

  // function isValidMessage(message) {
  //   return message.trim() != "";
  // }

  // function validateCheckedField(isChecked, event) {
  //   if(!isChecked) {
  //     $("#checkbox-feedback").text("Please agree to this");
  //     event.preventDefault();
  //   } else {
  //     $("#checkbox-feedback").text("");
  //   }
  // }

  //Ajax
  // $.get(), $.post(), $.ajax(), $.getJSON()

  //Fetch server file
  // $.load()
  // $("#code").load("js/script.js");
  // $("#code").load("js/script.pjs", function(response, status) {
  //   if(status === "error") {
  //     alert("Could not find file.");l
  //   }
  //   console.log(response);
  // });

  //Retrieving flickr images using flickr API
  //JSON, $.getJSON()
  // let flickrApiUrl = `https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`;

  // $.getJSON(flickrApiUrl, {
  //   //Options
  //   tags: "sun, beach",
  //   tagmode: "any",
  //   format: "json"
  // }).done(function(data) {
  //   //success
  //   console.log(data);
  //   $.each(data.items, function(index, item) {
  //     console.log(item);
  //     $("<img>").attr("src", item.media.m).appendTo("#flickr");

  //     if(index == 4) {
  //       return false;
  //     }
  //   })
  // }).fail(function() {
  //   //failure
  //   alert("AJAX call failed!");
  // })

  //Retrieve data using Star Wars API
  //JSON, $.getJSON()
  let PokemonApiUrl = `https://pokeapi.co/api/v2/generation/1`;
  let PokemonByName = `https://pokeapi.co/api/v2/pokemon/`;

  $.getJSON(PokemonApiUrl).done(function(data) {
        console.log(data);
        $.each(data.pokemon_species, function(index, pokemon) {
          let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          let link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
          let par = $("<p></p>").html("Pokemon species no. " + (index+1) + " is ").append(link);

          link.click(function(event) {
            $.getJSON(PokemonByName + pokemon.name).done(function(details) {
              console.log(details);
              let pokemonDiv = $("#pokedex-detail");
              pokemonDiv.empty();
              pokemonDiv.append("<h2>" + name + "</h2>");
              pokemonDiv.append("<img src ='" + details.sprites.front_default + "'>");
              pokemonDiv.append("<img src ='" + details.sprites.back_default + "'>");
              pokemonDiv.append("<img src ='" + details.sprites.front_shiny + "'>");
              pokemonDiv.append("<img src ='" + details.sprites.back_shiny + "'>");
            });
            event.preventDefault();
          });
          par.appendTo("#pokedex");
        })
  }).fail(function(){
    console.log("Request to pokeapi failed!");
  }).always(function() {
    console.log("Pokemon is awesome!");
  })


});


