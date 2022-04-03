const wrapper = document.querySelector('.wrapper'),
    input = document.querySelector('.form input'),
    qrImage = document.querySelector('.qr-code img');
    generateBtn = document.querySelector('.form button');

generateBtn.addEventListener('click', () => {
    const search = input.value;
    if (!search) return;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${search}&size=170x170`;
    wrapper.classList.add('active');
})

input.addEventListener('keyup', () => {
    if (!input.value) {
        wrapper.classList.remove('active');
        
    }
})