let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.1
}

let callback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target);
});
