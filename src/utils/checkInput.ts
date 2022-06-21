const checkInputWhenReOpenModal = () => {
    const oldServices = localStorage.getItem("oldServices");

    for (const [key, value] of Object.entries(JSON.parse(oldServices))) {
        if(key !== 'createdAt'){
            const checkbox = <HTMLInputElement>document.getElementById(key);
            checkbox.checked = Boolean(value);
        }
    }
}

export default checkInputWhenReOpenModal;