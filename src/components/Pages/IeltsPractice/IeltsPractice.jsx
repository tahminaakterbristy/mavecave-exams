import FAQ from "./FAq";
import IeltsDetails from "./IeltsDetails";
import IeltsMoreInfo from "./IeltsMoreInfo";
import IeltsReading from "./IeltsReading";
import IeltsSummary from "./IeltsSummary";
import Intro from "./Intro";


const IeltsPractice = () => {
    return (
        <div>
            <Intro></Intro>
            <IeltsReading></IeltsReading>
            <IeltsSummary></IeltsSummary>
            <IeltsDetails></IeltsDetails>
            <IeltsMoreInfo></IeltsMoreInfo>
            <FAQ></FAQ>
        </div>
    );
};

export default IeltsPractice;