const $ = function(id)
{
    return document.getElementById(id);
}

window.onload = () => 
{
    const phone = $('phone');

    phone.oninput = (e) =>
    {
        // don't let user do anything past 12
        if (phone.value.length > 11)
        {
            phone.value = phone.value.substr(0, 12);
        }
    }
}