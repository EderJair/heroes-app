import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {HeroCard} from '../components/HeroCard';
import queryString from 'query-string';
import { GetHeroByName } from '../helpers/GetHeroByName';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const {q = ''} = queryString.parse(location.search);

  const { searchText, onInputChange} = useForm({
    searchText: ''
  })

  const heroes = GetHeroByName(q)



  const onSearchSubmit = (e) => {
    e.preventDefault()
    if(searchText.trim().length <= 2) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }


  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form>
                <input 
                  type="text" 
                  placeholder='Search a Hero'
                  className='form-control'
                  name='searchText'
                  autoComplete='off'
                  value={searchText}
                  onChange={onInputChange}
                  />
                <button onClick={onSearchSubmit} className='btn btn-success mt-2'>Search</button>
            </form>
        </div>

        <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
              (q === '') && 
              <div className="alert alert-primary">
              Search a hero
              </div>
            }

            {
              (q !== '' && heroes.length === 0) && 
              <div className="alert alert-danger">
                There's no hero with <b>{q}</b>
              </div>
            }

            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
        </div>
      </div>

      
    </>
  )
}
