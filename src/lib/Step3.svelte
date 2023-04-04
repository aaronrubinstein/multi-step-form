<script>
    import { formData, addOns, currentStep } from '../stores.js';
</script>

<h1>Pick add-ons</h1>
<p>Add-ons help enhance your gaming experience.</p>

<div class="addon-container">
    {#each $addOns as addOn}
        <label class:selected={$formData.addOns.includes(addOn.id)}>
            <input type="checkbox" value={addOn.id} bind:group={$formData.addOns} >
            <div class="checkbox">
                <img src="images/icon-checkmark.svg" alt="checked icon">
            </div>
            <div class="name-container">
                <span class="name">{addOn.name}</span>
                <span class="description">{addOn.description}</span>
            </div>
            {#if $formData.annualBilling}
                <span class="price">+${addOn.priceYearly}/yr</span>
            {:else}
                <span class="price">+${addOn.priceMonthly}/mo</span>
            {/if}
        </label>
    {/each}
</div>

<div class="button-container">
    <button on:click={() => $currentStep = 2} class="btn btn-secondary" type="button">Go Back</button>
    <button on:click={() => $currentStep = 4} class="btn btn-primary" type="button">Next Step</button>
</div>

<style>

    p {
        margin-bottom: 35px;
    }

    .addon-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    label {
        display: flex;
        align-items: center;
        padding: 0 24px;
        border: 1px solid var(--input-border);
        border-radius: 8px;
        flex-basis: 81px;
        cursor: pointer;
    }

    label.selected {
        background: var(--very-light-grey);
        border: 1px solid var(--purple);
    }

    label:hover {
        border: 1px solid var(--purple);
    }

    input {
        appearance: none;
    }

    .checkbox {
        height: 20px;
        width: 20px;
        border: 1px solid var(--light-grey);
        border-radius: 4px;
        margin-right: 24px;
        display: grid;
        place-items: center;
    }

    input:checked + .checkbox {
        border: none;
        background: var(--purple);
    }

    .name {
        display: block;
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        color: var(--dark-blue);
        margin-bottom: 7px;
    }

    .description {
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        color: var(--grey);
    }

    .price {
        margin-left: auto;
        font-size: 14px;
        font-weight: 400;
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