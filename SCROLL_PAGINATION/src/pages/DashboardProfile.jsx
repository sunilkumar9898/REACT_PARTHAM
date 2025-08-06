
import withLogin from '../HOC/withLogin'
import Dashboard from './Dashboard'


const WithLoging = withLogin(Dashboard)
const DashboardProfile = () => {


  return (
      <div>
          <WithLoging islogIn={false} ></WithLoging>
      </div>
  );
}

export default DashboardProfile
