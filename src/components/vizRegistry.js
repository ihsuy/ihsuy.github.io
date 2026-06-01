import { lazy } from 'react';

const TrainByReconnectDemo = lazy(() => import('./TrainByReconnectDemo'));

const registry = {
  TrainByReconnectDemo,
};

export default registry;
