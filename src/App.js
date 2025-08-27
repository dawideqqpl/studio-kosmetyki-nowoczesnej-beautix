import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="BEAUTIX Logo" />
            <span>BEAUTIX</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Strona główna</a></li>
            <li><a href="#about">O nas</a></li>
            <li><a href="#services">Usługi</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Studio Kosmetyki Nowoczesnej BEAUTIX</h1>
          <p className="hero-subtitle">Profesjonalne usługi kosmetyczne w sercu Katowic</p>
          <div className="hero-buttons">
            <button className="btn-primary">Umów wizytę</button>
            <button className="btn-secondary">Zobacz usługi</button>
          </div>
        </div>
        <div className="hero-image">
          {/* TODO: Wstaw tutaj obrazek lub galerię */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>O nas</h2>
            <p>Profesjonalizm i jakość w każdym detalu</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Studio Kosmetyki Nowoczesnej BEAUTIX</h3>
              <p>
                Jesteśmy profesjonalnym salonem kosmetycznym specjalizującym się w pielęgnacji paznokci. 
                Oferujemy szeroki wachlarz usług dla kobiet i mężczyzn w nowoczesnym, przytulnym wnętrzu.
              </p>
              <p>
                Nasz zespół wykwalifikowanych specjalistów zapewnia najwyższą jakość usług, 
                używając profesjonalnych produktów i najnowszych technik.
              </p>
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">✨</div>
                  <h4>Profesjonalizm</h4>
                  <p>Wykwalifikowany zespół specjalistów</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎨</div>
                  <h4>Kreatywność</h4>
                  <p>Unikalne wzory i zdobienia</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">💎</div>
                  <h4>Jakość</h4>
                  <p>Najlepsze produkty i materiały</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              {/* TODO: Wstaw tutaj obrazek studia */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Nasze Usługi</h2>
            <p>Kompleksowa pielęgnacja paznokci dla każdego</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💅</div>
              <h3>Manicure</h3>
              <ul>
                <li>Manicure klasyczny</li>
                <li>Manicure hybrydowy</li>
                <li>Manicure kombinowany</li>
                <li>Manicure dla mężczyzn</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🦶</div>
              <h3>Pedicure</h3>
              <ul>
                <li>Pedicure klasyczny</li>
                <li>Pedicure dla mężczyzn</li>
                <li>Manicure i pedicure</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Paznokcie żelowe</h3>
              <ul>
                <li>Paznokcie żelowe</li>
                <li>Żelowe przedłużanie paznokci</li>
                <li>Zdobienie paznokci</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💎</div>
              <h3>Przedłużanie</h3>
              <ul>
                <li>Paznokcie akrylowe</li>
                <li>Paznokcie tytanowe</li>
                <li>Przedłużanie paznokci</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Stylizacja</h3>
              <ul>
                <li>Malowanie paznokci</li>
                <li>Zdobienie paznokci</li>
                <li>Wzory artystyczne</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Kontakt</h2>
            <p>Skontaktuj się z nami i umów wizytę</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Adres</h4>
                  <p>Ligocka 80<br/>40-569 Katowice</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Telefon</h4>
                  <p>32 203 58 65</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4>Godziny otwarcia</h4>
                  <div className="hours">
                    <div className="hour-item">
                      <span>Poniedziałek - Piątek</span>
                      <span>10:00 - 18:00</span>
                    </div>
                    <div className="hour-item">
                      <span>Sobota</span>
                      <span>08:00 - 13:00</span>
                    </div>
                    <div className="hour-item">
                      <span>Niedziela</span>
                      <span>Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Umów wizytę</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Imię i nazwisko" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Numer telefonu" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Adres email" />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Wybierz usługę</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="zelowe">Paznokcie żelowe</option>
                    <option value="akrylowe">Paznokcie akrylowe</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Dodatkowe informacje" rows="4"></textarea>
                </div>
                <button type="submit" className="btn-primary">Wyślij zapytanie</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo.png" alt="BEAUTIX Logo" />
              <span>BEAUTIX</span>
            </div>
            <p>&copy; 2024 Studio Kosmetyki Nowoczesnej BEAUTIX. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;