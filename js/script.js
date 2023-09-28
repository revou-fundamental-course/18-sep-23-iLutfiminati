document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form'); 

    form.addEventListener('submit', function (event) {
        const username = form.querySelector('input[name="username"]').value;
        const email = form.querySelector('input[name="email"]').value;


        if (username.trim() === '') {
            alert('Nama harus diisi');
            event.preventDefault();
            return;
        }


        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert('Email tidak valid');
            event.preventDefault();
            return;
        }
        

        const option = form.querySelector('#option').value;
        if (option === '') {
            alert('Harap pilih salah satu opsi');
            event.preventDefault(); 
            return;
        }


    });
});
