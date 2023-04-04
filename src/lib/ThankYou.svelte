<script>
    import { formData, currentStep } from '../stores.js';

    const resetForm = () => {
        $formData = {
            name: '',
            email: '',
            phone: '',
            plan: 1,
            annualBilling: false,
            addOns: []
        };

        $currentStep = 1;
    }

</script>

<div class="container">
    <img src="images/icon-thank-you.svg" alt="Thank you check mark">
    <h1>Thank you!</h1>
    <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    <button class="btn btn-secondary" type="button"
        on:click={resetForm}>
        Start again
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_90_157)">
            <path d="M10 18C7.76667 18 5.875 17.225 4.325 15.675C2.775 14.125 2 12.2333 2 10C2 7.76667 2.775 5.875 4.325 4.325C5.875 2.775 7.76667 2 10 2C11.15 2 12.25 2.24167 13.3 2.725C14.35 3.19167 15.25 3.86667 16 4.75V2H18V9H11V7H15.2C14.6667 6.06667 13.9333 5.33333 13 4.8C12.0833 4.26667 11.0833 4 10 4C8.33333 4 6.91667 4.58333 5.75 5.75C4.58333 6.91667 4 8.33333 4 10C4 11.6667 4.58333 13.0833 5.75 14.25C6.91667 15.4167 8.33333 16 10 16C11.2833 16 12.4417 15.6333 13.475 14.9C14.5083 14.1667 15.2333 13.2 15.65 12H17.75C17.2833 13.7667 16.3333 15.2083 14.9 16.325C13.4667 17.4417 11.8333 18 10 18Z" fill="currentColor"/>
            </g>
            <defs>
            <clipPath id="clip0_90_157">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
        </svg>   
    </button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        margin-top: 117px;
        margin-bottom: 32px;
    }

    h1 {
        margin-bottom: 14px;
    }

    p {
        text-align: center;
        margin-bottom: 95px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
    }

    button:hover {
        color: var(--purple);
    }
</style>