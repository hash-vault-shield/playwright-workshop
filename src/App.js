import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleLogin = () => {
    if (email === "test@example.com" && password === "password") {
      setMessage("Успешный вход!");
    } else {
      setMessage("Неверные данные!");
    }
  };

  return (
    <div className="app">
      <h1>Playwright Demo</h1>

      {/* Форма логина */}
      <div>
        <input
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password-input"
        />
        <button onClick={handleLogin} data-testid="login-button">
          Войти
        </button>
        <p data-testid="login-message">{message}</p>
      </div>

      {/* Счётчик */}
      <div>
        <h2 data-testid="count-value">{count}</h2>
        <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
          +1
        </button>
        <button onClick={() => setCount(count - 1)} data-testid="decrement-btn">
          -1
        </button>
      </div>
    </div>
  );
}
