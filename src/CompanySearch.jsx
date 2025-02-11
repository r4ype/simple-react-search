import { ArrowDownIcon, ArrowUpIcon, CalendarIcon } from "lucide-react";
import styles from "./CompanySearch.module.css";
import { useState } from "react";

const companiesData = [
  {
    id: 1,
    name: "Applle",
    logo: "A",
    balance: 5000,
    date: "Feb 11, 2025",
    price: 1234.56,
  },
  {
    id: 2,
    name: "Bastani Mihan",
    logo: "B",
    balance: 7500,
    date: "Feb 12, 2025",
    price: 2345.67,
  },
  {
    id: 3,
    name: "Sharif Univer",
    logo: "S",
    balance: 3000,
    date: "Feb 13, 2025",
    price: 987.65,
  },
  {
    id: 4,
    name: "Shirz",
    logo: "S",
    balance: 6200,
    date: "Feb 14, 2025",
    price: 1765.43,
  },
];

export default function CompanySearch() {
  const [searched, setSearched] = useState("");

  return (
    <div className={styles.companySearch}>
      <Search searched={searched} setSearched={setSearched} />
      <CardList searched={searched} />
    </div>
  );
}

function Search({ searched, setSearched }) {
  return (
    <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        placeholder="Search for a company"
      />
    </form>
  );
}

function CardList({ searched }) {
  const filteredCompanies = companiesData.filter((company) =>
    company.name.toLowerCase().includes(searched.toLowerCase()),
  );

  return (
    <div className={styles.cardList}>
      {filteredCompanies.map((company) => (
        <Card key={company.id} company={company} />
      ))}
    </div>
  );
}

function Card({ company }) {
  return (
    <div className={styles.companyCard}>
      {/* header */}
      <div className={styles.header}>
        <div className={styles.logo}>{company.logo}</div>
        <h2 className={styles.name}>{company.name}</h2>
      </div>

      {/* main */}
      <div className={styles.content}>
        <div className={styles.balanceRow}>
          <p className={styles.label}>Balance</p>
          <p className={styles.balance}>${company.balance.toFixed(2)}</p>
        </div>
        <div className={styles.dateRow}>
          <div className={styles.dateContainer}>
            <CalendarIcon className={styles.calendarIcon} />
            <p className={styles.date}>{company.date}</p>
          </div>
          <p className={styles.price}>${company.price.toFixed(2)}</p>
        </div>
      </div>

      {/* fotter */}
      <div className={styles.footer}>
        <button className={`${styles.button} ${styles.increaseButton}`}>
          <ArrowUpIcon className={styles.buttonIcon} />5
        </button>
        <button className={`${styles.button} ${styles.decreaseButton}`}>
          <ArrowDownIcon className={styles.buttonIcon} />3
        </button>
      </div>
    </div>
  );
}
