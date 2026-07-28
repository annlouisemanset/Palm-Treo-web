// ===============================
// Palm Treo 650 Website Script
// ===============================

// Smooth fade-in animation (homepage cards + any .reveal element site-wide)
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{ threshold:0.15 });

document.querySelectorAll(".card, .reveal, .bar-fill").forEach(el=>{
    observer.observe(el);
});

// Floating phone animation
const phone = document.querySelector(".hero-right img");

if(phone){

let rotate = 0;

let float = 0;

setInterval(()=>{

    rotate += 0.5;

    float += 0.05;

    phone.style.transform = `
        translateY(${Math.sin(float)*12}px)
        rotateY(${Math.sin(float)*18}deg)
        rotateX(${Math.cos(float)*3}deg)
        scale(1.02)
    `;

},20);

}

// Button ripple effect
document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Current year in footer (optional)
const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
"Created by BTVTED Computer Programming Students © " +
new Date().getFullYear();

}

// ===============================
// GALLERY LIGHTBOX (only runs on gallery.html)
// ===============================

const galleryItems = document.querySelectorAll(".gallery-item");

if(galleryItems.length){

    const overlay = document.querySelector(".lightbox-overlay");
    const lightboxIcon = document.querySelector(".lightbox-icon");
    const lightboxTitle = document.querySelector(".lightbox-title");
    const lightboxDesc = document.querySelector(".lightbox-desc");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let currentIndex = 0;

    function openLightbox(index){

        currentIndex = index;

        const item = galleryItems[currentIndex];

        lightboxIcon.textContent = item.dataset.icon || "📱";
        lightboxTitle.textContent = item.dataset.title || "";
        lightboxDesc.textContent = item.dataset.desc || "";

        overlay.classList.add("open");

    }

    function closeLightbox(){

        overlay.classList.remove("open");

    }

    galleryItems.forEach((item,index)=>{

        item.addEventListener("click",()=>openLightbox(index));

    });

    if(closeBtn) closeBtn.addEventListener("click",closeLightbox);

    if(overlay){

        overlay.addEventListener("click",(e)=>{

            if(e.target === overlay) closeLightbox();

        });

    }

    if(prevBtn){

        prevBtn.addEventListener("click",()=>{

            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;

            openLightbox(currentIndex);

        });

    }

    if(nextBtn){

        nextBtn.addEventListener("click",()=>{

            currentIndex = (currentIndex + 1) % galleryItems.length;

            openLightbox(currentIndex);

        });

    }

    document.addEventListener("keydown",(e)=>{

        if(!overlay.classList.contains("open")) return;

        if(e.key === "Escape") closeLightbox();
        if(e.key === "ArrowRight" && nextBtn) nextBtn.click();
        if(e.key === "ArrowLeft" && prevBtn) prevBtn.click();

    });

}

// ===============================
// 3D APP INTERFACE DEMO (only runs on gallery.html)
// ===============================

const osFlipCard = document.getElementById("osFlipCard");

