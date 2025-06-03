:root {
    --primary: #8000ff;
    --primary-dark: #5c0099;
    --secondary: #f3e8ff;
    --text: #2c2c2c;
    --white: #fff;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    background: var(--secondary);
    color: var(--text);
}

header {
    background: var(--primary);
    color: var(--white);
    padding: 1.5rem 0;
    text-align: center;
    box-shadow: 0 2px 8px rgba(128,0,255,0.1);
}

header h1 {
    margin: 0;
    font-size: 2.4rem;
    letter-spacing: 2px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

nav a:hover {
    color: #d1b3ff;
}

main {
    padding: 2.5rem 1rem;
    max-width: 800px;
    margin: auto;
}

section {
    margin-bottom: 2.5rem;
    background: var(--white);
    border-radius: 12px;
    box-shadow: 0 1px 6px rgba(128,0,255,0.07);
    padding: 2rem;
}

h2 {
    color: var(--primary-dark);
    margin-top: 0;
}

.gallery {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.gallery img {
    border-radius: 10px;
    border: 2px solid var(--primary);
    width: 240px;
    height: 150px;
    object-fit: cover;
    transition: transform 0.2s, box-shadow 0.2s;
}

.gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(128,0,255,0.15);
}

form#contactForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

form input, form textarea {
    padding: 0.8rem;
    border: 1.5px solid var(--primary);
    border-radius: 8px;
    font-size: 1rem;
    background: #faf6ff;
    resize: none;
}

form input:focus, form textarea:focus {
    outline: none;
    border-color: var(--primary-dark);
}

button[type="submit"] {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
}

button[type="submit"]:hover {
    background: var(--primary-dark);
}

footer {
    text-align: center;
    padding: 1.2rem 0;
    background: var(--primary);
    color: var(--white);
    margin-top: 2rem;
    border-radius: 0 0 12px 12px;
}
