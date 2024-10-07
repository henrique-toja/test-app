import React from 'react';

const Login = () => {
  return (
    <section>
      <article>
        <h3>Entrar ou Cadastrar</h3>
        <p>Use uma das opções abaixo para entrar ou criar sua conta.</p>
      </article>

      <div className="btn-container">
        {/* Botão de login com Google */}
        <a href="dashboard" className="btn-auth">
          <button>
            <div className="btn-icon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span>Entrar com Google</span>
          </button>
        </a>

        {/* Botão de login com Microsoft */}
        <a href="dashboard" className="btn-auth">
          <button>
            <div className="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#F25022" d="M22 22H3V3h19v19z"></path>
                <path fill="#00A4EF" d="M45 22H26V3h19v19z"></path>
                <path fill="#7FBA00" d="M22 45H3V26h19v19z"></path>
                <path fill="#FFB900" d="M45 45H26V26h19v19z"></path>
              </svg>
            </div>
            <span>Entrar com Microsoft</span>
          </button>
        </a>

        {/* Botão de login com Apple */}
        <a href="dashboard" className="btn-auth">
          <button>
            <div className="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" className="icon" fill="currentColor" style={{ width: '24px', height: '24px', marginRight: '10px' }}>
                <path d="M13.5 12.4c-.3.7-.9 1.4-1.4 1.9-.4.4-.9.8-1.4 1-.4.1-.8.2-1.3.2-.5 0-.9-.1-1.3-.2-.4-.1-.9-.3-1.4-.3-.5 0-1 .2-1.4.3-.4.1-.9.2-1.3.2-.4 0-.9-.1-1.3-.2-.5-.2-.9-.6-1.4-1-.5-.5-1.1-1.2-1.4-1.9-.3-.7-.5-1.4-.5-2.1 0-.6.1-1.2.4-1.7.3-.5.7-1.1 1.3-1.4.5-.3 1.1-.5 1.7-.5.4 0 .8.1 1.3.3.4.2.8.3 1.3.3.4 0 .8-.1 1.3-.3.4-.2.8-.3 1.3-.3.6 0 1.2.1 1.7.5.5.3 1 .8 1.3 1.4.2.5.4 1.1.4 1.7 0 .7-.2 1.4-.5 2.1zm-4.7-9.7c-.1.4-.2.7-.4 1-.2.3-.5.6-.8.9-.3.2-.7.5-1 .6s-.8.2-1.3.2c-.1-.4 0-.8.1-1.2.1-.3.3-.7.6-.9.2-.3.5-.5.8-.6.3-.2.7-.2 1.1-.2.1.4.1.8.1 1.2zm0 0"></path>
              </svg>
            </div>
            <span>Entrar com Apple</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Login;