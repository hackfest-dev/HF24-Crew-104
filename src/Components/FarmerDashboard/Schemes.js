import NavbarFarmer from "./NavbarFarmer";
import Footer from "../footer/Footer";
import "./Schemes.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Schemes = () => {
  const footerBackgroundColor = "#1c4c1e";

  return (
    <div>
      <div>
        <NavbarFarmer />
      </div>
      <div className="schemes-with-background">
        <div className="s-container saira-extra-condensed-regular">
          <div className="section section-1">
            <h1>
              <a
                href="https://pmkisan.gov.in/"
                target="_blank"
                rel="noreferrer"
              >
                PM KISAN SCHEME
              </a>
            </h1>
            <ul>
              <li>
                PM Kisan is a Central Sector scheme with 100% funding from the
                Government of India.
              </li>
              <li>
                It became operational from December 1st, 2018 (1.12.2018).
              </li>
              <li>
                The scheme provides an income support of ₹6,000 per year to all
                landholding farmer families.
              </li>
              <li>
                The annual support amount is divided into three equal
                installments and transferred directly to the beneficiaries' bank
                accounts.
              </li>
              <li>
                State Governments and UT administrations are responsible for
                identifying eligible farmer families based on the scheme's
                guidelines.
              </li>
              <li>
                The financial support is directly transferred to the bank
                accounts of beneficiaries, ensuring transparency and eliminating
                intermediaries.
              </li>
            </ul>
          </div>
          <div className="section section-2">
            <h1>
              <a
                href="https://kisansuvidha.gov.in/"
                target="_blank"
                rel="noreferrer"
              >
                KISAN SUVIDHA
              </a>
            </h1>
            <ul>
              <li>Kisan Suvidha is a Smart App for farmers.</li>
              <li>It is an initiative by National Informatics Centre.</li>
              <li>
                All services/information relevant to farmers are linked here as
                a common platform.
              </li>
              <li>
                It will include various schemes and service of the Central and
                State Governments for Farmers.
              </li>
            </ul>
          </div>
          <div className="section section-3">
            <h1>
              <a
                href="https://icar.org.in/krishi-vigyan-kendras"
                target="_blank"
                rel="noreferrer"
              >
                KRISHI VIGYAN KENDRAS
              </a>
            </h1>
            <ul>
              <li>
                A Krishi Vigyan Kendra is an agricultural extension center in
                India. .
              </li>
              <li>
                The centres are associated with a local agricultural university,
                and serve as links between the Indian Council of Agricultural
                Research and farmers to apply agricultural research in a
                practical, localized setting.
              </li>
              <li>
                All KVKs fall under the jurisdiction of one of the 11
                Agricultural Technology Application Research Institutes (ATARIs)
                throughout India.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Footer backgroundColor={footerBackgroundColor} />
      </div>
    </div>
  );
};

export default Schemes;
