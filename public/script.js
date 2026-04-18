// // 💖 Typing effect


// // 💖 Typing effect
// const text = "Hello, I'm Palak 💖";
// let i = 0;

// function typing() {
//   if (i < text.length) {
//     document.getElementById("typing").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typing, 80);
//   }
// }

// typing();
// const text = "Hello, I'm [Your Name] 💖";
// let i = 0;

// function typing() {
//   if (i < text.length) {
//     document.getElementById("typing").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typing, 80);
//   }
// }
// typing();


// // 🌈 Cursor movement + color change
// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.clientX + "px";
//   cursor.style.top = e.clientY + "px";

//   // pastel random color
//   const r = Math.floor(Math.random() * 100 + 155);
//   const g = Math.floor(Math.random() * 100 + 155);
//   const b = Math.floor(Math.random() * 100 + 155);

//   cursor.style.background = `rgb(${r}, ${g}, ${b})`;
// });
// const heartsContainer = document.querySelector(".hearts");

// function createHeart() {
//   const heart = document.createElement("div");
//   heart.classList.add("heart");

//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
//   heart.style.background = `hsl(${Math.random() * 20 + 330}, 100%, 80%)`;

//   heartsContainer.appendChild(heart);

//   setTimeout(() => {
//     heart.remove();
//   }, 6000);
// }

// // create hearts continuously
// setInterval(createHeart, 300);




// const express = require("express");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // ✅ THIS LINE IS IMPORTANT
// app.use(express.static(path.join(__dirname, "public")));

// app.listen(PORT, () => {
//   console.log("Server running at http://localhost:3000");
// });



// // Contact form (fake submit)
// const form = document.getElementById("contactForm");
// const msg = document.getElementById("successMsg");

// form.addEventListener("submit", function(e) {
//   e.preventDefault(); // stop page reload

//   msg.textContent = "💖 Message sent successfully!";
//   form.reset();
// });


// const form = document.getElementById("contactForm");
// const msg = document.getElementById("successMsg");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const formData = {
//     name: form.name.value,
//     email: form.email.value,
//     message: form.message.value
//   };

//   try {
//     const res = await fetch("/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     });

//     const data = await res.text();
//     msg.textContent = data;
//     form.reset();

//   } catch (err) {
//     msg.textContent = "❌ Error sending message";
//   }
// }); 











// 💖 Typing effect
const text = "Hello, I'm Palak💖";
let i = 0;

function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();


// 💕 Floating hearts
const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}


// 💌 Contact form
const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch("/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.text();
      msg.textContent = data;
      form.reset();

    } catch (err) {
      msg.textContent = "❌ Error sending message";
    }
  });
}





// 💖 Cursor movement
const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // pastel color change
    const r = Math.floor(Math.random() * 100 + 155);
    const g = Math.floor(Math.random() * 100 + 155);
    const b = Math.floor(Math.random() * 100 + 155);

    cursor.style.background = `rgb(${r}, ${g}, ${b})`;
  });
}