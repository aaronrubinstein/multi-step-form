<script>
    import Stepper from './lib/Stepper.svelte';
    import Step1 from './lib/Step1.svelte';
    import Step2 from './lib/Step2.svelte';
    import Step3 from './lib/Step3.svelte';
    import Step4 from './lib/Step4.svelte';
    import { currentStep } from './stores.js';
</script>

<main>
    <Stepper currentStep={$currentStep} />
    <div class="main-content">
        {#if $currentStep === 1}
            <Step1 />
        {/if}
        {#if $currentStep === 2}
            <Step2 />
        {/if}
        {#if $currentStep === 3}
            <Step3 />
        {/if}
        {#if $currentStep === 4}
            <Step4 />
        {/if}
    </div>
</main>

<style>

    main {
        display: flex;
        background-color: var(--white);
        flex-basis: 940px;
        border-radius: 15px;
        box-shadow: 0px 25px 40px -20px hsla(0, 0%, 0%, 0.1);
        padding: 16px 0 16px 16px;
    }

    .main-content {
        padding: 40px 32px 0 32px;
        flex-basis: 514px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

</style>
