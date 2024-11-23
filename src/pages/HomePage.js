import React from 'react'
import TileContainer from '../components/TileContainer'
import ButtonToggle from '../components/ButtonToggle'
import Data from '../components/Data'
import VerticalStack from '../components/VerticalStackedDivs'
export default function HomePage() {
    return (
        <div >
            <ButtonToggle />
            <VerticalStack />
            <TileContainer />
            <Data />
        </div>
    )
}
