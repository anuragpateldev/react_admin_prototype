import React from 'react';
import './AddUserForm.css';

const AddUserForm = () =>{
    return (
            <div className='InnerPage__wrapper_Row'>
                <div className='InnerPage__wrapper_Row_title'>
                    <h2>Create User</h2>
                </div>
                <div className='InnerPage__wrapper_Row_body'>
                    <form>
                        
                        <div className='User_input_wrapper'>
                            <label>Full Name</label>
                            <input type="text" className='input_field' placeholder='Full name..'/>
                        </div>

                        <div className='User_input_wrapper'>
                            <label>Email</label>
                            <input type="text" className='input_field' placeholder='Email..'/>
                        </div>

                        <div className='User_input_wrapper'>
                            <label>Password</label>
                            <input type="text" className='input_field' placeholder='Password..'/>
                        </div>

                        <div className='User_input_wrapper'>
                            <label>City</label>
                            <select className='input_field'>
                                <option value="1">Bhopal</option>
                                <option value="2">Indore</option>
                                <option value="3">Delhi</option>
                                <option value="4">Mumbai</option>
                            </select>
                        </div>
                        <div className='User_input_wrapper'>
                            <label>Address</label>
                            <textarea className='input_field_textarea'></textarea>
                        </div>
                        <div className='User_input_wrapper'>
                            <input type="submit" value="submit" className='User__input_btn'/>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default AddUserForm;