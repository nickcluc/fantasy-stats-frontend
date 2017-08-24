import ActiveModelAdapter from 'active-model-adapter';
import ENV from '../config/environment';

// export default ActiveModelAdapter.extend();

export default ActiveModelAdapter.extend({
  host: ENV.API_URL
});
