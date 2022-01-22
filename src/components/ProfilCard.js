import React from 'react'
import '../css/profilecard.scss'

const ProfileCard = ({ user }) => {

  const calculateExperience = (month) => {
    let y = month / 12
    let m = month % 12
    return `${parseInt(y)}Y ${m}M`
  }

  return (
    <div className="profile__card">
      <div className="profile__card__img">
        <img src={user.user_image_url} alt={user.jobseeker_name} />
      </div>
      <div className="profile__card__content">
        <div className='profile__card__title'>
          <div className='name'>{user.jobseeker_name} </div>
          <div>|</div>
          <div className='location'>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>{user.area}, {user.city}</span>
          </div>
        </div>  

        <div className='profile__item'>
          <div>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            <span>Experiance</span>
          </div>
          <div className='chip'>{calculateExperience(user.total_months_exp)}</div>
        </div>
        <div className='experience'>
          {user.user_experiences.map((doc, i) => <div key={i} className='experience__item'>
            <div className='user__post'>
              <div>{doc.user_post}</div>
              <div className='chip'>{doc.experience_type}</div>
            </div>
            <div className='company__name'>
              <i className="fa fa-building-o" aria-hidden="true"></i>
              <span>{doc.company_name}</span>
            </div>
            <div className='date'>
              <div className='date1'>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                {doc.company_starting_date} - {doc.company_ending_date}
              </div>
              <div>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>{doc.company_location}</span>
              </div>
            </div>
            <div className='role__desc'>{doc.role_discription}</div>
          </div>)}
        </div>
        <div className='profile__item'>
          <div>
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <span>education</span>
          </div>
        </div>
        <div className='experience'>
          {user.user_qualifications.map((doc, i) => <div key={i} className='college__item'>
            <div>{doc.course_abbreviation} - {doc.course_name}</div>
            <div className='college'>{doc.user_college} - {doc.user_passing_year}</div>
          </div>)}
        </div>
      </div>
    </div> 
  )
}
 
export default ProfileCard;