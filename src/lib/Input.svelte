<script>
    export let name;
    export let label;
    export let type = 'text';
    export let placeholder = '';
    export let value;
    export let invalid = false;
    export let invalidMessage = '';
    
    function setInputType(node) {
        node.type = type;
    }

</script>

<div class="input-container">
    <div class="label-container">
        <label for={name}>{label}</label>
        {#if invalid}
            <span>{invalidMessage}</span>
        {/if}
    </div>
    <input
        use:setInputType
        {name}
        id={name}
        {placeholder}
        bind:value
        class:invalid
        on:blur >
</div>

<style>

    .label-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }

    label, span {
        font-size: 14px;
        line-height: 16px;
    }
    
    label {
        font-weight: 400;
        color: var(--dark-blue);
    }

    span {
        font-weight: 700;
        color: var(--red);
    }

    input {
        height: 48px;
        width: 100%;
        border: 1px solid var(--input-border);
        border-radius: 8px;
        padding: 0 16px;
        font-size: 16px;
        font-weight: 500;
        color: var(--dark-blue);
    }

    input::placeholder {
        color: var(--grey);
    }

    input:focus {
        outline: none;
        border: 1px solid var(--purple);
    }

    input.invalid {
        border: 1px solid var(--red);
    }

</style>