import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import BackButton from '../BackButton';
import styles from './CountriesSearchFilter.module.css';

const url = 'https://restcountries.com/v3.1/all';

function CountriesSearchFilter() {
    const {state: countries} = useFetch(url);
    const [inputSearch, setInputSearch] = useState('');
    const [foundCountries, setFoundCountries] = useState([]);

    const isSearchFullfield = (search, country) => {
        const searchLength = search.length;
        if (search.toLowerCase() === country.slice(0, searchLength).toLowerCase()){
            return true;
        }

        return false;
    }

    const createMatchedPart = (search, country) => {
        const result = {};
        const countryLength = search.length;

        result.match = country.slice(0, countryLength);
        result.otherPart = country.slice(countryLength);
        result.name = country;

        return result;
    }

    const searchForCountries = (e) => {
        const inputSearch = e.target.value;
        setFoundCountries(countries
            .map(country => country.name.common)
            .filter(country => isSearchFullfield(inputSearch, country))
            .map(country => {
                const result = createMatchedPart(inputSearch, country);
                
                return result;
            })
        );
        setInputSearch(inputSearch);

    }

    return (
        <>
            <BackButton/>
            <section className={styles.countriesSearchFilter}>
                <h1 className={styles.title}>Countries Search Filter</h1>
                <form className={styles.searchForm}>
                    <label htmlFor="countriesSearchInput">Search: </label>
                    <input type="text" placeholder="Country name..."className={styles.countriesSearchInput} onChange={searchForCountries} value={inputSearch}/>
                </form>
                <h3 className={styles.titleResults}>Results:</h3>
                <ul className={styles.countriesList}>
                    {inputSearch && foundCountries.length > 0
                        ?         
                            <>
                                {foundCountries.map(country => <li key={country.name} className={styles.countryListItem}><span className={styles.match}>{country.match}</span>{country.otherPart}</li>)}
                            </>
                        :
                            <>
                                { inputSearch.length > 0 ?
                                        <li key="noResult" className={styles.countryListItem}>Not Found!</li>
                                        :
                                        ''
                                }
                            </>
                        }
                </ul>
            </section>
        </>
    );
}

export default CountriesSearchFilter;