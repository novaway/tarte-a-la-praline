const allowCookiesCategorie = () => {
    const categorieInputs = document.querySelectorAll('.input-categorie');

    //When clicking a switch categorie
    categorieInputs.forEach((item:HTMLInputElement) => {
        item.addEventListener('change', () => {
            const id = item.id.replace("input-categorie-", "")
            const toCheckInputs:NodeListOf<HTMLInputElement> = document.querySelector(`.categorie-${id}`).querySelectorAll('.input-service')
            toCheckInputs.forEach((input) => {
                if(item.checked == true){
                    input.checked = true
                }
                else{
                    input.checked = false
                }
            });
        })
    })

    //When clicking a checkbox service
    document.querySelectorAll('.input-service').forEach((input) => {
        input.addEventListener('change', () => {
            const container = input.closest("[class^=categorie-]")
            const switchInContainer:HTMLInputElement = container.querySelector('.input-categorie')
            const allCheckboxInContainer = container.querySelectorAll('.input-service');
            const allCheckboxCheckedInContainer = container.querySelectorAll('input.input-service:checked');
            if (allCheckboxCheckedInContainer.length == allCheckboxInContainer.length){
                switchInContainer.checked = true
            }
            else{
                switchInContainer.checked = false
            }
        })
    })
};

export default allowCookiesCategorie;