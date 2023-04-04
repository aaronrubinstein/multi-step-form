<script>
    import Input from "./Input.svelte";
    import { formData, currentStep } from "../stores";

    let validity = {
        name: {
            invalid: false,
            invalidMessage: ''
        },
        email: {
            invalid: false,
            invalidMessage: ''
        },
        phone: {
            invalid: false,
            invalidMessage: ''
        }
    }

    const validateInput = e => {
        if (e.target.type === 'email') {
            if (e.target.validity.typeMismatch) {
                validity.email.invalid = true;
                validity.email.invalidMessage = 'Invalid email';
            } else {
                validity.email.invalid = false;
            }
        } else if (validity[e.target.name].invalid && e.target.value.length) {
            validity[e.target.name].invalid = false;
        };
    }

    const nextStep = () => {
        let valid = true;
        
        for (const field of ['name', 'email', 'phone']) {
            if (!$formData[field].length) {
                validity[field].invalid = true;
                validity[field].invalidMessage = 'This field is required';
                valid = false;
            } else if (validity[field].invalid) {
                valid = false;
            }
        }
        
        if (valid) {
            $currentStep = 2;
        }
    }

</script>

<h1>Personal info</h1>
<p>Please provide your name, email address, and phone number.</p>

<div>
    <Input 
        name="name"
        label="Name"
        type="text"
        placeholder="e.g. Stephen King"
        bind:value={$formData.name}
        invalid={validity.name.invalid} 
        invalidMessage={validity.name.invalidMessage} 
        on:blur={validateInput}/>
    <Input 
        name="email"
        label="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        bind:value={$formData.email}
        invalid={validity.email.invalid} 
        invalidMessage={validity.email.invalidMessage}
        on:blur={validateInput} />
    <Input 
        name="phone"
        label="Phone Number"
        type="tel"
        placeholder="e.g. +1 234 567 8900"
        bind:value={$formData.phone}
        invalid={validity.phone.invalid} 
        invalidMessage={validity.phone.invalidMessage}
        on:blur={validateInput} />
</div>

<button on:click={nextStep} class="btn btn-primary" type="button">Next Step</button>

<style>
    p {
        margin-bottom: 35px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    button {
        display: block;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: 16px;
    }
</style>