//var modal = document.getElementById("myModal"),
//    btn = document.getElementById("myBtn"),
//    span = document.getElementsByClassName("close")[0];
//myBtn.onclick = function () {
//    modal.style.display = "block"
//}, span.onclick = function () {
//    modal.style.display = "none"
//}, window.onclick = function (n) {
//    n.target == modal && (modal.style.display = "none")
//};
//$(myBtn).click(function () {
//    new $.fade({
//        title: '',
//   Content:'<div align="center"><img src="../Content/CustomImg/heart.png"><center> <h4>This Trek added to Wishlist Successfully</h4></center></div>'
//    });

//});\

$(document).click(function ()
{
    $(myBtn).click(function () {
        $("#myModal").fadeIn();
    });

    $(close).click(function () {
        $("#myModal").hide();
    });
});