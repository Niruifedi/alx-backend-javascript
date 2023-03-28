/* eslint-disable require-jsdoc */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const obj = new ClassRoom(19);
  const obj1 = new ClassRoom(20);
  const obj2 = new ClassRoom(34);
  return [obj, obj1, obj2];
}
