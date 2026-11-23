const themeCreated = new Date(2026, 3, 30);

const newStyles = 145;
let themeTraits = [["v3.0.0", true], `${newStyles}+ new styles!`];

let creatorInfo = {
   name: "Aiden",
   userOnline: true,
   superstitionsRating: 5
};

const button = document.querySelector("button");
button.addEventListener("click", e => {
   const buttonFront = e.target.closest("button");
   const timeout = setTimeout(() => {
      // Finish HTML first
   }, 200);
});