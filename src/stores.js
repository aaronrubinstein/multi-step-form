import { readable, writable } from "svelte/store";

export const currentStep = writable(1);

export const formData = writable({
    name: '',
    email: '',
    phone: '',
    plan: 1,
    annualBilling: false,
    addOns: []
});

export const plans = readable([
    {
        id: 1,
        name: 'Arcade',
        priceMonthly: 9,
        priceYearly: 90,
        icon: 'icon-arcade.svg'
    },
    {
        id: 2,
        name: 'Advanced',
        priceMonthly: 12,
        priceYearly: 120,
        icon: 'icon-advanced.svg'
    },
    {
        id: 3,
        name: 'Pro',
        priceMonthly: 15,
        priceYearly: 150,
        icon: 'icon-pro.svg'
    }
]);

export const addOns = readable([
    {
        id: 1,
        name: 'Online service',
        description: 'Access to multiplayer games',
        priceMonthly: 1,
        priceYearly: 10
    },
    {
        id: 2,
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        priceMonthly: 2,
        priceYearly: 20
    },
    {
        id: 3,
        name: 'Customizable profile',
        description: 'Custom themes on your profile',
        priceMonthly: 2,
        priceYearly: 20
    }
]);