function showMap(root){
    var map = document.getElementById("map");
    if(root.checked){
        map.style.display = "block";
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.205166210258!2d76.57242631462042!3d30.768820681624558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1676653663376!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }else{
        map.style.display = "none";
    }
}

var fromMonth = document.getElementById("fromMonth");
var fromYear = document.getElementById("fromYear");
var toMonth = document.getElementById("toMonth");
var toYear = document.getElementById("toYear");

toMonth.addEventListener("change",calculateMonths);
toYear.addEventListener("change",calculateMonths);
fromMonth.addEventListener("change",calculateMonths);
fromYear.addEventListener("change",calculateMonths);

function calculateMonths(){
    var stMonth = parseInt(fromMonth.value);
    var stYear = parseInt(fromYear.value);
    var endMonth = parseInt(toMonth.value);
    var endYear = parseInt(toYear.value);
    var totalMonths = 0;
    var yearDiff = endYear - stYear;
    if(yearDiff < 0 || (yearDiff == 0 && endMonth - stMonth < 0)){
        alert("Invaild peroid");
        return;
    }
    if(yearDiff === 0){
        totalMonths = endMonth - stMonth + 1;
    }else if(yearDiff == 1){
        totalMonths = (12 - stMonth + 1) + endMonth;
    }else{
        totalMonths = (12 - stMonth + 1) + endMonth + 12*(yearDiff - 1);
    }
    document.getElementById("totalMonths").innerText = totalMonths;
}


// Payment confirmation

function checkCnf(){
    var paymentCnf = document.getElementById("paymentCnf");
    var termsCnf = document.getElementById("termsCnf");

    if(paymentCnf.checked && termsCnf.checked){
        alert("Procedding to payment gateway");
        return true;
    }else{
        alert("Please check the confirmation!");
        return false;
    }
}