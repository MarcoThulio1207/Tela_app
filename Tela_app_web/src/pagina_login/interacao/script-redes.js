menuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetID = this.getAttribute('href');
        var targetSection = document.querySelector(targetID);
        if (targetSection) {
            scrollTo(targetSection);
        }
    });
});