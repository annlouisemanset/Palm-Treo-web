// ===============================
// Comparison Page Script
// Swaps the "vs" column in the compare table
// between rival devices when a tab is clicked.
// ===============================

const compareData = {

    "treo600": {

        label:"Palm Treo 600 (2003)",

        rows:[
            "2003",
            "2.5\" Reflective Color STN",
            "160 × 160 Pixels",
            "Full Physical QWERTY",
            "Motorola i.MXL • 144 MHz",
            "32 MB RAM",
            "No expansion slot",
            "VGA (0.3 MP)",
            "~1500 mAh Li-Ion",
            "2G GSM / GPRS",
            "Palm OS 5.2.1"
        ]

    },

    "blackberry7290": {

        label:"BlackBerry 7290 (2004)",

        rows:[
            "2004",
            "2.6\" Color TFT",
            "240 × 160 Pixels",
            "Thumb QWERTY",
            "Intel PXA • ~200 MHz",
            "16 MB Flash Memory",
            "No expansion slot",
            "No camera",
            "~1000 mAh Li-Ion",
            "2G GSM / GPRS",
            "BlackBerry OS"
        ]

    }

};

const tabs = document.querySelectorAll(".compare-tab");
const rivalHeader = document.querySelector(".rival-header");
const rivalCells = document.querySelectorAll(".rival-cell");
const compareTable = document.querySelector(".compare-table");

function renderRival(key){

    const data = compareData[key];

    if(!data) return;

    if(rivalHeader) rivalHeader.textContent = data.label;

    rivalCells.forEach((cell,i)=>{

        if(data.rows[i] !== undefined){

            cell.textContent = data.rows[i];

        }

    });

    if(compareTable){

        compareTable.classList.remove("tab-fade");

        void compareTable.offsetWidth; // restart animation

        compareTable.classList.add("tab-fade");

    }

}

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        tab.classList.add("active");

        renderRival(tab.dataset.device);

    });

});

// Initialize with whichever tab starts active
const initialTab = document.querySelector(".compare-tab.active");

if(initialTab){

    renderRival(initialTab.dataset.device);

}
