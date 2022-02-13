$(document).ready(function() {
    $('.list1').click(function(event) {
        $('.sublist1, .arr1').toggleClass('active');
    });
    $('.list2').click(function(event) {
        $('.sublist2, .arr2').toggleClass('active');
    });
});
