
const query=[
    {
        id:"1",
        src:"./Images/slide1.png"
    },
    {
        id:"2",
        src:"./Images/slide2.png"
    },
    {
        id:"3",
        src:"./Images/slide3.png"
    },
    {
        id:"4",
        src:"./Images/slide4.png"
    },
    {
        id:"5",
        src:"./Images/slide5.png"
    },
]


const soil=document.getElementById("land");
query.map((item,index)=>(
    soil.innerHTML += `
    <div class="item" id="ghy">
    <div class="row">
    <img src=${item.src} alt="studentsts" class="img-fluid">
    </div>
    </div>
      `
))

