
const work=[
    {
        id:"1",
        date:"12/06/21",
        what:" BUILD A BLOG IN 45 Min",
        when:"20th June 2021 @ 4:00 pm IST",
        where:"Zoom",
        details:"Have you ever wanted to have a website of your own to showcase your work to the world, but didn’t have the expertise to do so? If yes, this is your chance to make one now! Learn to make a blog in only using WordPress, an online tool where website making is made easier, simpler and faster. Register below!",
        registration:"Closed!"
    },
    {
        id:"2",
        date:"13/06/21",
        what:" BUILD A BLOG IN 45 Min",
        when:"20th June 2021 @ 4:00 pm IST",
        where:"Zoom",
        details:"Are you a gamer? Would you want to make your own game using your own interface and rules? If yes, then we got you! Learn to make a game in just 45 minutes using the fundamentals of python. With a step-by-step guide and instructions to help you through, you’ll be able to master this art. So what are you waiting for? Register now.        ",
        registration:"Closed!"
    },
    {
        id:"3",
        date:"15/06/21",
        what:" INTRODUCTION TO UI/UX",
        when:"BUILD A BLOG IN 45 Min",
        where:"Zoom",
        details:" What is User Interface? And what about User Experience Design? Understand the basics, and build and application prototype using a web based tool called Figma.",
        registration:"Closed"
    },
    {
        id:"4",
        date:"11/06/21",
        what:" INTRODUCTION TO UI/UX",
        when:"BUILD A BLOG IN 45 Min",
        where:"Zoom",
        details:"Have you ever wanted to have a website of your own to showcase your work to the world, but didn’t have the expertise to do so? If yes, this is your chance to make one now! Learn to make a blog in only using WordPress, an online tool where website making is made easier, simpler and faster. Register below!",
        registration:"Closed"
    },
    {
        id:"5",
        date:"30/06/21",
        what:" INTRODUCTION TO UI/UX",
        when:"BUILD A BLOG IN 45 Min",
        where:"Zoom",
        details:" What is User Interface? And what about User Experience Design? Understand the basics, and build and application prototype using a web based tool called Figma.",
        registration:"Closed"
    },
    {
        id:"6",
        date:"22/06/21",
        what:" BUILD A BLOG IN 45 Min",
        when:"20th June 2021 @ 4:00 pm IST",
        where:"Zoom",
        details:"Are you a gamer? Would you want to make your own game using your own interface and rules? If yes, then we got you! Learn to make a game in just 45 minutes using the fundamentals of python. With a step-by-step guide and instructions to help you through, you’ll be able to master this art. So what are you waiting for? Register now.        ",
        registration:"Closed!"
    },
    {
        id:"7",
        date:"23/06/21",
       
        what:" INTRODUCTION TO UI/UX",
        when:"BUILD A BLOG IN 45 Min",
        where:"Zoom",
        details:"Have you ever wanted to have a website of your own to showcase your work to the world, but didn’t have the expertise to do so? If yes, this is your chance to make one now! Learn to make a blog in only using WordPress, an online tool where website making is made easier, simpler and faster. Register below!",
        registration:"Closed"
    },
    {
        id:"8",
        date:"16/06/21",
        what:" BUILD A BLOG IN 45 Min",
        when:"20th June 2021 @ 4:00 pm IST",
        where:"Zoom",
        details:"Have you ever wanted to have a website of your own to showcase your work to the world, but didn’t have the expertise to do so? If yes, this is your chance to make one now! Learn to make a blog in only using WordPress, an online tool where website making is made easier, simpler and faster. Register below!",
        registration:"Closed!"
    },
]


const shop=document.getElementById("butt");
work.map((item,index)=>(
    shop.innerHTML += `
    <div class="row dynamics" key=${index}  onclick="eventCall('${item.what}','${item.when}','${item.where}','${item.details}','${item.registration}','${item.id}')">
    <p>
        ${item.date}
    </p>
</div>
      `
))


function eventCall(what,when,where,details,registration,id){

document.getElementById('build').innerHTML=what;
document.getElementById('june').innerHTML=when;
document.getElementById('zoom').innerHTML=where;
document.getElementById('have').innerHTML=details;
document.getElementById('closed').innerHTML=registration;
}