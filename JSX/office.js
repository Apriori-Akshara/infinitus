const office=[
    {
        id:"1",
        src:"./Images/hospital.png",
        name:" Portsmouth, NH (U.S. Office)",
       Address:" Address",
       Address1:"1Harbour Pl, Suite 175",
       Address2:" Portsmouth, NH 03801",
       Address3:"United States",
       phone:"Phone",
       phoneNo:"1 888 HUBSPOT",

       src2:"./Images/hospital1.jpg",
       name:" Portsmouth, NH (U.S. Office)",
      Address:" Address",
      Address1:"1Harbour Pl, Suite 175",
      Address2:" Portsmouth, NH 03801",
      Address3:"United States",
      phone:"Phone",
      phoneNo:"1 888 HUBSPOT",



       
    },

    {
        id:"1",
        src:"./Images/hospital2.png",
        name:" Portsmouth, NH (U.S. Office)",
       Address:" Address",
       Address1:"1Harbour Pl, Suite 175",
       Address2:" Portsmouth, NH 03801",
       Address3:"United States",
       phone:"Phone",
       phoneNo:"1 888 HUBSPOT",

       src2:"./Images/hospital3.png",
       name:" Portsmouth, NH (U.S. Office)",
      Address:" Address",
      Address1:"1Harbour Pl, Suite 175",
      Address2:" Portsmouth, NH 03801",
      Address3:"United States",
      phone:"Phone",
      phoneNo:"1 888 HUBSPOT",



       
    },
    {
        id:"1",
        src:"./Images/hospital4.png",
        name:" Portsmouth, NH (U.S. Office)",
       Address:" Address",
       Address1:"1Harbour Pl, Suite 175",
       Address2:" Portsmouth, NH 03801",
       Address3:"United States",
       phone:"Phone",
       phoneNo:"1 888 HUBSPOT",

       src2:"./Images/hospital8.png",
       names:"New Delhi, NH (U.S. Office)",
      Addresss:" Address",
      Addresss1:"1Harbour Pl, Suite 176",
      Addresss2:" Portsmouth, NH 03901",
      Addresss3:"India",
      phones:"Phone",
      phoneNos:"1 887 HUBSPOT",



       
    },
    
    
    
]

const dataU=document.getElementById("offices");
office.map((item,index)=>(
    dataU.innerHTML += `
   
    <div class="row justify-content-around mt-5">
      
        <div class="col-md-5">
            <img src=${item.src} alt="" class="img-fluid">
        </div>
        <div class="col-md-5">
            <div class="row">
                <p class="parasame">
                   ${item.name}
                </p>
            </div>
            <div class="row">
                <p class="parasame">
                   ${item.Address}
                </p>
            </div>
            <div class="row">
                <p class="listpara">
                ${item.Address1}
                </p>
                <p  class="listpara">
                ${item.Address2}

                </p>
                <p  class="listpara">
                ${item.Address3}
                </p>
            </div>
            <div class="row">
                <p class="parasame">
                ${item.phone}
                </p>
            </div>
            <div class="row">
                <p  class="listpara">
                ${item.phoneNo}
                </p>
            </div>
        </div>
    </div>
    



    <div class="row justify-content-around mt-5">

        <div class="col-md-5">
            <div class="row">
                <p class="parasame">
                ${item.name}
                </p>
            </div>
            <div class="row">
                <p class="parasame">
                ${item.Address}
                </p>
            </div>
            <div class="row">
                <p class="listpara">
                ${item.Address1}
                </p>
                <p  class="listpara">
                ${item.Address2}

                </p>
                <p  class="listpara">
                ${item.Address3}
                </p>
            </div>
            <div class="row">
                <p class="parasame">
                ${item.phone}
                </p>
            </div>
            <div class="row">
                <p  class="listpara">
                ${item.phoneNo}
                </p>
            </div>
        </div>

        <div class="col-md-5">
            <img src=${item.src2} alt="" class="img-fluid">
        </div>
    </div>

      `
))