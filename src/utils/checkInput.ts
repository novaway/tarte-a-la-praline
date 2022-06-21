const checkInputWhenReOpenModal = () => {
    const oldServices = localStorage.getItem("oldServices");

    for (const [key, value] of Object.entries(JSON.parse(oldServices))) {
        if (value == true){
            const checkbox = <HTMLInputElement>document.getElementById(key);
            checkbox.checked = true;
        }
    }
}

export default checkInputWhenReOpenModal;