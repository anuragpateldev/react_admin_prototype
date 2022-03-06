import React from 'react';
import {Table} from 'react-bootstrap';

const ManageUsersTable = () =>{
    return (
        <div className='InnerPage__wrapper_Row'>
            <div className='InnerPage__wrapper_Row_title'>
                <h2>Manage React js</h2>
            </div>
            <div className='InnerPage__wrapper_Row_body'>
                <Table className='React__table'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ManageUsersTable;