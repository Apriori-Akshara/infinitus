const slider1 = [
  {
    id: "1",

    title2:
      "Our mission is to provide children with an enriching and gratifying learning experience. Our comprehensive programs are meticulously designed to improve academic performance, foster creativity, and cultivate holistic life skills.",
  },
  {
    id: "2",

    title2:
      "We are passionate about empowering children to reach their full potential by bringing out their unique talents, strengthening their sense of self, and providing personalised tutoring services that cater to each child's individual needs. Our weekend clubs are specially crafted to offer children an enjoyable and engaging platform to explore their interests and passions. ",
  },
  {
    id: "3",

    title2:
      "Furthermore, our language programs are an excellent opportunity for children to gain proficiency in a variety of languages, including German, Spanish, and French. Our highly skilled teachers provide engaging and interactive lessons that make the language learning experience fun and exciting.",
  },
  {
    id: "4",

    title2:
      "We also believe in challenging our students to reach their full potential. That's why we offer Olympiad training programs for various subjects. Our experienced coaches provide rigorous training, preparing students for national and international competitions.",
  },
];

const data3 = document.getElementById("four");
slider1.map(
  (item, index) =>
    (data3.innerHTML += `

    <div class="item at709Hdec">
    <div class="row p-5 mt-5 justify-content-center"
    style="background-color:#ffd300;height: 640px;"
    >
        <div class=" col-sm-8 arroSet">
         <div class="row text-center">
            <p class="fontSiz1 mt-lg-5"
            style="font-size:x-large;font-weight: 500; line-height: 43px; height:300px;"
            >
            ${item.title2}

            </p>
            </div> <br> <br>
         <div class="row text-center">
              <button class="btn takes11 d-none d-sm-block">
              Join Now <img src="./Images/arro.svg" alt="arrow" class="img-fluid fixhwjsd">
              </button>
         </div>
        </div>
    </div>
        
    </div>

    
      `)
);
