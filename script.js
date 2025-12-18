* {
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    margin: 0;
    background: linear-gradient(135deg, #dbeafe, #eff6ff);
    color: #1e3a8a;
}

/* PAGE */
.page {
    display: none;
    min-height: 100vh;
}

.page.active {
    display: block;
}

/* LOGIN */
.login-box {
    max-width: 400px;
    margin: 120px auto;
    background: white;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.login-box input {
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    border-radius: 10px;
    border: 1px solid #bfdbfe;
}

/* NAV */
nav {
    background: #bfdbfe;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* CONTENT */
.content {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

.card img {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 10px;
}

.edu {
    background: #e0f2fe;
    padding: 10px;
    border-radius: 12px;
    margin-top: 10px;
    font-size: 14px;
}

/* BUTTON */
button {
    padding: 10px 20px;
    background: #60a5fa;
    border: none;
    border-radius: 12px;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #3b82f6;
}
