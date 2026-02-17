document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".neon-header");
    const dropdowns = document.querySelectorAll(".dropdown");
    const logo = document.querySelector(".logo");
    
    const isMobile = () => window.innerWidth < 992;  
 
    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
            menu.classList.remove("show");
        });
    }

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");

        const isDesktop = () => window.innerWidth >= 992;

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector(".dropdown-menu");

        if (!menu) return;
 
        dropdown.addEventListener("mouseenter", function () {
            if (isDesktop() && !isMobile()) {
                document.querySelectorAll(".dropdown-menu").forEach(m => {
                    m.classList.remove("show");
                });
                menu.classList.add("show");
            }
        });

        dropdown.addEventListener("mouseleave", function () {
            if (isDesktop() && !isMobile()) {
                menu.classList.remove("show");
            }
        });
    });
 
        toggle.addEventListener("click", function (e) {
            if (isMobile()) {
                const href = toggle.getAttribute("href");
                const isOpen = menu.classList.contains("show");

                if (!isOpen) { 
                    e.preventDefault();
                    closeAllDropdowns();
                    menu.classList.add("show");
                } else { 
                    if (href && href !== "#") {
                        window.location.href = href;
                    }
                }
            }
        });
 
        menu.querySelectorAll("a").forEach(item => {
            item.addEventListener("click", () => {
                if (isMobile()) {
                    closeAllDropdowns();
 
                    menu.querySelectorAll("a").forEach(link => link.classList.remove("clicked"));
                    item.classList.add("clicked");
                }
            });
        });
    });
 
    document.addEventListener("click", function (e) {
        if (isMobile()) {
            const isInsideDropdown = e.target.closest(".dropdown");
            const isLogo = e.target.closest(".logo");

            if (!isInsideDropdown && !isLogo) {
                closeAllDropdowns();
            }
        }
    });
 
    
    if (logo) {
        logo.addEventListener("click", function () {
            if (isMobile()) closeAllDropdowns();
        });
    }
 
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
 
    const track = document.getElementById("logoTrack");
    if (track) {
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    window.addEventListener("resize", function () {
        closeAllDropdowns();
    });

 


    const featured = document.querySelectorAll(".feature");
    const bars = document.querySelectorAll(".bar");
    const imaged = document.querySelectorAll(".preview");

    function activate(id) {
  featured.forEach(f => f.classList.remove("active"));
  bars.forEach(b => b.classList.remove("active"));
  imaged.forEach(i => i.classList.remove("active"));

  document.querySelector(`.feature[data-id="${id}"]`).classList.add("active");
  document.querySelector(`.bar[data-id="${id}"]`).classList.add("active");
  document.getElementById(`img${id}`).classList.add("active");
    }

    featured.forEach(item =>
  item.addEventListener("mouseenter", () => activate(item.dataset.id))
    );

    bars.forEach(item =>
  item.addEventListener("mouseenter", () => activate(item.dataset.id))
    );

    const overlay = document.querySelector('.overlay-text');
    
    window.addEventListener('load', () => {
    overlay.style.opacity = '1';
    overlay.style.transform = 'translate(-50%, -50%) translateY(0)';
    });

     document.querySelector(".left-container").style.scrollBehavior = "smooth";

    const boxed = document.querySelectorAll(".left-box");
    const images_on_hover = document.querySelectorAll(".preview-img");

    function activateImage(id){
    images_on_hover.forEach(img => img.classList.remove("active"));
    boxed.forEach(box => box.classList.remove("active"));

    document.getElementById("img"+id).classList.add("active");
    document.querySelector('.left-box[data-img="'+id+'"]').classList.add("active");
    }

    boxed.forEach(box => {
    
        box.addEventListener("mouseenter", function(){
            const id = this.getAttribute("data-img");
            activateImage(id);
        });
    
        box.addEventListener("click", function(){
            const id = this.getAttribute("data-img");
            activateImage(id);
        });
    });

        const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let current = 0;
let autoSlide;

function updateSlider() {
    slides.forEach(slide => {
        slide.classList.remove("active", "prev", "next");
    });

    const total = slides.length;

    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;

    slides[current].classList.add("active");
    slides[prevIndex].classList.add("prev");
    slides[nextIndex].classList.add("next");
}

function startAutoSlide() {
    autoSlide = setInterval(() => {
        current = (current + 1) % slides.length; 
        updateSlider();
    }, 2000); 
}


if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", function () {
        current = (current + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        current = (current - 1 + slides.length) % slides.length;
        updateSlider();
    });
}

updateSlider();
startAutoSlide();

            const slowBox = document.getElementById("slowBox");
            const breakBox = document.getElementById("breakBox");
            const productionBox = document.getElementById("production-resumed"); 
            const changeoverBox = document.getElementById("changeover");   
        function showSlow(){
            breakBox.classList.remove("show");
            slowBox.classList.add("show");

            setTimeout(()=>{
                slowBox.classList.remove("show");
                showBreak();
            },2000);
        }

        function showBreak(){
            slowBox.classList.remove("show");
            breakBox.classList.add("show");

            setTimeout(()=>{
                breakBox.classList.remove("show");
                showSlow();
            },2000);
        }


        function showProduction(){
            productionBox.classList.remove("show");
            changeoverBox.classList.add("show");

            setTimeout(()=>{
                changeoverBox.classList.remove("show");
                showChangeover();
            },2000);
        }

        function showChangeover(){
            changeoverBox.classList.remove("show");
            productionBox.classList.add("show");

            setTimeout(()=>{
                productionBox.classList.remove("show");
                showProduction();
            },2000);
        }

        showSlow();
        showProduction();
        document.getElementById("toTop").addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

});
