<script>
    import { crossfade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    
    export let currentStep;

    const [send, receive] = crossfade({
        duration: 800,
        easing: quintOut
    })

</script>

<div class="card">
    <div class="step">
        <div class="step-number" class:current-step={currentStep === 1}>
            <span class="number">1</span>
            {#if currentStep === 1}
                <div in:send={{key: '1'}} out:receive={{key: '1'}} class="current-highlight"></div>
            {/if}
        </div>
        <div class="step-text">
            <p class="step-label">Step 1</p>
            <p class="step-name">Your Info</p>
        </div>
    </div>
    <div class="step">
        <div class="step-number" class:current-step={currentStep === 2}>
            {#if currentStep === 2}
                <div in:send={{key: '1'}} out:receive={{key: '1'}} class="current-highlight"></div>
            {/if}
            <span class="number">2</span>
        </div>
        <div class="step-text">
            <p class="step-label">Step 2</p>
            <p class="step-name">Select Plan</p>
        </div>
    </div>
    <div class="step">
        <div class="step-number" class:current-step={currentStep === 3}>
            {#if currentStep === 3}
                <div in:send={{key: '1'}} out:receive={{key: '1'}} class="current-highlight"></div>
            {/if}
            <span class="number">3</span>
        </div>
        <div class="step-text">
            <p class="step-label">Step 3</p>
            <p class="step-name">Add-Ons</p>
        </div>
    </div>
    <div class="step">
        <div class="step-number" class:current-step={currentStep === 4}>
            {#if currentStep === 4}
                <div in:send={{key: '1'}} out:receive={{key: '1'}} class="current-highlight"></div>
            {/if}
            <span class="number">4</span>
        </div>
        <div class="step-text">
            <p class="step-label">Step 4</p>
            <p class="step-name">Summary</p>
        </div>
    </div>
</div>

<style>

    .card {
        flex-shrink: 0;
        width: 274px;
        height: 568px;
        background-image: url(images/bg-sidebar-desktop.svg);
        padding: 40px 32px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .step {
        display: flex;
        gap: 16px;
    }

    .step-number {
        position: relative;
        height: 33px;
        width: 33px;
        border: 1px solid var(--white);
        border-radius: 50%;
        text-align: center;
        line-height: 33px;
        font-size: 14px;
        font-weight: 700;
        color: var(--white);
    }

    .step-number.current-step {
        border: none;
        color: var(--dark-blue);
        transition: color 500ms 150ms
    }

    .number {
        position: relative;
        z-index: 1;
    }

    .current-highlight {
        height: 33px;
        width: 33px;
        border-radius: 50%;
        background-color: var(--sky-blue);
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .step-text {
        text-transform: uppercase;
    }

    .step-label {
        font-size: 12px;
        line-height: 14px;
        font-weight: 400;
        color: var(--light-blue);
        margin-bottom: 4px;
    }

    .step-name {
        font-size: 14px;
        font-weight: 700;
        color: var(--white);
        letter-spacing: 1px;
        line-height: 16px;
    }

</style>