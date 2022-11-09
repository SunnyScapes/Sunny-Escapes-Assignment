// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i = 0; i < images.length; i++){
    images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// JS validation on Newsletter sign up form

function validate (formObj) {

    let errors = [];

    if (formObj.fname.value === "") {
        
        errors.push("First name is required");
    }

    if (formObj.lname.value === ""){

        errors.push("Last name is required");
    }

    if (formObj.email.value === "") {
        errors.push("Email is required");
    }

    if(errors.length > 0){
        let msg ="The following errors have been found\n\n";

        for(let i = 0; i< errors.length; i++) {

            msg += errors[i] + "\n";
        }

        console.log(errors);
        alert(msg);
        return false;

    }

    return true;
}