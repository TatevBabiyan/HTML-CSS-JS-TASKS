const showButton = document.getElementById('showButton');
        const hideButton = document.getElementById('hideButton');
        const text = document.getElementById('text');

        showButton.addEventListener('click', function() {
            text.style.display = 'block';
        });

        hideButton.addEventListener('click', function() {
            text.style.display = 'none';
        });
