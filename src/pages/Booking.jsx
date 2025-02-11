import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCalendar, faScissors, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import './Booking.css';

export default function Booking() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className='container6'>
        
     
     
      <div className="validation-container6">
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="title">
        <h2>Appointment</h2>
      </div>

          <div className="input-field">
            <p><FontAwesomeIcon icon={faUser} /> Fullname</p>
            <input type='text'
              {
              ...register('fullname', {
                required: 'Your fullname is required'
              })
              }>
            </input>
            <div className="error-div">
              {errors.fullname && <span> {errors.fullname.message} </span>}
            </div>
          </div>

         
          <div className="input-field">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email Address</p>
            <input type='email'
              {
              ...register('email', {
                required: 'Your Email is required',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Invalid email address'
                }
              })
              }>
            </input>
            <div className="error-div">
              {errors.email && <span> {errors.email.message} </span>}
            </div>
          </div>

          
          <div className="input-field">
            <p><FontAwesomeIcon icon={faCalendar} /> Age</p>
            <input type='number'
              {
              ...register('age', {
                required: 'Your age is required',
                min: {
                  value: 18,
                  message: 'You are a minor'
                }
              })
              }>
            </input>
            <div className="error-div">
              {errors.age && <span>{errors.age.message}</span>}
            </div>
          </div>

         
          <div className="input-field">
            <p><FontAwesomeIcon icon={faVenusMars} /> Gender</p>
            <div className="sub-field">
              <input type='radio' value='Male' id='male' {...register('gender', { required: 'Your gender is required' })} />
              <label htmlFor='male'>Male</label>

              <input type='radio' value='Female' id='female' {...register('gender', { required: 'Your gender is required' })} />
              <label htmlFor='female'>Female</label>
            </div>
            <div className="error-div">
              {errors.gender && <span>{errors.gender.message}</span>}
            </div>
          </div>

          
          <div className="input-field">
            <p><FontAwesomeIcon icon={faScissors} /> Service Type</p>
            <select {...register('role', { required: 'Select your role' })}>
              <option value=''>Select your Service Type</option>
              <option value='Haircut'>Haircut</option>
              <option value='Hairremove'>Hair removal</option>
              <option value='Skin'>Skin and hair analysis</option>
              <option value='Well'>Wellness and spa treatments</option>
              <option value='Makeup'>Makeup applications</option>
            </select>
            <div className="error-div">
              {errors.role && <span>{errors.role.message}</span>}
            </div>
          </div>

          
          <div className="button-field">
            <button type='submit'>Confirm</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
