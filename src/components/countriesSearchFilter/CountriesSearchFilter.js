import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './CountriesSearchFilter.module.css';

const url = 'https://restcountries.com/v3.1/all';

function CountriesSearchFilter() {
    const {state: countries} = useFetch(url);
    const [inputSearch, setInputSearch] = useState('');
    const [foundCountries, setFoundCountries] = useState([]);

    const isSearchFullfield = (search, country) => {
        const searchLength = search.length;
        if (search === country.slice(0, searchLength)){
            return true;
        }

        return false;
    }
    const searchForCountries = (e) => {
        const inputSearch = e.target.value;
        setFoundCountries(countries
            .map(country => country.name.common)
            .filter(country => isSearchFullfield(inputSearch, country)));
        setInputSearch(inputSearch);

    }

    return (
        <>
            <section className={styles.countriesSearchFilter}>
            <form>
                <label htmlFor="countriesSearchInput">Search: </label>
                <input type="text" className={styles.countriesSearchInput} onChange={searchForCountries} value={inputSearch}/>
            </form>

            {inputSearch ? 
                <ul className={styles.countriesList}>
                    {foundCountries.map(country => <li key={country} className={styles.countryListItem}>{country}</li>)}
                    {/* { countries.map(country => <li key={country.name.common} className={styles.countryListItem}>{country.name.common}</li>) } */}
                </ul>
            :
            'L O A D I N G . . .'}
            </section>
        </>
    );
}

export default CountriesSearchFilter;