// grab clicked button data-id
$(".change-state").on("click", function () {
    let burgerId = $(this).attr("data-id");
    let state = $(this).attr("data-state");
    console.log(state);
    
    let insertState;
    if (state == 1){
        insertState = 0;
    } else {
        insertState = 1;
    }
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burgerId,
        data: {devoured: insertState },
        success: function (response) {
           location.href ="/";
        },
        error: function (error) {
            console.log(error);

        },
    });
});


$(".delete-burger").on("click", function () {
    let burgerId = $(this).attr("data-id");
    $.ajax({
        method: "DELETE",
        url: "/api/burgers/" + burgerId,
        success: function (response) {
           location.href ="/";
        },
        error: function (error) {
            console.log(error);

        },
    });
});