if(osFlipCard){

    const osAppTitle = document.getElementById("osAppTitle");
    const osAppBody = document.getElementById("osAppBody");
    const osBackBtn = document.getElementById("osBackBtn");

    const osApps = {

        address:{
            title:"Address",
            body:`
                <div class="os-row"><div class="os-dot">MR</div><div><div class="os-row-main">Maria Reyes</div><div class="os-row-sub">Mobile · Work</div></div></div>
                <div class="os-row"><div class="os-dot">JC</div><div><div class="os-row-main">Jon Cruz</div><div class="os-row-sub">Home</div></div></div>
                <div class="os-row"><div class="os-dot">AL</div><div><div class="os-row-main">Ann Lopez</div><div class="os-row-sub">Mobile</div></div></div>
                <div class="os-row"><div class="os-dot">BT</div><div><div class="os-row-main">Ben Torres</div><div class="os-row-sub">Work</div></div></div>
            `
        },

        calc:{
            title:"Calc",
            body:`
                <div class="os-calc-display">128.5</div>
                <div class="os-calc-grid">
                    <span>7</span><span>8</span><span>9</span><span>÷</span>
                    <span>4</span><span>5</span><span>6</span><span>×</span>
                    <span>1</span><span>2</span><span>3</span><span>−</span>
                    <span>0</span><span>.</span><span>=</span><span>+</span>
                </div>
            `
        },

        calendar:{
            title:"Calendar",
            body:`
                <div class="os-cal-grid">
                    <span class="os-cal-head">S</span><span class="os-cal-head">M</span><span class="os-cal-head">T</span><span class="os-cal-head">W</span><span class="os-cal-head">T</span><span class="os-cal-head">F</span><span class="os-cal-head">S</span>
                    <span></span><span></span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                    <span>13</span><span>14</span><span class="os-cal-active">15</span><span>16</span><span>17</span><span>18</span><span>19</span>
                    <span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span>
                </div>
                <p style="margin-top:10px;font-size:10.5px;color:#5a655c;">Oct 15 — Team sync, 10:00 AM</p>
            `
        },

        contact:{
            title:"Contact",
            body:`
                <div style="text-align:center;padding:10px 0;">
                    <div class="os-dot" style="width:54px;height:54px;font-size:18px;margin:0 auto 12px;">MR</div>
                    <div class="os-row-main" style="font-size:14px;">Maria Reyes</div>
                    <div class="os-row-sub" style="margin-top:4px;">+63 917 000 0000</div>
                    <div class="os-row-sub">maria.reyes@mail.com</div>
                </div>
            `
        },

        documents:{
            title:"Documents",
            body:`
                <div class="os-row"><div class="os-dot">📄</div><div><div class="os-row-main">Lab_2_Report.doc</div><div class="os-row-sub">18 KB</div></div></div>
                <div class="os-row"><div class="os-dot">📊</div><div><div class="os-row-main">Budget.xls</div><div class="os-row-sub">42 KB</div></div></div>
                <div class="os-row"><div class="os-dot">📑</div><div><div class="os-row-main">Notes.txt</div><div class="os-row-sub">4 KB</div></div></div>
            `
        },

        email:{
            title:"Email",
            body:`
                <div class="os-row"><div class="os-dot">📥</div><div><div class="os-row-main">Prof. Santos</div><div class="os-row-sub">Re: Activity 2 submission</div></div></div>
                <div class="os-row"><div class="os-dot">📥</div><div><div class="os-row-main">IT Dept.</div><div class="os-row-sub">Server maintenance notice</div></div></div>
                <div class="os-row"><div class="os-dot">📥</div><div><div class="os-row-main">Jashmine A.</div><div class="os-row-sub">Updated spec sheet attached</div></div></div>
            `
        },

        memos:{
            title:"Memos",
            body:`
                <div class="os-row"><div class="os-dot">📝</div><div><div class="os-row-main">Grocery list</div><div class="os-row-sub">3 items</div></div></div>
                <div class="os-row"><div class="os-dot">📝</div><div><div class="os-row-main">Meeting notes</div><div class="os-row-sub">Oct 12</div></div></div>
                <div class="os-row"><div class="os-dot">📝</div><div><div class="os-row-main">Wi-Fi password</div><div class="os-row-sub">Home</div></div></div>
            `
        },

        messaging:{
            title:"Messaging",
            body:`
                <div class="os-bubble os-bubble-in">Did you finish the specs table?</div>
                <div class="os-bubble os-bubble-out">Almost — sending it in 5.</div>
                <div class="os-bubble os-bubble-in">Perfect, see you at the lab.</div>
            `
        },

        phone:{
            title:"Phone",
            body:`
                <div class="os-dial-display">555 0142</div>
                <div class="os-dial-grid">
                    <span>1</span><span>2</span><span>3</span>
                    <span>4</span><span>5</span><span>6</span>
                    <span>7</span><span>8</span><span>9</span>
                    <span>*</span><span>0</span><span>#</span>
                </div>
            `
        },

        tasks:{
            title:"Tasks",
            body:`
                <div class="os-row"><div class="os-dot">✔</div><div><div class="os-row-main">Finish Activity 2</div><div class="os-row-sub">High priority</div></div></div>
                <div class="os-row"><div class="os-dot">○</div><div><div class="os-row-main">Charge the Treo</div><div class="os-row-sub">Low priority</div></div></div>
                <div class="os-row"><div class="os-dot">○</div><div><div class="os-row-main">Back up contacts</div><div class="os-row-sub">Medium priority</div></div></div>
            `
        },

        web:{
            title:"Web",
            body:`
                <div class="os-url-bar">http://www.palm.com</div>
                <div class="os-web-block" style="width:70%;"></div>
                <div class="os-web-block" style="width:95%;"></div>
                <div class="os-web-block" style="width:88%;"></div>
                <div class="os-web-block" style="width:60%;"></div>
                <p style="margin-top:10px;font-size:10.5px;color:#5a655c;">Palm OS browser rendering a simplified mobile page.</p>
            `
        },

        hotsync:{
            title:"HotSync",
            body:`
                <p style="font-size:11px;color:#3a463c;">Syncing with desktop…</p>
                <div class="os-sync-bar-track"><div class="os-sync-bar-fill"></div></div>
                <p style="font-size:10.5px;color:#5a655c;">Contacts, Calendar and Memos up to date.</p>
            `
        }

    };

    document.querySelectorAll(".os-app-btn").forEach(btn=>{

        btn.addEventListener("click",()=>{

            const app = osApps[btn.dataset.app];

            if(!app) return;

            osAppTitle.textContent = app.title;
            osAppBody.innerHTML = app.body;

            osFlipCard.classList.add("flipped");

        });

    });

    if(osBackBtn){

        osBackBtn.addEventListener("click",()=>{

            osFlipCard.classList.remove("flipped");

        });

    }

}

console.log("Palm Treo 650 Website Loaded Successfully");
