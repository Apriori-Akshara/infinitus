
const events=[
    {
        id:"1",
        title1:"29 MAY, 2021",
        title2:"PANEL DISCUSSION",
        title3:"OPPORTUNITIES FOR WOMEN IN TECH",
        title4:"This virtual discussion seeks to talk about gender inequality in technological fields through the expertise of three panelists, and gaining insight into their journeys, experiences, and advice. We seek to allow young women to delve into the workings of a male-dominated field and encourage them to begin their own journey into technology. The discussion invites panelists Ms. Lipika Ramaswamy [data scientist], Ms. Payal Lal [entrepreneur], and Ms. Tanvi Puri [bioinformatician]."
    },
    {
        id:"2",
        title1:"05 JUNE, 2021",
        title2:"COLLEGE FAIR",
        title3:"OPPORTUNITIES FOR WOMEN IN TECH",
        title4:"girls.exe was invited at College Fair 2021 organized by Edbrand where hundreds of students from around the world had the opportunity to meet college admission officers, directors of international pre college programs, STEM and humanities mentors etc. girls.exe had the opportunity to meet young girls from various backgrounds interested in science and technology and interact with them. "
    },
]


const soil1=document.getElementById("land1");
events.map((item,index)=>(
    soil1.innerHTML += `
    <div class="col-lg-5">
    <div class="row date"
    style="border-bottom:2px solid  #5d4251;padding: 30px 0px;"
    >
      <span>
          ${item.title1}
      </span>
    </div>
    <div class="row mt-5 panel">
      <h3>
      ${item.title2}
      </h3>
    </div>
    <div class="row topic">
      <p>
          TOPIC : <span>
          ${item.title3}
                 </span>
      </p>
     
    </div>
    <div class="row blo">
<blockquote>
${item.title4}
</blockquote>
    </div>

    
  </div>
      `
))

