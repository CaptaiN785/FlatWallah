function previewImage(prImage, srcImage){
    var file = srcImage.files;
    if(file.length>0){
        var fileReader = new FileReader();
        fileReader.onload = function(event){
            document.getElementById(prImage).setAttribute("src", event.target.result);
        };
        fileReader.readAsDataURL(file[0]);
    }
}