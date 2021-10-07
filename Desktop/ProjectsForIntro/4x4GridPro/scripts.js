
let thePage = $('#page')

for(let i = 0;  i < 16; i++)
{
    $(thePage).append('<div class="please"></div>');
}
$(thePage).on('click', 'div',function()
{ 
    $(this).toggleClass('squares');
});