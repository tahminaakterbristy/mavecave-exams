import React from 'react';
import FirstComponent from './FirstComponent/FirstComponent';
import SecondComponent from './SecondComponent/SecondCmponent';
import IeltsFeeTable from './IeltsFeeTable/IeltsFeeTable';
import CityWiseFee from './CityWiseFee/CityWiseFee';
import IeltsPayment from './IeltsPayment/IeltsPayment';
import IeltsCancellationFees from './IeltsCancellationFees/IeltsCancellationFees';
import IeltsRescedulingFee from './IeltsRescedulingFee/ieltsRescedulingFee';
import IeltsRevaluationFee from './IeltsRevaluationFee/IeltsRevaluationFee';
import IeltsResources from './IeltsResources/IeltsResources';
import IeltsInfoCard from './IeltsInfoCard/IeltsInfoCard';

import IeltsAtrFee from './IeltsAtrFee/IeltsAtrFee';
import IeltsFAQ from './IeltsFAQ/IeltsFAQ';

const IeltsFees = () => {
    return (
        <div classname="bg-gray-400">
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <IeltsFeeTable></IeltsFeeTable>
            <CityWiseFee></CityWiseFee>
            <IeltsPayment></IeltsPayment>
            <IeltsCancellationFees></IeltsCancellationFees>
            <IeltsRescedulingFee></IeltsRescedulingFee>
            <IeltsRevaluationFee></IeltsRevaluationFee>
            <IeltsAtrFee></IeltsAtrFee>
            <IeltsResources></IeltsResources>
            <IeltsInfoCard></IeltsInfoCard>
            <IeltsFAQ></IeltsFAQ>
        </div>
    );
};

export default IeltsFees;