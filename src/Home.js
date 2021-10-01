import Assignments from './Assignments'
import Footer from './Components/Footer'

import SearchAppBar from './Components/SearchAppBar'

export default function Home() {
    return (
    <div class="App">
        <div class="Header">
            <SearchAppBar />
        </div>
        <Assignments />
        <Footer position="relative"/>
    </div>
    )
}