import CueCards from "./CueCards";
import FAQ from "./FAQ";

import FeatureFive from "./FeatureFive";
import FeatureFour from "./FeatureFour";
import FeatureOne from "./FeatureOne";
import FeatureThree from "./FeatureThree";
import IeltsAcceptingUniversities from "./IeltsAcceptingUniversities";
import IeltsCenters from "./IeltsCenters";
import IeltsCountries from "./IeltsCountries";
import Intro from "./Intro";


const IeltsSpeaking = () => {
    return (
        <div>
            <Intro></Intro>
            <FeatureOne></FeatureOne>
            <FeatureThree></FeatureThree>
            <FeatureFour></FeatureFour>
            <FeatureFive></FeatureFive>
            <IeltsAcceptingUniversities></IeltsAcceptingUniversities>
            <IeltsCountries></IeltsCountries>
            <CueCards></CueCards>
            <IeltsCenters></IeltsCenters>
            <FAQ></FAQ>
        </div>
    );
};

export default IeltsSpeaking;