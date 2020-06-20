import React from 'react';
import TaskManager from './dashboard/TaskManager';
import storeManager from '../utils/StoreManager';

export default function Home() {
  return <TaskManager storeManager={storeManager}/>;
}
