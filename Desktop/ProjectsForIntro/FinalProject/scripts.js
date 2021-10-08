let subButton = $('#submitButton');
let disName = $('#theNameDisplay');
let comBar = $('#commentingBar');
let theComments = $('#theComments');
let isOn = false;
$(subButton).click(function()
{
    if($(disName).val() != ('') && $(comBar).val() != (''))
    {
        $(theComments).prepend('<div class="container"><div class="insideCon"><div class="image"><img class ="theImageForUser" src="personImg.png" alt="User Avatar."></div><div class="name">' + $(disName).val() +'</div><div class="comment"><p>' + $(comBar).val() +'</p></div><div class="Editing">Edit</div><div class="delete">Remove</div></div></div>');
    }
});
let delButton = $('.delete');
    $(theComments).on('click', '.Editing',function()
    {
        if(!isOn)
        {
            let theSelectedCom = $(this).prev();
            $(theSelectedCom).append('<input class="newCom"type="text" placeholder="Your Edit"><div class=enterEdit>Enter Edit</div>');
            isOn = true
        }
    });
$(theComments).on('click','.enterEdit', function()
{
    if($('.newCom').val() != (''))
    {
        let theNewComment = $(this).prev().val();
        console.log(theNewComment)
        let getTheCom = $(this).prev();
        let Work = $(getTheCom).prev();
        console.log($(Work).text());
        
        $(Work).text($(this).prev().val());
        $('.newCom').remove();
        $('.enterEdit').remove();
    }
    else
    {
        $('.newCom').remove();
        $('.enterEdit').remove();
    }
    isOn = false;

});
$(theComments).on('click','.delete',function()
{
    $(this).parent().remove();

});
