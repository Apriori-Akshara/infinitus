
// footer data 1
const footer=[
    {
        id:"1",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"2",
        title:"social media"
    },
    {
        id:"3",
        title:"instagram"
    },
    {
        id:"4",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"5",
        title:"social media"
    },
    {
        id:"6",
        title:"instagram"
    },
    {
        id:"7",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"8",
        title:"Free Meeting Scheduler App"
    },
  
]


// footer data 2
const footer2=[
    {
        id:"1",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"2",
        title:"social media"
    },
    {
        id:"3",
        title:"instagram"
    },
    {
        id:"4",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"5",
        title:"social media"
    },
    {
        id:"6",
        title:"instagram"
    },
    {
        id:"7",
        title:"Free Meeting Scheduler App"
    },
    
  
]



// footer data 3
const footer3=[
    {
        id:"1",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"2",
        title:"social media"
    },
    {
        id:"3",
        title:"instagram"
    },
    {
        id:"4",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"5",
        title:"social media"
    },
    {
        id:"6",
        title:"instagram"
    },
    {
        id:"7",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"8",
        title:"instagram"
    },
    {
        id:"9",
        title:"Free Meeting Scheduler App"
    },
    
  
]




// footer data 4
const footer4=[
    {
        id:"1",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"2",
        title:"social media"
    },
    {
        id:"3",
        title:"instagram"
    },
    {
        id:"4",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"5",
        title:"social media"
    },
    {
        id:"6",
        title:"instagram"
    },
    {
        id:"7",
        title:"Free Meeting Scheduler App"
    },
    
  
]


// footer data 5
const footer5=[
    {
        id:"1",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"2",
        title:"social media"
    },
    {
        id:"3",
        title:"instagram"
    },
    {
        id:"4",
        title:"Free Meeting Scheduler App"
    },
    {
        id:"5",
        title:"social media"
    },
   
    
  
]

// footer part 1
const dataO=document.getElementById("footers");
footer.map((item,index)=>(
    dataO.innerHTML += `
    <p>
    <a href="">${item.title}</a>
</p>
      `
))

// footer part 2
const dataO2=document.getElementById("footers2");
footer2.map((item,index)=>(
    dataO2.innerHTML += `
    <p>
    <a href="">${item.title}</a>
</p>
      `
))

// footer part 3
const dataO3=document.getElementById("footers3");
footer3.map((item,index)=>(
    dataO3.innerHTML += `
    <p>
    <a href="">${item.title}</a>
</p>
      `
))


// footer part 4
const dataO4=document.getElementById("footers4");
footer4.map((item,index)=>(
    dataO4.innerHTML += `
    <p>
    <a href="">${item.title}</a>
</p>
      `
))

// footer part 5
const dataO5=document.getElementById("footers5");
footer5.map((item,index)=>(
    dataO5.innerHTML += `
    <p>
    <a href="">${item.title}</a>
</p>
      `
))