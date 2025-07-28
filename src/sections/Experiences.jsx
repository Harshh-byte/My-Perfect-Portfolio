import { Timeline } from '../components/Timeline'
import { capabilities } from '../constants'

const Experiences = () => {
    return (
        <div className='w-full'>
            <Timeline data={capabilities} />
        </div>
    )
}

export default Experiences