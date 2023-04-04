<script>
    import {formData, plans, currentStep} from '../stores.js';
</script>

<h1>Select your plan</h1>
<p>You have the option of monthly or yearly billing.</p>

<div class="plan-container">
    {#each $plans as plan}
        <label class="plan-label" class:selected={plan.id === $formData.plan}>
            <input type="radio" name="plan" value={plan.id} 
                on:click={() => $formData.plan = plan.id}>
            <img src="images/{plan.icon}" alt="Arcade plan">
            <span class="plan-name">{plan.name}</span>
            {#if $formData.annualBilling}
                <span class="plan-price with-promo">${plan.priceYearly}/yr</span>
                <span class="promo">2 months free</span>
            {:else}
                <span class="plan-price">${plan.priceMonthly}/mo</span>
            {/if}
        </label>
    {/each}
</div>

<div class="billing-type-container">
    <span class="billing-type" class:selected={!$formData.annualBilling}>Monthly</span>
    <label class="track">
        <input class="checkbox" type="checkbox" bind:checked={$formData.annualBilling}>
        <span class="slider"></span>
    </label>
    <span class="billing-type" class:selected={$formData.annualBilling}>Yearly</span>
</div>

<div class="button-container">
    <button on:click={() => $currentStep = 1} class="btn btn-secondary" type="button">Go Back</button>
    <button on:click={() => $currentStep = 3} class="btn btn-primary" type="button">Next Step</button>
</div>

<style>
    
    p {
        margin-bottom: 35px;
    }

    .plan-container {
        display: flex;
        gap: 18px;
        width: 100%;
        margin-bottom: 32px;
    }
    
    input {
        appearance: none;
    }

    .plan-label {
        min-height: 170px;
        flex-basis: 138px;
        border: 1px solid var(--input-border);
        border-radius: 8px;
        padding: 20px 16px 16px 16px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .plan-label:hover {
        border: 1px solid var(--purple);
    }
    
    .plan-label.selected {
        background-color: var(--very-light-grey);
        border: 1px solid var(--purple);
    }

    img {
        height: 40px;
        width: 40px;
    }

    .plan-name {
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        color: var(--dark-blue);
        margin-top: auto;
        margin-bottom: 7px;
    }

    .plan-price {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: var(--grey);
    }

    .plan-price.with-promo {
        margin-bottom: 6px;
    }

    .promo {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: var(--dark-blue);
    }

    .billing-type-container {
        height: 48px;
        border-radius: 8px;
        background: var(--very-light-grey);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }

    .billing-type {
        font-size: 14px;
        font-weight: 700;
        color: var(--grey);
    }

    .billing-type.selected {
        color: var(--dark-blue);
    }

    .track {
        position: relative;
        display: inline-block;
        width: 38px;
        height: 20px;
        cursor: pointer;
    }

    .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 20px;
        background: var(--dark-blue);
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 12px;
        width: 12px;
        border-radius: 50%;
        left: 4px;
        bottom: 4px;
        background-color: var(--white);
        transition: .4s;
    }

    .checkbox:checked + .slider:before {
        transform: translateX(18px);
    }

    .button-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        margin-bottom: 16px;
    }

</style>