import styles from "./CountriesSearchFilter.module.css";

function CountryListItem({country}) {
    return (
        <>
            <li className={styles.countryListItem}>
                <span className={styles.match}>{country.match}</span>{country.otherPart}
            </li>  
        </>
    );
}

export default CountryListItem;