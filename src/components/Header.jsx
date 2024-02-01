// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedPrayer, setSelectedPrayer] = useState("");
  const navigate = useNavigate();

  const handlePrayerChange = (event) => {
    const selectedPrayer = event.target.value;
    setSelectedPrayer(selectedPrayer);

    document.getElementById(
      "selectedPrayerDisplay"
    ).innerHTML = `<h1 class="prayer-title">${selectedPrayer}</h1>`;

    console.log(`Sholat yang dipilih: ${selectedPrayer}`);

    // Navigasi manual ke halaman terkait dengan sholat yang dipilih
    if (selectedPrayer) {
      navigate(selectedPrayer);
    }
  };

  return (
    <div>
      <nav>
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand">
            <h3>AstraApp</h3>
          </NavLink>
          <ul>
            <li>
              <NavLink to={"/"} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} exact>
                About
              </NavLink>
            </li>
            <li>
              <select
                id="prayerSelector"
                onChange={handlePrayerChange}
                value={selectedPrayer}
              >
                <option value="" disabled hidden>
                  Sholat
                </option>
                <option value="subuh">Subuh</option>
                <option value="dzuhur">Dzuhur</option>
                <option value="ashar">Ashar</option>
                <option value="maghrib">Maghrib</option>
                <option value="isya">Isya</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <div id="selectedPrayerDisplay"></div>
    </div>
  );
};

export default Header;
