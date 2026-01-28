"use client"

import DreamHunterLayer from "./DreamHunterLayer"
import MaisonLayer from "./MaisonLayer"
import WellhausLayer from "./WellhausLayer"

export default function EcosystemSection() {
    return (
        <div id="ecosystem" className="w-full flex flex-col">
            <DreamHunterLayer />
            <MaisonLayer />
            <WellhausLayer />
        </div>
    )
}
