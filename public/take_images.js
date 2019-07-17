function addNotices(tag, done) {
    $.ajax({
        type: "GET",
        url: "/api/generator",

        data: {
            tag: tag,
            dataType: 'Json',

        },
        success: function (data) {
            console.log((data));
        },

    })

}


$(function () {
    let tag = $('#tag1')

    $('#addbtn').click(function () {
        addNotices(
            tag.val(),
            function (data) {
                console.log(data)

            }
        )


    })

    let tag2 = $('#tag2')

    $('#uploadbtn').click(function () {

    })

})