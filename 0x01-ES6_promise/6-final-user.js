import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userName = signUpUser(firstName, lastName);
  const userPic = uploadPhoto(fileName);

  return Promise.allSettled([userName, userPic]).then((vals) => {
    const arr = [];
    vals.forEach((val) => {
      if (val.status === 'fulfilled') {
        arr.push({
          status: val.status,
          value: val.value,
        });
      } else {
        arr.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return arr;
  });
}
