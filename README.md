# 🍿 Snackflix — Your Mood. Your Snack. Your Blockbuster.

Snackflix is a quirky, AI-powered Bollywood movie generator that transforms your **mood**, **snack**, and a **character** into a full-blown cinematic experience — complete with a custom plot, cast, screenplay scene, and an AI-generated poster.

---

## 🚀 Live Demo

👉 [Try Snackflix Now]() *(replace with your actual link)*

---

## 🎥 What Snackflix Does

- Takes 3 creative inputs: mood, snack, and character
- Generates:
  - 🎬 Movie Title & Genre
  - 📖 Plot Summary
  - 👥 Cast & Role
  - 🍅 Rotten Tomatoes Score + Critic Quote
  - 🎞️ A Screenplay Scene
  - 🖼️ AI-Generated Poster (downloadable!)

---

## 💡 Inspiration

Late-night snacking, existential crises, and a love for over-the-top Bollywood storytelling inspired us to ask:  
**What if snacks and emotions could make movies?**  
Snackflix was our fun, AI-powered answer to that — where absurdity meets artistry.

---

## 🛠️ Tech Stack

| Tech            | Use                                        |
|-----------------|---------------------------------------------|
| **React**       | Frontend framework                         |
| **TypeScript**  | Type safety and maintainability            |
| **Tailwind CSS**| Modern, responsive UI styling              |
| **Google Gemini AI** | Text & image generation via API         |
| **Vite**        | Blazing-fast development & bundling        |

---

## 🧠 How It Works

1. User inputs mood, snack, and character.
2. A custom prompt is sent to **Gemini 2.5** to generate a movie concept in structured JSON.
3. Poster prompt is extracted and sent to **Gemini Image Preview** model.
4. Final result is shown in swipeable, scroll-friendly movie cards — and the poster is downloadable.

---

## 📸 Screenshots

![Alt Text](https://github.com/Aditi31kapil/snackflix/blob/main/Screenshot%202025-06-27%20201115.png)
![2nd image](https://github.com/Aditi31kapil/snackflix/blob/main/Screenshot%202025-06-27%20201331.png)
![3rd image](https://github.com/Aditi31kapil/snackflix/blob/main/Screenshot%202025-06-27%20201349.png)

---

## 🎯 Features

- 🔮 AI-generated movie plots with comedic/absurd tone
- 🎭 Custom character integration in plot, cast, and scene
- 🎨 Poster creation using image generation models
- 📲 Mobile-friendly swipeable card interface
- 📥 Poster download and share support

---

## 💥 Challenges

- Parsing AI output with unpredictable formatting (e.g. markdown-wrapped JSON)
- Prompt tuning to keep results structured but creative
- Handling long content without breaking the layout
- Ensuring smooth scroll and swipe UX across screen sizes

---

## 🏆 Accomplishments

- Built a complete AI movie generator in under X days *(fill in based on your timeline)*
- Seamless integration of Gemini text + image APIs
- Designed a fun, expressive, and functional UI

---

## 📚 What We Learned

- How to engineer prompts that yield valid JSON + creative results
- Handling multi-modal responses (text + image) from Gemini
- Designing scrollable/swipeable interfaces in React
- Balancing absurd humor with app reliability and structure

---

## 🔮 What's Next

- User accounts to save and revisit movie creations
- Voiceover trailer generation using text-to-speech
- More regional cinema themes (Tamil sci-fi? Telugu noir?)
- Share to social media directly from the app
- Public gallery of community-created movies

---

## 🧑‍💻 How to Run Locally

```bash
git clone https://github.com/yourusername/snackflix
cd snackflix
npm install
