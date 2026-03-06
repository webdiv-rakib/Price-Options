import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 19,
            "features": [
                "Gym access",
                "Locker room access",
                "Free WiFi",
                "1 fitness assessment",
                "Access to cardio equipment",
                "Mobile app access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 39,
            "features": [
                "24/7 gym access",
                "Locker room access",
                "Free WiFi",
                "2 group classes per week",
                "Fitness assessment",
                "Access to cardio & strength equipment",
                "Mobile app progress tracking",
                "Free parking"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 59,
            "features": [
                "24/7 gym access",
                "Unlimited group classes",
                "Sauna access",
                "Steam room access",
                "Free WiFi",
                "Monthly fitness assessment",
                "Mobile app progress tracking",
                "Free parking",
                "Guest pass (1 per month)"
            ]
        },
        {
            "id": 4,
            "name": "Elite Plan",
            "price": 89,
            "features": [
                "24/7 gym access",
                "Unlimited group classes",
                "Sauna & spa access",
                "Steam room",
                "Personal trainer (2 sessions/month)",
                "Nutrition consultation",
                "Body composition analysis",
                "Priority class booking",
                "Guest pass (2 per month)",
                "Free gym merchandise"
            ]
        },
        {
            "id": 5,
            "name": "Ultimate Plan",
            "price": 129,
            "features": [
                "24/7 gym access",
                "Unlimited group classes",
                "Sauna & spa access",
                "Steam room",
                "Personal trainer (weekly)",
                "Personalized workout program",
                "Nutrition consultation",
                "Body composition analysis",
                "VIP lounge access",
                "Guest pass (4 per month)",
                "Priority support",
                "Free gym merchandise"
            ]
        }
    ]
    return (
        <div className='m-12'>
            <h2 className='text-3xl'>Best Prices in the town</h2>
            <div className='md:grid md:grid-cols-3 gap-5 flex flex-col'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;