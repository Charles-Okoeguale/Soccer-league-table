import Table from '../../components/Table'
import { individualStats } from '../../utils'


function Home() {
  return (
    <div className='App'>
      <Table Stats={individualStats}/>
    </div>
  )
}

export default Home;