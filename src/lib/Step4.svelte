<script>
    import { formData, plans, addOns, currentStep } from '../stores.js';
    import ThankYou from './ThankYou.svelte';

    const selectedPlan = $plans.find(plan => plan.id === $formData.plan);
    const selectedAddOns = $addOns.filter(addOn => $formData.addOns.includes(addOn.id));
    
    let total;
    if ($formData.annualBilling) {
        total = selectedPlan.priceYearly +
            selectedAddOns.map(i => i.priceYearly).reduce((a, b) => a + b, 0);
        } else {
        total = selectedPlan.priceMonthly +
            selectedAddOns.map(i => i.priceMonthly).reduce((a, b) => a + b, 0);
    }

    let submitted = false;
</script>

{#if !submitted}
    <h1>Finishing up</h1>
    <p class="subheading">Double-check everything looks OK before confirming.</p>

    <div class="summary-container">
        <div class="plan-summary">
            <div>
                <p class="plan-name">
                    {selectedPlan.name} {#if $formData.annualBilling}(Yearly){:else}(Monthly){/if}
                </p>
                <button class="change-plan" type="button" 
                    on:click={() => $currentStep = 2}> Change
                </button>
            </div>
            <div class="plan-price">
                {#if $formData.annualBilling}
                    ${selectedPlan.priceYearly}/yr
                {:else}
                    ${selectedPlan.priceMonthly}/mo
                {/if}
            </div>  
        </div>

        {#if selectedAddOns.length}
            <hr>
            <div class="addons-container">
                {#each selectedAddOns as addOn}
                    <div class="row">
                        <span class="row-name">{addOn.name}</span>
                        {#if $formData.annualBilling}
                            <span class="addon-price">+${addOn.priceYearly}/yr</span>
                        {:else}
                            <span class="addon-price">+${addOn.priceMonthly}/mo</span>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}
    </div>

    <div class="row total-row">
        {#if $formData.annualBilling}
            <span class="row-name">Total (per year)</span>
            <span class="total">${total}/yr</span>
        {:else}
            <span class="row-name">Total (per month)</span>
            <span class="total">${total}/mo</span>
        {/if}
    </div>

    <div class="button-container">
        <button on:click={() => $currentStep = 3} class="btn btn-secondary" type="button">Go Back</button>
        <button on:click={() => submitted = true} class="btn btn-submit" type="button">Confirm</button>
    </div>

{:else}
    <ThankYou />
{/if}


<style>

    .subheading {
        margin-bottom: 35px;
    }

    .summary-container {
        background: var(--very-light-grey);
        border-radius: 8px;
        padding: 16px 24px 24px 24px;
        margin-bottom: 25px;
    }

    .plan-summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .plan-name {
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        color: var(--dark-blue);
        margin-bottom: 7px;
    }

    .change-plan {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--grey);
        text-decoration: underline;
        cursor: pointer;
    }

    .change-plan:hover {
        color: var(--purple);
    }

    .plan-price {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: var(--dark-blue);
    }

    hr {
        color: var(--grey);
        margin-top: 24px;
        margin-bottom: 16px;
    }

    .addons-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .row-name {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--grey);
    }

    .addon-price {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--dark-blue);
    }

    .total-row {
        padding: 0 24px;
    }

    .total {
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        color: var(--purple);
    }

    .button-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        margin-bottom: 16px;
    }

</style>