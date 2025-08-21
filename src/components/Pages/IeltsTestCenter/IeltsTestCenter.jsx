import FAQ from "./FAQ";
import FeatureFive from "./FeatureFive";
import FeatureFour from "./FeatureFour";
import FeatureSix from "./FeatureSix";
import FeatureThree from "./FeatureThree";
import IeltsCenterDetails from "./IeltsCenterdetails";
import IeltsDateAndCenter from "./IeltsDateAndCenter";
import IeltsInfoGrid from "./IeltsInfoGrid";
import Intro from "./Intro";


const IeltsTestCenter = () => {
    return (
        <div>
            <Intro></Intro>
            <IeltsDateAndCenter></IeltsDateAndCenter>
            <IeltsCenterDetails></IeltsCenterDetails>
            <FeatureThree></FeatureThree>
            <FeatureFour></FeatureFour>
            <FeatureFive></FeatureFive>
            <FeatureSix></FeatureSix>
            <IeltsInfoGrid></IeltsInfoGrid>
            <FAQ></FAQ>
        </div>
    );
};

export default IeltsTestCenter;