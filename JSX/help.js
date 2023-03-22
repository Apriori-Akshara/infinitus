const helpZ=[
    {
        id:"1",
        src:"./Images/partner.png",
        title1:"Academic Tutoring",
      title2:"At Infinitus, we believe that every child deserves the opportunity to reach their full academic potential.  ",
       
    },
    {
        id:"2",
        src:"./Images/individual.png",
        title1:"Weekend Clubs",
        title2:"Are you ready to unlock your child's potential and foster curiosity and innovation? Our weekend extracurricular clubs are the perfect way to do just that!",
      
    },
    
]

const datasA=document.getElementById("one");
helpZ.map((item,index)=>(
    datasA.innerHTML += `
    <div class="col-md-6 at767mt" id='onlyThis'>
    <div class="card shadow takeswh" id="mobileCard">
        <div class="row">
            <img src=${item.src} alt="partner" class="img-fluid imHw">
        </div>
        <div class="row text-center my-4" style="font-weight: bold;">
                 <h3><b>
             ${item.title1}
                 </h3></b>
        </div>
        <div class="row text-center justify-content-center mt-3 px-3">
        <div class="complements">
        <h4>
        ${item.title2}
        </h4>
        </div>
                  
        </div>
        <div class="row text-center mt-3">
         <img src="./Images/yelloarro.svg" alt="arrow" class="img-fluid arrowHw">
        </div>
    </div>
</div>
      `
))