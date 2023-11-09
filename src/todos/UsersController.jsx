import React from 'react';

// TODO - 2
// Import variabel users dari file users.js
import users from './users'



const UsersController = () => {
    async () => {
        console.log(await formatUser());
        console.log(await findByName()); 
        console.log(await filterByMajor());
    }
    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = async (dataUsers) => {
    try {
      const userNames = await dataUsers.map((user) => user.name);
      console.log(userNames);
    } catch (error) {
      console.error('Error formatting users:', error);
    }
  };
// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (name) => {
    try {
      const findByName = await users.find((user) => user.name === name);
      if (findByName) {
        console.log('Found user:', findByName);
      } else {
        console.log('User not found.');
      }
    } catch (error) {
      console.error('Error finding user:', error);
    }
  };
  

// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (major) => {
    try {
      const filterByMajor = await users.filter((user) => user.major === major);
      if (filterByMajor.length > 0) {
        console.log('Users with major', major, ':', filterByMajor);
      } else {
        console.log('No users found with major', major);
      }
    } catch (error) {
      console.error('Error filtering users by major:', error);
    }
  };
  

export default UsersController;
