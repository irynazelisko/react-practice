export function Contacts() {
    return (
      <div className="info-content">
        <div className="side-title side-border">Contact</div>
        <div>
          <p className="top-line">Adress</p>
          <p className="bottom-line">Lviv,UA</p>
        </div>
        <div>
          <p className="top-line">Phone</p>
          <p className="bottom-line">+380962023410</p>
        </div>
        <div>
          <p className="top-line">E-mail</p>
          <a className="bottom-line content-links" href="https://mail.google.com/mail/u/0/#inbox">
            irazelisko@gmail.com
          </a>
        </div>
        <div>
          <p className="top-line">LinkedIn</p>
          <a className="bottom-line content-links" href="https://www.linkedin.com/in/iryna-zelisko-a96899225/">
            Iryna Zelisko
          </a>
        </div>
      </div>
    );
  }