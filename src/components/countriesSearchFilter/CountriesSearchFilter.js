import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import BackButton from '../BackButton';
import styles from './CountriesSearchFilter.module.css';
import CountryListItem from './CountryListItem';

const url = 'https://restcountries.com/v3.1/all';

function CountriesSearchFilter() {
    const {state: countries} = useFetch(url);
    const [inputSearch, setInputSearch] = useState('');
    const [foundCountries, setFoundCountries] = useState([]);

    const isSearchFullfield = (search, country, searchLength) => {
        if (search.toLowerCase() === country.slice(0, searchLength).toLowerCase()){
            return true;
        }

        return false;
    }

    const createMatchedPart = (search, country, countryLength) => {
        const result = {};

        result.match = search;
        result.otherPart = country.slice(countryLength);
        result.name = country;

        return result;
    }

    const findCountries = (inputSearch, inputLength) => {
        return countries
            .map(country => country.name.common)
            .filter(country => isSearchFullfield(inputSearch, country, inputLength))
            .map(country => {
                const result = createMatchedPart(inputSearch, country, inputLength);
                
                return result;
            });
    }

    const onChangeInputSearchForCountries = (e) => {
        const inputSearch = e.target.value;
        const inputLength = inputSearch.length;
        setFoundCountries(findCountries(inputSearch, inputLength))
        setInputSearch(inputSearch);
    }

    return (
        <>
            <BackButton/>
            <section className={styles.countriesSearchFilter}>
                <h1 className={styles.title}>Countries Search Filter</h1>
                <form className={styles.searchForm}>
                    <label htmlFor="countriesSearchInput">Search: </label>
                    <input type="text" placeholder="Country name..."className={styles.countriesSearchInput} onChange={onChangeInputSearchForCountries} value={inputSearch}/>
                </form>
                <h3 className={styles.titleResults}>Results:</h3>
                <ul className={styles.countriesList}>
                    {inputSearch && foundCountries.length > 0
                        ?         
                            <>
                                {foundCountries.map(country => <CountryListItem key= {country.name} country={country}/>)}
                            </>
                        :
                            <>
                                { inputSearch.length > 0 ?
                                    <li key="noResult" className={styles.countryListItem}>
                                        Not Found!
                                    </li>
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