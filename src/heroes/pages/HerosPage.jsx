import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/GetHeroById'

export const HerosPage = () => {

  const {id} = useParams()
  
  const hero = useMemo(()=>getHeroById(id), [id]) 
  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  if(!hero){
    return <Navigate to='/' />
  }



  return (
    <>
    
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={`/heroes/${id}.jpg`} 
            alt={hero.superhero} 
            className='img-thumbnail animate__animated animate__fadeInLeft'  
          />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
            <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
            <li className='list-group-item'><b>First appearance:</b> {hero.first_appearance}</li>
            <li className='list-group-item'><b>Characters:</b> {hero.characters}</li>
          </ul>

          <h5 className='mt-3'>Characters</h5>
          <p>{hero.characters}</p>

          <button onClick={onNavigateBack} className='btn btn-success'>
            Regresar
          </button>


        </div>
      </div>




    
    </>
  )
}
